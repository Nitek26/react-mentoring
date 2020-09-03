import React from 'react';
import Modal from '../Modal';

export default (props) => {
    return (
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
                <input type="text" value={props.title} />
            </p>
            <p>
                <label>RELEASE DATE</label>
                <input type="text" value={props.release_date} />
            </p>
            <p>
                <label>MOVIE URL</label>
                <input type="text" value={props.movie_url} />
            </p>
            <p>
                <label>GENRE</label>
                <input type="text" value={props.genre} />
            </p>
            <p>
                <label>OVERVIEW</label>
                <input type="text" value={props.overview} />
            </p>
            <p>
                <label>RUNTIME</label>
                <input type="text" value={props.runtime} />
            </p>
            <p>
                <button className="pinkButton">SAVE</button>
                <button className="pinkBorderButton">RESET</button>
            </p>
        </Modal>
    )
}