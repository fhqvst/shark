import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from '../components/Loader';

class Focus extends Component {

    componentDidMount() {
    }

    render() {
        const instrument = this.props.instrument;
        return (
            <div className="focus__wrapper">
                { instrument ?
                    <div className="focus__content">
                        <div className="focus__top">
                            <h1 className="focus__title">{ instrument.name }</h1>
                        </div>
                    </div>
                    : <Loader />
                }
            </div>
        )
    }

}

const mapStateToProps = state => ({
    positions: state.positions,
    user: state.user
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatch
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Focus);