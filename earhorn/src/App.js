import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';

class App extends Component {
  state = {

  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
  this.callBackendAPI()
    .then(res => this.setState({ data: res.express }))
    .catch(err => console.log(err));
}
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
callBackendAPI = async () => {
  const response = await fetch('/express_backend');
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message) 
  }
  return body;
};

  render() {
    return <div className="App">
        <Header />
        <section className="App-main">
          <Post nickname="Dom" avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Leonardo_11%2C_Poitevin_stallion_%28cropped%29.jpg/800px-Leonardo_11%2C_Poitevin_stallion_%28cropped%29.jpg" caption="What a classic!" song="https://open.spotify.com/embed/track/5uvosCdMlFdTXhoazkTI5R" />
          <Post nickname="OG" avatar="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" caption="Nice stuff" song="https://open.spotify.com/embed/track/4YW4k3LxStAS7g2JskFPCJ" />
          <Post nickname="Michael" avatar="https://images.askmen.com/1080x540/2016/01/25-021526-facebook_profile_picture_affects_chances_of_getting_hired.jpg" caption="I love this song!" song="https://open.spotify.com/embed/track/4hozy0D7dPkpQ31Xt8BBlN" />
          <Post nickname="John" avatar="https://images.unsplash.com/photo-1539605480396-a61f99da1041?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" caption="Wowzie" song="https://open.spotify.com/embed/track/29SyMC0plk6qw8NMF7lfRL" />

          {/* more posts */}
        </section>
      </div>;
      
  }
}

export default App;