import { Component } from 'react';

class CardBox extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return <div className="card">
            <div>
                <div className="numbers">{this.props.number}</div>
                <div className="cardName">{this.props.text}</div>
            </div>
            <div className="iconBox">
                <ion-icon name={this.props.logoName}></ion-icon>
            </div>
        </div>
    }
}

export default CardBox