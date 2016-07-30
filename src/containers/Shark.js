import React, { Component } from 'react';
import { connect } from 'react-redux'

const Shark = () => {
    return (
        <main>
            <div className="titlebar"></div>
            <header className="header">
                <div className="search"></div>
                <div className="meta"></div>
            </header>
            <div className="content">
                <div className="tabs">
                    <div className="tabs__buttons">
                        <button className="button tabs__button">Portfolio</button>
                    </div>
                    <div className="tabs__panes">
                        <div className="tabs__pane">
                            Portfölj
                        </div>
                    </div>
                </div>
                <div className="sidebar">
                    Sidebar
                </div>
            </div>
        </main>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {

    }
}

export default connect(
    mapStateToProps
)(Shark)