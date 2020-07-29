/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const CreateNew = ({ addNew, setNotification }) => {
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [info, setInfo] = useState('');
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
          <input name="content" value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <div>
          author
          <input name="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div>
          url for more info
          <input name="info" value={info} onChange={(e) => setInfo(e.target.value)} />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default CreateNew;
