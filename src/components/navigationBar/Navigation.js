import { Component } from 'react';
import NavigationButton from './NavigationButton'
import { NAVIGATION_BUTTON } from '../../assets/configurableData'

class Navigation extends Component {
    // constructor(props) {
    //     super(props);
    // }

    getNavigationButton() {
        return NAVIGATION_BUTTON.map(element => <NavigationButton key={element.key || element.text} logoName={element.logoName} text={element.text} href={element.href || '#'} />)
    }

    render() {
        return <div className={`navigation ${this.props.isToggled ? 'active' : ''}`}>
            <ul>{this.getNavigationButton()}</ul>
        </div>;
    }
}

export default Navigation