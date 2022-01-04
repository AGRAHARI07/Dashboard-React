import { Component } from 'react';
import Navigation from './navigationBar/Navigation'
import Main from './main/Main'

class App extends Component {
    render() {
        return <div className="container">
            <Navigation />
            <Main />
        </div>;
    }
}

export default App