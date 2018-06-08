import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './container/Main';
import Search from './container/Search';
import NoMatch from './components/NoMatch';
import constants from './utils/constants';
import './App.css';

const { MAIN, SEARCH } = constants.PATH;

const BooksApp = () => (
  <Router>
    <div className="app">
      <Switch>
        <Route exact path={MAIN} component={Main} />
        <Route path={SEARCH} component={Search} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default BooksApp;
