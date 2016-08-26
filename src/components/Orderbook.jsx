import React from 'react'

export default ({orderbook}) => (
    <div className="orderbook">
        <div className="orderbook__inner">
            <table className="orderbook__table">
                <thead>
                    <tr>
                        <th>Volume</th>
                        <th>Bid</th>
                        <th>Buyers</th>
                        <th>Sellers</th>
                        <th>Ask</th>
                        <th>Volume</th>
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