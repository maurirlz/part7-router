/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useField } from '../hooks';

const CreateNew = ({ addNew, setNotification }) => {
  // const [content, setContent] = useState('');
  // const [author, setAuthor] = useState('');
  // const [info, setInfo] = useState('');
  const [content, resetContent] = useField();
  const [author, resetAuthor] = useField();
  const [info, resetInfo] = useField();

  const history = useHistory();

  const resetInputs = () => {
    resetAuthor.reset();
    resetContent.reset();
    resetInfo.reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNew({
      content: content.value,
      author: author.value,
      info: info.value,
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
        <button type="button" onClick={resetInputs}>
          {' '}
          reset{' '}
        </button>
      </form>
    </div>
  );
};

export default CreateNew;
