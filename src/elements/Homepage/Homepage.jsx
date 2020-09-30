import React from 'react';
import Library from './../Library/Library';
import Search from './../Search/Search';
import Details from './../Details/Details';
import Footer from './../Footer/Footer';
import Modal from './../Modal/Modal';
import './Homepage.css';

class Homepage extends React.Component {
    state = {
        selectedMovie: null
    }

    onMovieSelect = (movie) => {
        console.log("click! ", movie);
        this.setState({selectedMovie: movie});
    }

    render() {
        return (
            <div className="homepage">
                {this.state.selectedMovie
                ? <Details movie={this.state.selectedMovie}/>
                : <Search />}
                <Library onMovieSelect={this.onMovieSelect}/>
                <Footer />
            </div>
        );
    }
}

export default Homepage;