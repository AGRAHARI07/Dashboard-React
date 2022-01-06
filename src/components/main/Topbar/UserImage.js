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
            ></img>
        </div>
    }
}

export default UserImage