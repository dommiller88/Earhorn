import React, { Component } from 'react';
import './App.css';
// import {BrowserRoter as Router, Route} from "react-router-dom"; 
import Header from './components/Header';
import Post from './components/Post';
// import Login from './components/Login';

class App extends Component {

//   componentDidMount() {
//     // Call our fetch function below once the component mounts
//   this.callBackendAPI()
//     .then(res => this.setState({ data: res.express }))
//     .catch(err => console.log(err));
// }
//   // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
// callBackendAPI = async () => {
//   const response = await fetch('/express_backend');
//   const body = await response.json();

//   if (response.status !== 200) {
//     throw Error(body.message) 
//   }
//   return body;
// };

  render() {
    return (
      <div className="App">
        <Header />
        <section className="App-main">
          
        </section>
      </div>
    );
      
      
  }
}

export default App;