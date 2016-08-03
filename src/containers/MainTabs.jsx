import React, { Component } from 'react';
import { connect } from 'react-redux'
import {openFocusTab,closeFocusTab} from '../actions/focus';
import {getPortfolio} from '../actions/positions';
import InstrumentGrid from './InstrumentGrid';
import _ from 'lodash'

import Focus from './Focus';
import Tabs from '../components/Tabs';
import TabsPane from '../components/TabsPane';

class MainTabs extends Component {

    componentDidMount() {
        // this.props.dispatch(getPortfolio())
    }

    handleOnCloseTab(index, event) {
        console.log("Closing", index);
    }

    handleOnChangeTab(index, event) {
        console.log("Changing", index);
    }

    render() {
        return (
            <Tabs active={this.props.tabs.active} onCloseTab={this.handleOnCloseTab.bind(this)} onChangeTab={this.handleOnChangeTab.bind(this)}>
                { this.props.tabs ? this.props.tabs.items.map(tab => {
                    
                    switch(tab.type) {

                        case 'portfolio':
                            return (
                                <TabsPane label={tab.label} group="left" key={_.uniqueId('mainTabs')}>
                                    <InstrumentGrid instruments={this.props.instruments} />
                                </TabsPane>
                            )

                        case 'watchlist':
                            return (
                                <TabsPane label={tab.label} group="left" key={_.uniqueId('mainTabs')}>
                                    WATCHLIST
                                </TabsPane>
                            )

                        case 'focus':

                            const instrument = _.find(this.props.instruments, instrument => instrument._id === id);
                            return instrument ?
                                (
                                    <TabsPane key={_.uniqueId('mainTabs')} label={instrument._name} group="right" closable={true}>
                                        <Focus instrument={instrument} />
                                    </TabsPane>
                                )
                            : false
                        
                        default:
                            return false
                        
                        
                    }
                    
                }) : false }
            </Tabs>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        instruments: state.instruments,
        tabs: state.tabs
    }
}


const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatch
});
    
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainTabs)