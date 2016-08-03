import React, { Component } from 'react';
import { connect } from 'react-redux'
import {openTab, closeTab} from '../actions/tabs';
import {getPortfolio} from '../actions/positions';
import InstrumentGrid from './InstrumentGrid';
import _ from 'lodash'

import Focus from './Focus';
import Tabs from '../components/Tabs';
import TabsPane from '../components/TabsPane';

class MainTabs extends Component {

    render() {
        return (
            <Tabs active={this.props.tabs.active} onCloseTab={this.props.handleOnCloseTab.bind(this)} onChangeTab={this.props.handleOnChangeTab.bind(this)}>
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

                            const instrument = _.find(this.props.instruments, instrument => instrument._id === tab.instrumentId);
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
    handleOnChangeTab: index => {
        dispatch(openTab(index));
    },
    handleOnCloseTab: index => {
        dispatch(closeTab(index));
        dispatch(openTab(index === 2 ? 0 : index - 1));
    }
});
    
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainTabs)