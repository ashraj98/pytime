import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import './App.scss';
import { Provider } from 'react-redux';
import { DefaultLayout } from './ui/layouts';
import Recommendations from './ui/recommendations';
import Home from './ui/home';
import SingleGame from './ui/singleGame';
import { RootStore } from './store';

function App() {
  return (
    <Provider store={RootStore}>
      <Router>
        <DefaultLayout>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/recommendations" />} />
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
    </Provider>
  );
}

export default App;
