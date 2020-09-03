import React from 'react';
import './Modal.css';

export default (props) => {
    return (
        <div className={`modal + ${props.className}`}>
            <div>
                <button className="closeButton" onClick={props.onClose}>X</button>
                {props.children}
            </div>
        </div>
    )
}