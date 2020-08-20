import React from 'react';
import './FilterBar.css';

const categories = ["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];

class FilterBar extends React.Component {
    render() {
        return (
            <div className="filterBar">
                {categories.map(category => <button>{category}</button>)}
            </div>);
    }
}

export default FilterBar;