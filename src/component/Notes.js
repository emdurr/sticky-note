import React, { Component } from 'react';

const styles = {
	itemsList: { listStyle: 'none' }
}

class Notes extends Component {
	render() {
		let notes = this.props.notes.map( (note, index, edit) => {
			return(
				<div className={'card col s12 m6 l3 '} key={`note-${index}`}>
					<li >
						<div className={'card-title'}>
							{ note }
						</div>
						<div className={'card-action'}>
							<button onClick={() => this.props.deleteNote(index)} >X</button>
							<button onClick={() => this.props.editNote(note, index, edit)} >Edit</button>
						</div>
					</li>
				</div>
			);
		});
		return(
			<div className={'row'} >
				<ul style={ styles.itemsList }>
					{ notes }
				</ul>
			</div>
		)
	}
}

export default Notes;