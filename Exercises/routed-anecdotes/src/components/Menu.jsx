import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  const padding = {
    paddingRight: 5,
  };

  return (
    <div>
      <Link style={padding} to="/anecdotes">
        {' '}
        anecdotes{' '}
      </Link>
      <Link style={padding} to="/new">
        Create new anecdote{' '}
      </Link>
      <Link style={padding} to="/about">
        About
      </Link>
    </div>
  );
};

export default Menu;
