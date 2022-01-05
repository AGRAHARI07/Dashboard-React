import { Component } from 'react';
import TopBar from './Topbar';

class Main extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return <div className={`main ${this.props.isToggled ? 'active' : ''}`}>
            <TopBar handleToggleClick={this.props.handleToggleClick}/>
        </div>;
    }
}

export default Main