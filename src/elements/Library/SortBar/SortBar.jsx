import React from 'react';
import './SortBar.css';

class SortBar extends React.Component {
    render() {
        return (
        <div className="sortBar">SORT BY 
            <select id="SORT BY">
                <option value="RELEASE DATE">RELEASE DATE</option>
                <option value="VOTE AVERGAGE">VOTE AVERGAGE</option>
                <option value="RUNTIME">RUNTIME</option>
                <option value="BUDGET">BUDGET</option>
                <option value="REVENUE">REVENUE</option>
                <option value="TITLE">TITLE</option>
            </select>
        </div>)
    }
}

export default SortBar;