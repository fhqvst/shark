import React, { Component } from 'react';
import { connect } from 'react-redux'
import Login from './Login';
import Search from './Search';
import Metadata from './Metadata';
import Notifications from './Notifications';
import InstrumentGrid from './InstrumentGrid';
import _ from 'lodash'

import Tabs from '../components/Tabs';
import TabsButtons from '../components/TabsButtons';
import TabsButton from '../components/TabsButton';
import TabsGroup from '../components/TabsGroup';
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
                            <TabsButtons grouped={true}>
                                <TabsGroup>
                                    <TabsButton>Portfolio</TabsButton>
                                    <TabsButton>Watchlist</TabsButton>
                                </TabsGroup>
                                <TabsGroup>
                                    { this.props.focuses ? this.props.focuses.map((id, i) => {

                                        const instrument = _.find(this.props.instruments, instrument => instrument.id === id);

                                        if(instrument) {
                                            return <TabsButton key={"tabsButtons" + i}>{instrument.name}</TabsButton>
                                        }

                                    }) : false }
                                </TabsGroup>
                            </TabsButtons>
                            <TabsPane>
                                <InstrumentGrid instruments={this.props.instruments} />
                            </TabsPane>
                            <TabsPane>
                                DERP
                            </TabsPane>
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