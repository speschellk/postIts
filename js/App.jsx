import React, { Component } from 'React';
import Note from './Note';
import Search from './Search';
import AddNoteButton from './buttons/AddNoteButton';
import DeleteModal from './DeleteModal';
import NoteModal from './NoteModal';
import EditModal from './EditModal';

class App extends Component {
  state = {
    nextNoteId: 1,
    isNoteModalOpen: false,
    isEditModalOpen: false,
    editingNote: {},
    deletingNote: {},
    isDeleteModalOpen: false,
    savedNotes: [
      {
        key: '0',
        color: '#F7B75E',
        title: 'To Do',
        text: 'Feed the dog'
      }
    ]
  };

  handleAddNoteClick = () => {
    this.setState({
      isNoteModalOpen: true
    });
  };

  handleAdd = note => {
    this.state.savedNotes.push(note);
    this.setState({
      nextNoteId: ++this.state.nextNoteId,
      isNoteModalOpen: false,
      savedNotes: this.state.savedNotes
    });
  };

  handleSave = note => {
    this.state.savedNotes[note.key] = {
      key: note.key,
      color: note.color,
      title: note.title,
      text: note.text
    };
    this.setState({ isEditModalOpen: false, savedNotes: this.state.savedNotes });
  };

  handleCancel = note => {
    this.setState({ isNoteModalOpen: false, isEditModalOpen: false, isDeleteModalOpen: false, editingNote: {} });
  };

  handleDelete = () => {
    delete this.state.savedNotes[this.state.deletingNote];
    this.setState({ isDeleteModalOpen: false, savedNotes: this.state.savedNotes });
  };

  handleEditIconClick = key => {
    this.setState({ isEditModalOpen: true, editingNote: key });
  };

  handleDeleteIconClick = key => {
    this.setState({ isDeleteModalOpen: true, deletingNote: key });
  };

  render() {
    if (this.state.isDeleteModalOpen) {
      return <DeleteModal handleCancel={this.handleCancel} handleDelete={this.handleDelete}/>;
    } else if (this.state.isNoteModalOpen) {
      return <NoteModal noteId={this.state.nextNoteId} handleAdd={this.handleAdd} />;
    } else if (this.state.isEditModalOpen) {
      return <EditModal note={this.state.savedNotes[this.state.editingNote]} handleSave={this.handleSave} handleCancel={this.handleCancel} />;
    } else {
      return (
        <div className="app-body">
          <div className="header">
            <Search />
            <AddNoteButton handleAddNoteClick={this.handleAddNoteClick} />
          </div>
          <div className="notes-container">
            {this.state.savedNotes.map(note => (
              <Note
                key={note.key}
                color={note.color}
                title={note.title}
                text={note.text}
                handleEditClick={() => this.handleEditIconClick(note.key)}
                handleDeleteClick={() => this.handleDeleteIconClick(note.key)}
              />
            ))}
          </div>
        </div>
      );
    }
  }
}

export default App;
