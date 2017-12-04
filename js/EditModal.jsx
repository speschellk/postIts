import React, { Component } from 'react';
import ColorMenu from './ColorMenu';
import CancelButton from './buttons/CancelButton';
import SaveButton from './buttons/SaveButton';

class EditModal extends Component {
  state = {
    status: 'inactive',
    key: this.props.note.key,
    color: this.props.note.color,
    title: this.props.note.title,
    text: this.props.note.text
  };

  handleChangeNoteColor = color => {
    this.setState({ color });
  };

  handleTitleTyping = event => {
    this.setState({ status: 'active', title: event.target.value });
  };

  handleBodyTyping = event => {
    this.setState({ status: 'active', text: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSave(this.state);
  };

  render() {
    return (
      <div className="note-modal">
        <div
          className="note-modal-color"
          style={{ backgroundColor: this.state.color }}
        />
        <ColorMenu onClick={this.handleChangeNoteColor} />
        <form onSubmit={this.handleSubmit} className="note-modal-form">
          <input
            type="text"
            value={this.state.title}
            placeholder="Untitled"
            onChange={this.handleTitleTyping}
          />
          <textarea
            className="note-text"
            placeholder="Just start typing here"
            value={this.state.text}
            onChange={this.handleBodyTyping}
          />
        </form>
        <div className="note-modal-footer">
          <CancelButton handleCancel={this.props.handleCancel} />
          <SaveButton
            className={`button-save ${this.state.status}`}
            buttonFunction={() => this.props.handleSave(this.state)}
          />
        </div>
      </div>
    );
  }
}

export default EditModal;
