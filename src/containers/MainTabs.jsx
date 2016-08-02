import React, { Component } from 'react';
import { connect } from 'react-redux'
import {openFocusTab,closeFocusTab} from '../actions/focus';
import InstrumentGrid from './InstrumentGrid';
import _ from 'lodash'

import Focus from './Focus';
import Tabs from '../components/Tabs';
import TabsPane from '../components/TabsPane';

class MainTabs extends Component {

    constructor() {
        super()
        this.state = {
            active: 0
        }
    }

    componentWillReceiveProps(props) {
        const active = props.active;
        const instrument = _.findIndex(props.focuses, focus => focus === active)
        if(instrument > -1) {
            this.setState({
                active: 2 + instrument
            })
        }
    }

    handleOnCloseTab(index, event) {
        this.props.handleOnCloseTab(this.props.focuses[index - 2]);
        this.setState({
            active: index - 1
        })
    }

    handleOnChangeTab(index, event) {
        this.setState({
            active: index
        })
        this.props.dispatch(openFocusTab(0));
    }

    render() {
        return (
            <Tabs active={this.state.active} onCloseTab={this.handleOnCloseTab.bind(this)} onChangeTab={this.handleOnChangeTab.bind(this)}>
                <TabsPane label="Portfolio" group="left">
                    <InstrumentGrid instruments={this.props.instruments}/>
                </TabsPane>
                <TabsPane label="Watchlist" group="left">
                    DERP
                </TabsPane>
                { this.props.focuses ? this.props.focuses.map((id, i) => {

                    const instrument = _.find(this.props.instruments, instrument => instrument._id === id);
                    if (instrument) {
                        return <TabsPane key={"tabsPanes" + i} label={instrument._name} group="right" closable={true}>
                            <Focus instrument={instrument}/>
                        </TabsPane>
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
        focuses: state.focuses.instruments,
        active: state.focuses.active
    }
}


const mapDispatchToProps = (dispatch, ownProps) => ({
    handleOnCloseTab(instrumentId) {
        dispatch(closeFocusTab(instrumentId))
    },
    dispatch
});
    
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainTabs)