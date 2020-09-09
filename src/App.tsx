import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {Switch, Route, useHistory, Redirect} from 'react-router-dom';
import './App.scss';
import SearchBar from "material-ui-search-bar";
import Recommendations from "./UI/Recommendations";
import Home from "./UI/Home";


function App() {

      return (
        <Router>
        <div>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/home"/>}/>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/recommendations">
              <Recommendations />
            </Route>
          </Switch>

        </div>
      </Router>
      );
}

export default App;
