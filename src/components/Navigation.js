import { Component } from 'react';
import NavigationButton from './NavigationButton'
import { NAVIGATION_BUTTON } from './../assets/navigationElements'

class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    getNavigationButton() {
        return NAVIGATION_BUTTON.map(element => <NavigationButton logoName={element.logoName} text={element.text} />)
    }

    render() {
        return <div className="navigation">
            <ul>{this.getNavigationButton()}</ul>
        </div>;
    }
}

export default Navigation