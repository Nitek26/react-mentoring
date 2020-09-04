import React from 'react';
import {createPortal} from 'react-dom';
import Modal from '../Modal';

export default (props) => {
    const domEl = document.getElementById("modal");
  
    if (!domEl) return null;

    return createPortal(
        <Modal onClose={props.onClose}>
            <h1>DELETE MOVIE</h1>
            <p>
                Are you sure you want to delete this movie?
            </p>
            <p>
                <button className="pinkButton">CONFIRM</button>
            </p>
        </Modal>,
        domEl
    )
}