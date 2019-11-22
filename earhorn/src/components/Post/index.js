import React, { Component } from "react";
import './post.css' 

    class Post extends Component {
      render() {
        const nickname = this.props.nickname;
        const avatar = this.props.avatar;
        const song = this.props.song;
        const caption = this.props.caption;

        return <article className="Post" ref="Post">
            <header>
              <div className="Post-user">
                <div className="Post-user-avatar">
                  <img src={avatar} alt={nickname} />
                </div>
                <div className="Post-user-nickname">
                  <span>{nickname}</span>
                </div>
              </div>
            </header>
            <div>
              <div>
                <iframe title="mySong" src={song} height="400" width="320" frameBorder="0" allowTransparency="true" allow="encrypted-media"></iframe>
              </div>
            </div>
            <div className="Post-caption">
              <strong>{nickname}</strong> {caption}
            </div>
          </article>;
        }
    }
    export default Post;