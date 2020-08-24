import React from 'react';
import './MovieCover.css'
import PropTypes from 'prop-types';
import MoreButton from './MoreButton/MoreButton'

class MovieCover extends React.Component {
    render() {
        return (
            <div className="movieCover">
                <MoreButton className="movieMoreButton"></MoreButton>
                <img src={this.props.movie.poster_path} />
                <div className="title">{this.props.movie.title}</div>
                <div className="year">{new Date(this.props.movie.release_date).getFullYear()}</div>
                <div className="genres">{this.props.movie.genres.join(', ')}</div>
            </div>)
    }
}

MovieCover.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string,
        release_date: PropTypes.string,
        poster_path: PropTypes.string,
        genres: PropTypes.array
    })
};

export default MovieCover;