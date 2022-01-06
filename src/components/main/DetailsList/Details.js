import { Component } from 'react';
import DataTable from './DataTable'

export default class Details extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="details">
            <div className="recentOrders">
                <div className="cardHeaders">
                    <h2>Recent Orders</h2>
                    <a className="btn" href="#">View All</a>
                </div>
            </div>
            <DataTable/>
        </div>
    }
}