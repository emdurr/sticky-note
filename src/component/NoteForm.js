import React, { Component } from 'react';

class NoteForm extends Component {
	constructor(props) {
		super(props);
		this.addNote = this.addNote.bind(this);
	}

	addNote(e) {
		e.preventDefault();
		let note = this.refs.note.value;
		this.props.addNote(note);
		this.refs.noteForm.reset();
	}

	render() {
			return(
				<div>
					<form ref='noteForm' onSubmit={this.addNote}>
						<input ref='note' type='text' placeholder='New Note' required />
						<input type='submit'/>
					</form>
				</div>
			)
	}
}

export default NoteForm;