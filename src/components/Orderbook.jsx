import React, { Component } from 'react'
import makeGetOrdebook from '../selectors/orderbook'
import { connect } from 'react-redux';
import getOrderbook from '../actions/orderbook'

export default class Orderbook extends Component {

    componentDidMount() {
        this.props.dispatch(
            getOrderbook(this.props.instrumentId)
        )
    }

    render() {
        return (
            <div className="orderbook">
                <div className="orderbook__inner">
                    <table className="orderbook__table">
                        <thead>
                        <tr>
                            <th>Vol</th>
                            <th>Bid</th>
                            <th>Buy</th>
                            <th>Sel</th>
                            <th>Ask</th>
                            <th>Vol</th>
                        </tr>
                        </thead>
                        <tbody>
                        { this.props.orderbook ? this.props.orderbook.levels.map((value, index) => (
                            <tr key={index}>
                                <td>
                                    { Math.floor(value * Math.random()) }
                                </td>
                                <td>
                                    { Math.floor(value * Math.random()) }
                                </td>
                                <td></td>
                                <td></td>
                                <td>
                                    { Math.floor(value * Math.random()) }
                                </td>
                                <td>
                                    { Math.floor(value * Math.random()) }
                                </td>
                            </tr>
                        )) : false }
                        <tr>
                            <td>

                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>

                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

const mapStateToProps = () => {
    return (state, props) => {
        return {
            orderbook: makeGetOrdebook()(state, props)
        }
    }

}

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatch
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Orderbook)