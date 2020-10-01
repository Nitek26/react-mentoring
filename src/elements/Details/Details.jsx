import React from 'react';
import './Details.css';
import NetflixRouletteText from './../NetflixRouletteText/NetflixRouletteText';

class Details extends React.Component {
    render() {
        return <div className="details">
            <div className="detailsBackground">
            </div>
            <div className="detailsContentWrapper">
                <NetflixRouletteText className="cornerText" />
                <div className="detailsContent">
                    <img className="detailsMovieCover" src={this.props.movie.poster_path} />
                    <div className="detailsContentText">
                        <h1>{this.props.movie.title}</h1>
                        <h3>{this.props.movie.tagline}</h3>
                        <div className="detailsDateAndRuntime">
                            <span>{new Date(this.props.movie.release_date).getFullYear()}</span>
                            <span>{this.props.movie.runtime} min</span>
                        </div>
                        <div>
                            {this.props.movie.overview}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Details;