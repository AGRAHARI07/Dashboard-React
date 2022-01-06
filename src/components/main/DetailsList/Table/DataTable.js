import { Component } from 'react';
import DUMMY_DATA from '../../../../assets/dummyData'

export default class DataTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [],
            columnsToHide: ["_id"],
            results: this.getResults()
        };
    }

    componentDidMount() {
        this.mapDynamicColumns();
    }

    getResults() {
        // can be used to fetch the data from API server too
        return DUMMY_DATA
    }

    mapDynamicColumns() {
        const columns = []
        const results = this.state.results

        results.forEach(result => {
            Object.keys(result).forEach(column => {
                if (!columns.includes(column)) {
                    columns.push(column)
                }
            })

            this.setState({ columns })
        })
    }

    addTableRow(result) {
        let row = [];
        this.state.columns.forEach((col) => {
            if (!this.state.columnsToHide.includes(col)) {
                row.push(
                    Object.keys(result).map((item) => {
                        if (result[item] && item === col) {
                            return result[item];
                        } else if (item === col) {
                            return "No Value";
                        }
                    })
                );
                row = this.filterDeepUndefinedValues(row);
            }
        });

        return row.map((item, index) => {
            // console.log(item, "item ?");
            return (
                <td
                    key={`${item}--${index}`}
                    className=""
                >
                    {item}
                </td>
            );
        });
    };

    render() {
        return
    }
}