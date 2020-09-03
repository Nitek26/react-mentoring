import React from 'react';
import './Search.css';
import NetflixRouletteText from './../NetflixRouletteText/NetflixRouletteText';
import AddEditModal from '../Modal/AddEditModal/AddEditModal';

class Search extends React.Component {
    state = {
        addModalVisible: false
    }

    showAddModal = () => {
        console.log(this.state.addModalVisible);
        this.setState({ addModalVisible: true });
    }
    
    closeAddModal = () => {
        this.setState({ addModalVisible: false });
    }

    render() {
        return (
            <div className="search">
                <div className="searchBackground">
                </div>
                <div className="searchContent">
                    <NetflixRouletteText className="cornerText" />
                    <button onClick={this.showAddModal} className="addMovieButton">+ ADD MOVIE</button>
                    <div className="findYourMovie">
                        FIND YOUR MOVIE
                        <div className="searchBar">
                            <input placeholder="What do you want to watch?" />
                            <button className="searchButton">SEARCH</button>
                        </div>
                    </div>
                </div>
                {this.state.addModalVisible ? <AddEditModal onClose={this.closeAddModal} /> : null}
            </div>)
    }
}

export default Search;