import React from 'react';
import './AddedNote.css';

class AddedNote extends React.Component{

	render() {

		const mapNotes= this.props.notes.map(note => {

			return note;

		});


		return mapNotes.map(note => <div key={note} className="added-note" onClick={() => this.props.removeNote(this.props.index)}>{note}</div>)


	}

}

export default AddedNote;