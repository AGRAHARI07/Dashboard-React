import { Component } from 'react';
import SearchBar from './SearchBar';
import ToggleBar from './ToggleBar'
import UserImage from './UserImage'

class Main extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return <div className="main">
            <div className="topbar">
                <ToggleBar />
                <SearchBar />
                <UserImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEIbqmZtPX4a0Hb1r4SjbK7ffx7bBXMhkFJnSOwN4d-4X1MZg4"/>
            </div>
        </div>;
    }
}

export default Main