import React from 'react';
import Library from './../Library/Library';
import Search from './../Search/Search';
import Details from './../Details/Details';
import Footer from './../Footer/Footer';
import './Homepage.css';

class Homepage extends React.Component {
    state = {
        detailsId: null
    }

    render() {
        return (
            <div className="homepage">
                {this.state.detailsId
                ? <Details />
                : <Search />}
                <Library />
                <Footer />
            </div>
        );
    }
}

export default Homepage;