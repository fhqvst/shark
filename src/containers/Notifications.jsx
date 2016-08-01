import React, { Component } from 'react';
import { connect } from 'react-redux';

class Notifications extends Component {

    render() {
        return (
            <div className="notifications">
                <div className="notifications__item">
                    <div className="notifications__text">
                        <span>This is a notification.</span>
                        <p>And here's some important text you should read.</p>
                    </div>
                    <div className="notifications__button">
                        <button className="button is-small">
                            Buy
                        </button>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    notifications: state.notifications
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Notifications);