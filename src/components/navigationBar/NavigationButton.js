import { Component } from 'react';

class NavigationButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false
        };

        this.handleHover = this.handleHover.bind(this);
    }

    handleHover() {
        this.setState(prevState => ({
            isHovered: !prevState.isHovered
        }));
    }

    render() {
        return <li
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleHover}
            className={this.state.isHovered ? 'hovered' : ''}
        >
            <a href={this.props.href}>
                <span className="icon">
                    <ion-icon name={this.props.logoName}></ion-icon>
                </span>
                <span className="title">{this.props.text}</span>
            </a>
        </li>;
    }
}

export default NavigationButton