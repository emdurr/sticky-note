import React, { Component } from 'react';
import Notes from './Notes';
import NoteForm from './NoteForm';

class StickyNote extends Component {
	constructor(props) {
		super(props);
		this.state = { notes: ['First Note', 'Second Note'] };
		this.addNote = this.addNote.bind(this);
		this.deleteNote = this.deleteNote.bind(this);
		this.editNote = this.editNote.bind(this);
	}

	addNote(note) {
		this.setState({
			notes: [
				note,
				...this.state.notes
			]
		});
	}

	deleteNote(index) {
		this.setState({
			notes: [
				...this.state.notes.slice(0, index),
				...this.state.notes.slice(index + 1)
			]
		});
	}

	editNote(note, index, edit) {
		// first change the value of the edit key
		this.setState({
		});
	}


	render() {
		return(
			<div className={'container'} >
				<NoteForm addNote={this.addNote} />
				<Notes editNote={this.editNote} deleteNote={this.deleteNote} notes={this.state.notes} />
				
			</div>
		)
	}
}
export default StickyNote;