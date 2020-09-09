import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import { DefaultLayout } from './ui/layouts';
import Recommendations from "./ui/recommendations";
import Home from "./ui/home";

function App() {
  return (
    <Router>
      <DefaultLayout>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home"/>}/>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route exact path="/recommendations">
            <Recommendations/>
          </Route>
        </Switch>

      </DefaultLayout>
    </Router>
  );
}

export default App;
