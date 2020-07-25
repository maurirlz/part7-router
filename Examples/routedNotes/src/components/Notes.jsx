/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

export const Note = ({ note }) => {
  return (
    <div>
      <h2>
        {note.content}
        <div> {note.user} </div>
        <div>
          <strong> {note.important ? 'important' : ''} </strong>
        </div>
      </h2>
    </div>
  );
};

const Notes = ({ notes }) => {
  return (
    <div>
      <h2>Notes</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Link to={`/notes/${note.id}`}>{note.content}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
