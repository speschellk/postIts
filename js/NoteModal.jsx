import React, { Component } from 'react';
import ColorMenu from './ColorMenu';
import CancelButton from './buttons/CancelButton';
import AddButton from './buttons/AddButton';

class NoteModal extends Component {
  state = {
    key: this.props.noteId,
    status: 'inactive',
    color: '#FFFFFF',
    title: '',
    text: ''
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
    this.props.handleAdd(this.state);
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
            placeholder="Untitled"
            value={this.state.title}
            onChange={this.handleTitleTyping}
          />
          <textarea
            className="note-text"
            name="note-text"
            form="note-modal-form"
            placeholder="Just start typing here"
            value={this.state.text}
            onChange={this.handleBodyTyping}
          />
        </form>
        <div className="note-modal-footer">
          <CancelButton />
          <AddButton
            className={`button-add ${this.state.status}`}
            buttonFunction={() =>
              this.props.handleAdd(this.state)
            }
          />
        </div>
      </div>
    );
  }
}

export default NoteModal;
