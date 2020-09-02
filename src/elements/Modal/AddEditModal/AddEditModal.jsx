import React from 'react';
import Modal from '../Modal';
import './AddEditModal.css';

export default (props) => {
    return (
        <Modal className="addEditModal">
            <h1>EDIT MOVIE</h1>
            <p>
                <label>MOVIE ID</label>
                {props.movieId}
            </p>
            <p>
                <label>TITLE</label>
                <input type="text" />
            </p>
            <p>
                <label>RELEASE DATE</label>
                <input type="text" />
            </p>
            <p>
                <label>MOVIE URL</label>
                <input type="text" />
            </p>
            <p>
                <label>GENRE</label>
                <input type="text" />
            </p>
            <p>
                <label>OVERVIEW</label>
                <input type="text" />
            </p>
            <p>
                <label>RUNTIME</label>
                <input type="text" />
            </p>
            <p>
                <button className="pinkButton">SAVE</button>
                <button className="pinkBorderButton">RESET</button>
            </p>
        </Modal>
    )
}