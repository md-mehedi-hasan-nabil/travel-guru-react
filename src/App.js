import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import Login from './Components/Login/Login';
import Booking from './Components/Booking/Booking';
import Search from './Components/Search/Search';
import Header from './Components/Header/Header';
import { Container } from 'react-bootstrap';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Header loggedInUser={loggedInUser}></Header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/booking">
          <Booking />
        </Route>
        <PrivateRoute path="/search">
          <Search />
        </PrivateRoute>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
