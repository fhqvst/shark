import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from '../actions/search';
import { openFocusTab, addTab } from '../actions/tabs';
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
                                    <button className="search__link" onClick={this.props.handleOnClick.bind(this, instrument.id)}>{instrument.name}</button>
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
    search: state.search,
    tabs: state.tabs.items
});

export default connect(mapStateToProps)(Search)

// export default connect(
//     mapStateToProps,
//     null,
//     (stateProps, dispatchProps, ownProps) => {
//
//         let newProps = Object.assign({}, stateProps, dispatchProps, ownProps)
//
//         newProps.handleOnChange = event => {
//             event.preventDefault()
//             dispatchProps.dispatch(search(event.target.value));
//         }
//
//         newProps.handleOnClick = (id, event) => {
//             event.preventDefault()
//             if(_.find(newProps.focuses, focus => focus === id)) {
//                 dispatchProps.dispatch(openFocusTab(id));
//             } else {
//                 dispatchProps.dispatch(addFocusTab(id));
//             }
//         }
//
//         return newProps;
//     }
// )(Search);