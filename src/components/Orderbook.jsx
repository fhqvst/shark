import React from 'react'

export default class Orderbook extends Component {

    constructor() {
        super()
        this.props.dispatch()
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
                        { [1, 2, 3, 4, 5].map((value, index) => (
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
                        )) }
                        <tr>
                            <td>
                                { Math.floor(100 * Math.random()) }
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                { Math.floor(100 * Math.random()) }
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleOnSubmit: event => {

    },
    dispatch
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Orderbook)