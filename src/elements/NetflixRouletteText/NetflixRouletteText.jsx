import React from 'react';
import './NetflixRouletteText.css';

class NetflixRouletteText extends React.Component {
    render() {
        return (
            <div className={`netflixRouletteText ${this.props.className}`}>
                <span className="netflix">netflix</span>
                <span className="roulette">roulette</span>
            </div>);
    }
}

export default NetflixRouletteText;