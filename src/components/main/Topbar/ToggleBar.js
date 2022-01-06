import { Component } from 'react';

class ToggleBar extends Component {
    constructor(props) {
        super(props);
    }

    handleToggleClick(e) {
        this.props.handleInputValue(e)
    }

    render() {
        return <div className="toggle" onClick = {this.props.handleToggleClick}>
            <ion-icon name="menu-outline"></ion-icon>
        </div>
    }
}

export default ToggleBar