import { Component } from 'react';
import Navigation from './navigationBar/Navigation'
import Main from './main/Main'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isToggled: false,
        };

        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick(e) {
        this.setState(prevState => ({
            isToggled: !prevState.isToggled
        }));
    }

    render() {
        return <div className="container">
            <Navigation isToggled={this.state.isToggled} />
            <Main handleToggleClick={this.handleToggleClick} />
        </div>;
    }
}

export default App