import { Component } from 'react';

class NavigationButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <li>
            <a href="#">
                <span className="icon">
                    <ion-icon name={this.props.logoName}></ion-icon>
                </span>
                <span className="title">{this.props.text}</span>
            </a>
        </li>;
    }
}

export default NavigationButton