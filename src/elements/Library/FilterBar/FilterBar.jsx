import React from 'react';
import './FilterBar.css';

class FilterBar extends React.Component {
    state = {
        selectedOption: null
    }

    selectOption = (event) => {
        this.setState({ selectedOption: event.target.value });
        this.props.filterCallback(event.target.value);
    }

    render() {
        console.log(this.state.selectedOption);
        console.log(this.state.selectedOption);

        return (
            <div className="filterBar">
                {this.props.filterOptions.map(option =>
                    <button
                        className={this.state.selectedOption === option.toLowerCase() ? "selectedFilter" : null}
                        value={option.toLowerCase()}
                        onClick={this.selectOption}>{option}
                    </button>)}
            </div>);
    }
}

export default FilterBar;