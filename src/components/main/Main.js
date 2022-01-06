import { Component } from 'react';
import TopBar from './Topbar/Topbar';
import CardBox from './CardBox/CardBox';
import { CARD_DATA } from '../../assets/configurableData'

class Main extends Component {
    constructor(props) {
        super(props);
    }

    getCards() {
        return CARD_DATA.map(element => <CardBox key={element.key || element.text} logoName={element.logoName} text={element.text} number={element.number} />)
    }

    render() {
        return <div className={`main ${this.props.isToggled ? 'active' : ''}`}>
            <TopBar handleToggleClick={this.props.handleToggleClick} />

            {/* Cards */}
            <div className="cardBox">
                {this.getCards()}
            </div>

            {/* Data list: TODO */}
        </div>;
    }
}

export default Main