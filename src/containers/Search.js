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
                                    <button className="search__link" onClick={this.props.handleOnClick.bind(this, instrument)}>{instrument.name}</button>
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

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { tabs } = stateProps;
    const { dispatch } = dispatchProps;

    return {
        ...ownProps,
        ...stateProps,
        handleOnChange: event => {
            if(event.target.value.length > 2) {
                dispatch(search(event.target.value));
            }
        },
        handleOnClick: instrument => {
            if(_.find(tabs.items, tab => tab.instrumentId === instrument.id)) {
                dispatch(openFocusTab(instrument.id));
            } else {
                dispatch(addTab({
                    type: 'focus',
                    label: instrument.name,
                    instrumentId: instrument.id
                }));
            }
        }
    }
}

export default connect(
    mapStateToProps,
    null,
    mergeProps
)(Search);