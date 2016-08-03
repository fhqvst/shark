const gulp = require('gulp')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const rename = require('gulp-rename')
const postcss = require('gulp-postcss')
const imagemin = require('gulp-imagemin')
const plumber = require('gulp-plumber')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const del = require('del')
const livereload = require('gulp-livereload')
const iconfontcss = require('gulp-iconfont-css')
const iconfont = require('gulp-iconfont')
const path = require('path')

/**
 * Settings
 */
const BASE = './'
const PATHS = {
    styles: {
        entry:  BASE + 'src/assets/styles/app.scss',
        src:    BASE + 'src/assets/styles/**/*.scss',
        dest:   BASE + 'dist/assets/styles/'
    },
    scripts: {
        src:   [BASE + 'src/**/*.js', BASE + 'src/**/*.jsx'],
        dest:   BASE + 'dist/'
    },
    images: {
        src:    BASE + 'src/assets/images/**/*',
        dest:   BASE + 'dist/assets/images/'
    },
    fonts: {
        src:    BASE + 'src/assets/fonts/**/*',
        dest:   BASE + 'dist/assets/fonts/'
    },
    icons: {
        src:    BASE + 'src/assets/icons/**/*',
        dest:   BASE + 'dist/assets/icons/'
    },
    view: {
        entry:    BASE + 'src/index.html',
        dest:   BASE + 'dist/'
    }
}

/**
 * Allow node-sass to look for files inside the node_modules folder
 */
let importerCache = {}
function importer(url, file, done) {

    if(importerCache[url]) {
        return done( {file: importerCache[url] })
    }

    function finish(url, path) {
        importerCache[url] = path
        return done( {file: path })
    }

    if(path.extname(url)) {
        try {
            return finish(url, path.relative(path.dirname(file), require.resolve(url)))
        } catch(e) {}
    } else {

        try {
            return finish(url, path.relative(path.dirname(file), require.resolve(url + '.scss')))
        } catch(e) {}

        try {
            return finish(url, path.relative(path.dirname(file), require.resolve(url + '.css')))
        } catch(e) {}

        try {
            return finish(url, path.relative(path.dirname(file), require.resolve(url + '.sass')))
        } catch(e) {}

    }

    return finish(url, url)
}

/**
 * Compile the SCSS with gulp-sass, autoprefixer and cssnano
 *
 * Plumber let's the task continue on error without crashing
 * Cssnano and autoprefixer are postcss plugins which minify and prefix your css
 */
function styles() {
    return gulp.src(PATHS.styles.entry)
        .pipe(sourcemaps.init('.'))
        .pipe(sass({
            importer: importer
        }))
        .on('error', function (err) {
            console.error('\n' + err.toString() + '\n')
            this.emit("end")
        })
        .pipe(postcss([
            autoprefixer({
                browsers: ['last 2 versions']
            }),
            cssnano()
        ]))
        .pipe(rename({
            basename: 'app'
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(PATHS.styles.dest))
}

/**
 * Grab all .svg's from the icons folder and generate an iconfont
 */
function icons() {
    return gulp.src(PATHS.icons.src + '.svg')
        .pipe(iconfontcss({
            fontName: 'icons',
            targetPath: 'icons.css'
        }))
        .pipe(iconfont({
            fontName: 'icons', // required
            appendUnicode: false, // recommended option
            normalize:true,
            fontHeight: 1001,
            formats: ['ttf', 'eot', 'woff', 'woff2', 'svg']
        }))
        .pipe(gulp.dest(PATHS.icons.dest))
}

/**
 * Browsers do not support require()-syntax, and Browserify solves this.
 * Start from the entry point and recursively compile imported files.
 */
function scripts() {
    return gulp.src(PATHS.scripts.src)
        .pipe(sourcemaps.init('.'))
        .pipe(babel()).on('error', e => {
            console.log(e.stack);
            this.emit('end');
        })
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(PATHS.scripts.dest))
        .pipe(livereload());
}

/**
 * Compress images
 */
function images() {
    return gulp.src(PATHS.images.src)
        .pipe(imagemin())
        .pipe(gulp.dest(PATHS.images.dest))
        .pipe(livereload())
}

/**
 * Move fonts to dist folder (pretty useless...)
 */
function fonts() {
    return gulp.src(PATHS.fonts.src)
        .pipe(gulp.dest(PATHS.fonts.dest))
        .pipe(livereload())
}

/**
 * Move fonts to dist folder (pretty useless...)
 */
function view() {
    return gulp.src(PATHS.view.entry)
        .pipe(gulp.dest(PATHS.view.dest))
        .pipe(livereload())
}

/**
 * Run all the build tasks
 */
const build = gulp.series(styles, scripts, images, fonts, icons, view)

/**
 * Run all the build tasks and start the livereload server
 */
function watch() {

    livereload.listen()

    // Livereload reloads the whole page unless the reloaded file is *.css.
    // Hence we must have one watcher for .scss and one for .css.
    gulp.watch(PATHS.view.entry, view)
    gulp.watch(PATHS.styles.src, styles)
    gulp.watch(PATHS.styles.dest + '*.css', () => (gulp.src(PATHS.styles.dest + 'app.css').pipe(livereload())))

    gulp.watch(PATHS.images.src, images)
    gulp.watch(PATHS.fonts.src, fonts)
    gulp.watch(PATHS.scripts.src, scripts)
}

gulp.task('default', gulp.series(build, watch))