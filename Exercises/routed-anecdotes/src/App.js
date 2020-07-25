import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import AnecdoteList from './components/AnecdoteList';
import Footer from './components/Footer';
import Menu from './components/Menu';
import CreateNew from './components/CreateNew';
import data from './data';

const App = () => {
  const [anecdotes, setAnecdotes] = useState(data);

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

  return (
    <div>
      <h1>Software anecdotes</h1>
      <Menu />
      <Switch>
        <Route path="/anecdotes">
          <AnecdoteList anecdotes={anecdotes} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/new">
          <CreateNew addNew={addNew} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
