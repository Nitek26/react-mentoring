import React from 'react';
import './Search.css';
import NetflixRouletteText from './../NetflixRouletteText/NetflixRouletteText';
import Button from './../TransparentButton/TransparentButton';

class Search extends React.Component {
    render() {
        return (
            <div className="search">
                <div className="searchBackground">
                </div>
                <div className="searchContent">
                    <NetflixRouletteText className="cornerText" />
                    <Button>+ ADD MOVIE</Button>
                    <div className="findYourMovie">
                        FIND YOUR MOVIE
                        <div className="searchBar">
                            <input placeholder="What do you want to watch?" />
                            <button>SEARCH</button>
                        </div>
                    </div>
                </div>
            </div>)
    }
}

export default Search;