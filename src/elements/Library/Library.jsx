import React, { useState, useEffect, useCallback } from 'react';
import './Library.css';
import FilterBar from './FilterBar/FilterBar';
import MovieCover from './MovieCover/MovieCover';
import SortBar from './SortBar/SortBar';
import { connect } from 'react-redux';
import { moviesLoaded } from './../../redux/actions';
import { fetchMovies } from '../../services/moviesApi';

const sortingProps = [
    { value: "release_date", name: "RELEASE DATE" },
    { value: "vote_average", name: "VOTE AVERGAGE" },
    { value: "vote_count", name: "VOTE COUNT" },
    { value: "runtime", name: "RUNTIME" },
    { value: "budget", name: "BUDGET" },
    { value: "revenue", name: "REVENUE" },
    { value: "title", name: "TITLE" },
];

const filterOptions = ["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];

const mapStateToProps = state =>
({
    movies: state.moviesReducer.movies
});

const mapDispatchToProps = dispatch => ({
    moviesLoaded: (loadedMovies) => dispatch(moviesLoaded(loadedMovies))
});

export default connect(mapStateToProps, mapDispatchToProps)(props => {
    const [sortBy, setSortBy] = useState(sortingProps[0].value);
    const [filterBy, setFilterBy] = useState(null);

    const sortCallback = useCallback((sortProp) => {
        setSortBy(sortProp);
    });

    const filterCallback = useCallback((filterProp) => {
        setFilterBy(filterProp);
    });

    const filterMovies = (movie, filterProp) => {
        return filterProp === null || filterProp === "all" ? true : movie.genres.find(g => g.toLowerCase() === filterProp);
    };

    const sortMovies = (movieA, movieB, sortProp) => {
        return movieA[sortProp] < movieB[sortProp] ? 1 : -1;
    };

    useEffect(() => {
        async function fetchData() {
            let movies = await fetchMovies();
            props.moviesLoaded(movies);
        }
        fetchData();
    },[]);

    if (props.movies) {
        var filteredMovies = props.movies.filter((movie) => filterMovies(movie, filterBy));
        var sortedMovies = filteredMovies.sort((a, b) => sortMovies(a, b, sortBy));
    }
    
    return (
        <div className="library">
            {props.movies ?
                <div>
                    <div className="filterAndSort">
                        <FilterBar filterCallback={filterCallback} filterOptions={filterOptions} />
                        <SortBar sortBy={sortingProps} sortCallback={sortCallback} />
                    </div>
                    <div>{sortedMovies.length} movies found</div>
                    <div className="movieCovers">
                        {sortedMovies.map(movie => <MovieCover movie={movie} onCoverClick={props.onMovieSelect} />)}
                    </div>
                </div> : null}
        </div>)
});