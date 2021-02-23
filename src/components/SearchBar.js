import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
class SearchBar extends React.Component {
    state = { matches: window.matchMedia("(max-width: 768px)").matches };


    componentDidMount() {
        const handler = e => this.setState({ matches: e.matches });
        window.matchMedia("(max-width: 768px)").addListener(handler);
    }
    render() {
        return (
            <div className={this.state.matches ? "search-bar display" : "search-bar"}>
                <label htmlFor="SearchBar" className="search-bar--icon"><SearchIcon /> </label>
                <input className="search-bar-input" type="text" placeholder="Search" />
            </div>
        )
    }
}
export default SearchBar