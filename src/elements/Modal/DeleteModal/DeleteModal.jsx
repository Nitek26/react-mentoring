import React from 'react';
import Modal from '../Modal';

export default (props) => {
    return (
        <Modal onClose={props.onClose}>
            <h1>DELETE MOVIE</h1>
            <p>
                Are you sure you want to delete this movie?
            </p>
            <p>
                <button className="pinkButton">CONFIRM</button>
            </p>
        </Modal>
    )
}