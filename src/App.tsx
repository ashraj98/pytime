import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import './App.scss';
import { DefaultLayout } from './ui/layouts';
import Recommendations from './ui/recommendations';
import Home from './ui/home';
import SingleGame from './ui/singleGame';

function App() {
  return (
    <Router>
      <DefaultLayout>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/recommendations">
            <Recommendations />
          </Route>
          <Route exact path="/game/:slug">
            <SingleGame />
          </Route>
        </Switch>

      </DefaultLayout>
    </Router>
  );
}

export default App;
