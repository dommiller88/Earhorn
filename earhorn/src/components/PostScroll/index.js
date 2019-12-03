import React, { Component } from 'react';
import Post from './components/Post';
import Axios from 'axios';

class PostScroll extends Component {
    constructor(props){
        super(props)
        this.deletePost = this.deletePost.bind(this);

        this.state = {posts: []};
    }

    postList() {
        return this.state.posts.map(currentPost => {
            return <Post nickname={currentPost.username} avatar={currentPost.profilePicture} song={currentPost.spotifyUri} caption={currentPost.comment}/>
        })
    }

    componentDidMount() {
        Axios.get('http://localhost:5003/posts/')
        .then(response => {
            this.setState({posts: response.data})
        })
        .catch((error) => {
            console.log(error)
        })
    }

  render() {
    // return (
    //   postList();
      
    // )
  }
}

export default App;