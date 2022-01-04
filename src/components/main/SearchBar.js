import { Component } from 'react';

class SearchBar extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return <div className="search">
            <label for="search">
                <input type="text" id="search" placeholder="Search here" />
                <ion-icon name="search-outline"></ion-icon>
            </label>
        </div>
    }
}

export default SearchBar