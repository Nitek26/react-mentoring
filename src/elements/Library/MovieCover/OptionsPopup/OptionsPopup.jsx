import React from 'react';
import './OptionsPopup.css';
import AddEditModal from '../../../Modal/AddEditModal/AddEditModal';

class OptionsPopup extends React.Component {
    state = {
        editModalVisible: false
    }

    showEditModal = () => {
        this.setState({ editModalVisible: true });
    }

    render() {
        return (
            <div className={`optionsPopup ${this.props.className}`}>
                <div className="absolutePopup">
                    <button onClick={this.props.onHide}>X</button>
                    <p onClick={this.showEditModal}>Edit</p>
                    <p>Delete</p>
                </div>
                {this.state.editModalVisible ? <AddEditModal>Some modal content</AddEditModal> : null}
            </div>);
    }
}

export default OptionsPopup;