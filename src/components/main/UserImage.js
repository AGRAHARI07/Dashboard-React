import { Component } from 'react';

class UserImage extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return <div className="user">
            <img
            src={this.props.src}
            alt='userImage'
            width="200"
            height="250"
            ></img>
        </div>
    }
}

export default UserImage