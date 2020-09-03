import React from 'react';
import './OptionsPopup.css';
import AddEditModal from '../../../Modal/AddEditModal/AddEditModal';
import DeleteModal from '../../../Modal/DeleteModal/DeleteModal';

class OptionsPopup extends React.Component {
    state = {
        editModalVisible: false,
        deleteModalVisible: false
    }

    showEditModal = () => {
        this.setState({ editModalVisible: true });
    }

    showDeleteModal = () => {
        this.setState({ deleteModalVisible: true });
    }
    
    closeEditModal = () => {
        this.setState({ editModalVisible: false });
        this.props.onHide();
    }
    
    closeDeleteModal = () => {
        this.setState({ deleteModalVisible: false });
        this.props.onHide();
    }

    render() {
        return (
            <div className={`optionsPopup ${this.props.className}`}>
                <div className="absolutePopup">
                    <button onClick={this.props.onHide}>X</button>
                    <p onClick={this.showEditModal}>Edit</p>
                    <p onClick={this.showDeleteModal}>Delete</p>
                </div>
                {this.state.editModalVisible ? <AddEditModal onClose={this.closeEditModal} movie={this.props.movie} /> : null}
                {this.state.deleteModalVisible ? <DeleteModal onClose={this.closeDeleteModal} movie={this.props.movie} /> : null}
            </div>);
    }
}

export default OptionsPopup;