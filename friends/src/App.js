import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import FriendsList from './components/FriendsList'
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login'
import Logout from './components/Logout'


function App() {
  return (
    <Router>
      <div className="head">
        <div>
          <Link to="/login">Log In</Link>
        </div>
        <div>
          <Link to="/logout">Log Out</Link>
        </div>
        <div>
          <Link to="/friendslist">Friends List</Link>
        </div>
      </div>
      <div>
        <Switch>
          <PrivateRoute path="/friendslist" component={FriendsList} />
          <PrivateRoute path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
