import React from 'react';
import './TransparentButton.css';

export default (props) => {
    return <button className='transparentButton'>{props.children}</button>
}