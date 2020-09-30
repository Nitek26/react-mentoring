import React from 'react';
import './MovieCover.css'
import PropTypes from 'prop-types';
import MoreButton from './MoreButton/MoreButton';
import OptionsPopup from './OptionsPopup/OptionsPopup';

class MovieCover extends React.Component {
    state = {
        popupVisible: false
    }

    moreClicked = () => {
        this.setState({popupVisible: true});
    }
    
    moreHidden = () => {
        this.setState({popupVisible: false});
    }

    coverClicked = () => {
        this.props.onCoverClick(this.props.movie);
    }

    render() {
        return (
            <div className="movieCover">
                <MoreButton className="movieMoreButton" onClick={this.moreClicked}></MoreButton>
                {this.state.popupVisible ? <OptionsPopup className="popup" onHide={this.moreHidden} movie={this.props.movie}/> : null}
                <img src={this.props.movie.poster_path} onClick={this.coverClicked} />
                <div className="title">{this.props.movie.title}</div>
                <div className="year">{new Date(this.props.movie.release_date).getFullYear()}</div>
                <div className="genres">{this.props.movie.genres.join(', ')}</div>
            </div>)
    }
}

MovieCover.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired,
        genres: PropTypes.array.isRequired
    })
};

export default MovieCover;