import React, {useState} from 'react';
import Library from './../Library/Library';
import Search from './../Search/Search';
import Details from './../Details/Details';
import Footer from './../Footer/Footer';
import './Homepage.css';

export default () => {
    const [selectedMovie, setSelectedMovie] = useState(null);

    return (
        <div className="homepage">
            {selectedMovie
            ? <Details movie={selectedMovie}/>
            : <Search />}
            <Library onMovieSelect={(movie) => {
                    setSelectedMovie(movie)}
                }/>
            <Footer />
        </div>
    );
};