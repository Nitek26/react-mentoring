import React from 'react';
import './MoreButton.css';

export default (props) => {
    return <button className={`moreButton ${props.className}`} onClick={props.onClick}></button>
}