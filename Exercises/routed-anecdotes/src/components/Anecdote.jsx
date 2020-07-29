import React from 'react';

const Anecdote = ({ anecdote }) => {
  return (
    <div>
      <br />
      <strong>{anecdote.content} </strong>
      <br />
      has {anecdote.votes} votes{' '}
    </div>
  );
};

export default Anecdote;
