import React from 'react';
import './TransparentButton.css';

export default (props) => {
    return <button onClick={props.onClick} className='transparentButton'>{props.children}</button>
}