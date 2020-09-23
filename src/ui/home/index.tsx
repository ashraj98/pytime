import React from 'react';
import { useHistory } from 'react-router-dom';
import SearchBar from 'material-ui-search-bar';
import './index.scss';

function Home() {
  const history = useHistory();

  return (
    <div className="intro">
      <h1 className="logo">
        <img className="pie" alt="pie" src="https://www.pngarts.com/files/5/Apple-Pie-PNG-Image-Transparent-Background.png" />
        &nbsp; Pytime
      </h1>
      <h2>Discover new video games in seconds</h2>
      <SearchBar
        placeholder="Search games or tags"
        value=""
          // onChange={(newValue) => this.setState({ value: newValue })}
        onRequestSearch={() => history.push('/recommendations')}
      />
    </div>
  );
}

export default Home;
