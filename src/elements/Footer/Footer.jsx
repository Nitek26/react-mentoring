import React from 'react';
import './Footer.css';
import NetflixRouletteText from './../NetflixRouletteText/NetflixRouletteText'

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <NetflixRouletteText />
            </div>);
    }
}

export default Footer;