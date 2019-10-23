import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';

class App extends Component {
  render() {
    return <div className="App">
        <Header />
        <section className="App-main">
          <Post nickname="Dom" avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Leonardo_11%2C_Poitevin_stallion_%28cropped%29.jpg/800px-Leonardo_11%2C_Poitevin_stallion_%28cropped%29.jpg" caption="Moving the community!" song="https://open.spotify.com/embed/track/5uvosCdMlFdTXhoazkTI5R" />
          <Post nickname="OG" avatar="https://www.laravelnigeria.com/img/chris.jpg" caption="Holding a mic" song="https://open.spotify.com/embed/track/4YW4k3LxStAS7g2JskFPCJ" />

          {/* more posts */}
        </section>
      </div>;
  }
}

export default App;