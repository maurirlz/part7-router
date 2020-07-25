import React, { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import About from './components/About';
import AnecdoteList from './components/AnecdoteList';
import Footer from './components/Footer';
import Anecdote from './components/Anecdote';
import Menu from './components/Menu';
import CreateNew from './components/CreateNew';
import data from './data';

const App = () => {
  const [anecdotes, setAnecdotes] = useState(data);
  const [notification, setNotification] = useState('');

  const addNew = (anecdote) => {
    const newAnecdote = {
      ...anecdote,
      id: (Math.random() * 10000).toFixed(0),
    };

    setAnecdotes(anecdotes.concat(newAnecdote));
  };

  const anecdoteById = (id) => anecdotes.find((a) => a.id === id);

  const vote = (id) => {
    const anecdote = anecdoteById(id);

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };

    setAnecdotes(anecdotes.map((a) => (a.id === id ? voted : a)));
  };

  const match = useRouteMatch('/anecdotes/:id');
  const anecdote = match
    ? anecdotes.find((filteredAnecdote) => filteredAnecdote.id === match.params.id)
    : null;

  return (
    <div>
      <h1>Software anecdotes</h1>
      <Menu />
      {notification}
      <Switch>
        <Route path="/anecdotes/:id">
          <Anecdote anecdote={anecdote} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/new">
          <CreateNew addNew={addNew} setNotification={setNotification} />
        </Route>
        <Route path="/">
          <AnecdoteList anecdotes={anecdotes} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
