import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './About';
import Users from './Users';
import Home from './Home';
import Topic from './Topic';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
            <li>
              <Link to='/topic'>Topic</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/about'><About /></Route>
          <Route path='/users'><Users /></Route>
          <Route path='/topic'><Topic /></Route>
          <Route path='/'><Home /></Route>
        </Switch>
      </div>
    </Router>

    //A <Switch> looks through its children <Route>s and renders the first one that matches the current URL.
    
  );
}

export default App;
