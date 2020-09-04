import React from 'react';
import {createPortal} from 'react-dom';
import Modal from '../Modal';

export default (props) => {
    const domEl = document.getElementById("modal");
  
    if (!domEl) return null;

    return createPortal(
        <Modal onClose={props.onClose}>
            {props.movie && props.movie.id ?
            <><h1>EDIT MOVIE</h1>
            <p>
                <label>MOVIE ID</label><br />
                {props.movie.id}
            </p></> :
            <h1>ADD MOVIE</h1>}
            <p>
                <label>TITLE</label>
                <input type="text" defaultValue={props.movie ? props.movie.title : ""} />
            </p>
            <p>
                <label>RELEASE DATE</label>
                <input type="text" defaultValue={props.movie ? props.movie.release_date : ""} />
            </p>
            <p>
                <label>MOVIE URL</label>
                <input type="text" defaultValue={props.movie ? props.movie.poster_path : ""} />
            </p>
            <p>
                <label>GENRE</label>
                <input type="text" defaultValue={props.movie ? props.movie.genres : ""} />
            </p>
            <p>
                <label>OVERVIEW</label>
                <input type="text" defaultValue={props.movie ? props.movie.overview : ""} />
            </p>
            <p>
                <label>RUNTIME</label>
                <input type="text" defaultValue={props.movie ? props.movie.runtime : ""} />
            </p>
            <p>
                <button className="pinkButton">SAVE</button>
                <button className="pinkBorderButton">RESET</button>
            </p>
        </Modal>,
        domEl
    )
}