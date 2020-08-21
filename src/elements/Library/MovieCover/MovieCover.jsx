import React from 'react';
import './MovieCover.css'

class MovieCover extends React.Component {
    render() {
        return (
            <div className="movieCover">
                <img src={this.props.movie.poster_path} />
                <div className="title">{this.props.movie.title}</div>
                <div className="year">{new Date(this.props.movie.release_date).getFullYear()}</div>
                <div className="genres">{this.props.movie.genres.join(', ')}</div>
            </div>)
    }
}

export default MovieCover;