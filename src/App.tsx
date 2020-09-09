import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import SearchBar from "material-ui-search-bar";


export default class App extends React.Component<{}, {value: string}> {

  handleClick = () => {
    console.log('this is:', this);
  }
     render() {
      return (
        <Router>
        <div className="intro">
            <h1 className="logo">
                <img className="pie" alt="pie" src="https://www.pngarts.com/files/5/Apple-Pie-PNG-Image-Transparent-Background.png"/> Pytime
            </h1>
            <h2>Discover new video games in seconds</h2>
            <SearchBar
                placeholder="Search games or tags"
                value=""
                onChange={(newValue) => this.setState({ value: newValue })}
                onRequestSearch={() => this.handleClick()}
            />
        </div>
        </Router>
      );
    }
}
