    // src/components/Header/index.js
import React, { Component } from 'react';
import "./header.css"
import Dialog from "../Dialog";
import ReactDOM from 'react-dom';


class Header extends Component{

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            profilePicture: ''
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeProfilePictrue(e) {
        this.setState({
            profilePicture: e.target.value
        });
    }

    render(){
        return (
            <nav className="Nav">
                <div className="Nav-menus">
                    <div className="Nav-brand">
                        <h1>Earhorn</h1>    
                        <div className="Dialog-button">
                            <Dialog />
                        </div>
                   </div>
                 </div>
            </nav>
        );
    }   
}
export default Header;