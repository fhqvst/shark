import React, { Component } from 'react';
import { connect } from 'react-redux'
import Login from './Login';
import Search from './Search';
import Metadata from './Metadata';
import Notifications from './Notifications';
import InstrumentGrid from './InstrumentGrid';
import _ from 'lodash'

import Focus from './Focus';
import Tabs from '../components/Tabs';
import TabsPane from '../components/TabsPane';

class Shark extends Component {

    render() {

        return this.props.user.authenticated ?
            <main>
                <div className="titlebar"></div>
                <header className="header">
                    <Search />
                    <Metadata />
                </header>
                <div className="content">
                    <div className="main">
                        <Tabs>
                            <TabsPane label="Portfolio">
                                <InstrumentGrid instruments={this.props.instruments} />
                            </TabsPane>
                            <TabsPane label="Watchlist">
                                DERP
                            </TabsPane>
                            { this.props.focuses ? this.props.focuses.map((id, i) => {

                                const instrument = _.find(this.props.instruments, instrument => instrument._id === id);
                                if(instrument) {
                                    return <TabsPane key={"tabsPanes" + i} label={instrument._name} focus={true}>
                                        <Focus instrument={instrument} />
                                    </TabsPane>
                                }

                            }) : false }
                        </Tabs>
                    </div>
                    <div className="sidebar">
                        <Notifications />
                    </div>
                </div>
            </main> : <Login />
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        instruments: state.instruments,
        focuses: state.focuses
    }
}

export default connect(
    mapStateToProps
)(Shark)