import React from 'react';
import './Library.css';
import FilterBar from './FilterBar/FilterBar'
import mockedMovies from './mockedMovies'
import MovieCover from './MovieCover/MovieCover'
import SortBar from './SortBar/SortBar'

class Library extends React.Component {
    state = {
        movies: mockedMovies
    }

    render() {
        return (
            <div className="library">
                <div>
                    <div className="filterAndSort">
                        <FilterBar />
                        <SortBar />
                    </div>
                    <div>{this.state.movies.length} movies found</div>
                    <div className="movieCovers">
                        {this.state.movies.map(movie => <MovieCover movie={movie}/>)}
                    </div>
                </div>
            </div>)
    }
}

export default Library;