import React from 'react';
import './MovieCover.css'

class MovieCover extends React.Component {
    render() {
        return (
            <div className="movieCover">
                <img src={this.props.movie.poster_path} />
                <p>{this.props.movie.title}</p>
                <p className="genres">{this.props.movie.genres.join(', ')}</p>
            </div>)
    }
}

export default MovieCover;