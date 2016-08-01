import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from '../actions/search';
import _ from 'lodash';

class Search extends Component {

    render() {
        return (
            <div className={'search' + (this.props.search.loading ? ' is-loading' : '')}>
                <input type="search" id="search" className="search__input" placeholder="Search..." onChange={this.props.handleOnChange} />
                <div className="search__results">
                    { _.map(this.props.search.results, (instruments, type) => (
                        <ul key={'searchInstruments' + type} className="search__instruments">
                            { _.map(instruments, instrument => (
                                <li key={'searchInstrument' + instrument.id} className="search__instrument">
                                    <button className="search__link">{instrument.name}</button>
                                </li>
                            )) }
                        </ul>
                    )) }
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    search: state.search
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleOnChange: event => {
        event.preventDefault()
        dispatch(search(event.target.value));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);