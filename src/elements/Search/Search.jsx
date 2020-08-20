import React from 'react';
import './Search.css';
import NetflixRouletteText from './../NetflixRouletteText/NetflixRouletteText'

class Search extends React.Component {
    render() {
        return (
            <div className="search">
                <div className="searchBackground">
                </div>
                <div className="searchContent">
                    <NetflixRouletteText />
                </div>
            </div>)
    }
}

export default Search;