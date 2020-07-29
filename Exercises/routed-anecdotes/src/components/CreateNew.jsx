/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useField } from '../hooks/index';

const CreateNew = ({ addNew, setNotification }) => {
  const content = useField('text', 'content');
  const author = useField('text', 'author');
  const info = useField('text', 'info');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    addNew({
      content,
      author,
      info,
      votes: 0,
    });
    history.push('/');
    setNotification(`anecdote ${content} successfully created.`);

    setTimeout(() => setNotification(''), 10000);
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...content} />
        </div>
        <div>
          author
          <input {...author} />
        </div>
        <div>
          url for more info
          <input {...info} />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default CreateNew;
