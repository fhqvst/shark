import React from 'react'

export default ({orderbook}) => (
    <div className="orderbook">
        <div className="orderbook__inner">
            <table className="orderbook__table">
                <thead>
                    <tr>
                        <th>Volume</th>
                        <th>Bid</th>
                        <th>Ask</th>
                        <th>Volume</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            
                            { Math.floor(100 * Math.random()) }
                        </td>
                        <td>
                            { Math.floor(100 * Math.random()) }
                        </td>
                        <td>
                            { Math.floor(100 * Math.random()) }
                        </td>
                        <td>
                            { Math.floor(100 * Math.random()) }
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
)