import React, { useState } from 'react';
import { Switch, Route, Link, Redirect, useRouteMatch } from 'react-router-dom';
import Users from './components/Users';
import Notes, { Note } from './components/Notes';
import Home from './components/Home';
import Login from './components/Login';

const App = () => {
  const padding = {
    padding: 5,
  };

  const [notes] = useState([
    {
      id: 1,
      content: 'HTML is easy',
      important: true,
      user: 'Matti Luukkainen',
    },
    {
      id: 2,
      content: 'Browser can execute only Javascript',
      important: false,
      user: 'Matti Luukkainen',
    },
    {
      id: 3,
      content: 'Most important methods of HTTP-protocol are GET and POST',
      important: true,
      user: 'Arto Hellas',
    },
  ]);

  const [user, setUser] = useState(null);

  const login = (userRecieved) => setUser(userRecieved);

  const match = useRouteMatch('/notes/:id');
  const note = match ? notes.find((note) => note.id === Number(match.params.id)) : null;

  return (
    <div>
      <div>
        <Link style={padding} to="/">
          home
        </Link>
        <Link style={padding} to="/notes">
          notes
        </Link>
        <Link style={padding} to="/users">
          users
        </Link>
        {user ? (
          <em>{user} logged in</em>
        ) : (
          <Link style={padding} to="/login">
            login
          </Link>
        )}
      </div>

      <Switch>
        <Route path="/notes/:id">
          <Note note={note} />
        </Route>
        <Route path="/notes">
          <Notes notes={notes} />
        </Route>
        <Route path="/users">{user ? <Users /> : <Redirect to="/login" />}</Route>
        <Route path="/login">
          <Login onLogin={login} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <div>
        <br />
        <em>Note app, Department of Computer Science 2020</em>
      </div>
    </div>
  );
};

export default App;
