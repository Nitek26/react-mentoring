import React from 'react';
import './Library.css';
import FilterBar from './FilterBar/FilterBar'
import mockedMovies from './mockedMovies'
import MovieCover from './MovieCover/MovieCover'
import SortBar from './SortBar/SortBar'

const sortingProps = [
    {value:"release_date", name:"RELEASE DATE"},
    {value:"vote_average", name:"VOTE AVERGAGE"},
    {value:"vote_count", name:"VOTE COUNT"},
    {value:"runtime", name:"RUNTIME"},
    {value:"budget", name:"BUDGET"},
    {value:"revenue", name:"REVENUE"},
    {value:"title", name:"TITLE"},
];

const sortMovies = (movieA, movieB, sortProp) => {
    return movieA[sortProp] < movieB[sortProp] ? 1 : -1;
}

const filterMovies = (movie, filterProp) => {
    return filterProp === null || filterProp === "all" ? true : movie.genres.find(g => g.toLowerCase() === filterProp);
}

class Library extends React.Component {
    state = {
        movies: mockedMovies,
        sortBy: null,
        filterBy: null
    }

    sortCallback = (sortProp) => {
        this.setState({sortBy: sortProp});
    }

    filterCallback = (filterProp) => {
        this.setState({filterBy: filterProp});
    }

    render() {
        var filteredMovies = this.state.movies.filter((movie) => filterMovies(movie, this.state.filterBy));
        var sortedMovies = filteredMovies.sort((a,b) => sortMovies(a, b, this.state.sortBy));

        return (
            <div className="library">
                <div>
                    <div className="filterAndSort">
                        <FilterBar filterCallback={this.filterCallback}/>
                        <SortBar sortBy={sortingProps} sortCallback={this.sortCallback}/>
                    </div>
                    <div>{sortedMovies.length} movies found</div>
                    <div className="movieCovers">
                        {sortedMovies.map(movie => <MovieCover movie={movie}/>)}
                    </div>
                </div>
            </div>)
    }
}

export default Library;