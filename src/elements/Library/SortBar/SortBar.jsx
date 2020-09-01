import React from 'react';
import './SortBar.css';

class SortBar extends React.Component {
    render() {
        return (
        <div className="sortBar">SORT BY 
            <select id="SORT BY">
                {this.props.sortBy.map((sortBy) => {
                    return <option value={sortBy.value}>{sortBy.name}</option>
                })};
            </select>
        </div>)
    }
}

export default SortBar;