import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
class SearchBar extends React.Component {
    render() {
        return (
            <div className="search-bar">
                <label htmlFor="SearchBar" className="search-bar--icon"><SearchIcon /> </label>
                <input className="search-bar-input" type="text" placeholder="Search" />
            </div>
        )
    }
}
export default SearchBar