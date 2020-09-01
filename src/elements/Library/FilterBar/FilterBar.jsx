import React from 'react';
import './FilterBar.css';

const categories = ["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];

class FilterBar extends React.Component {
    render() {
        return (
            <div className="filterBar">
                {categories.map(category => <button value={category.toLowerCase()} onClick={(event) => this.props.filterCallback(event.target.value)}>{category}</button>)}
            </div>);
    }
}

export default FilterBar;