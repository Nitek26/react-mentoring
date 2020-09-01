import React from 'react';
import './OptionsPopup.css';

export default (props) => {
    return (
    <div className={`optionsPopup ${props.className}`}>
        <div className="absolutePopup">
            <button onClick={props.onHide}>X</button>
            <p>Edit</p>
            <p>Delete</p>
        </div>
    </div>);
}