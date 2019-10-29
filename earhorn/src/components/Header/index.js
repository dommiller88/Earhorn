    // src/components/Header/index.js
import React, { Component } from 'react';
import "./header.css"
import Dialog from "components/Dialog";
import ReactDOM from 'react-dom';


class Header extends Component{

    constructor() {
        super();
        this.state = {
            TextField: "hello"
        }
    }
    render(){
        return (
            <nav className="Nav">
                <div className="Nav-menus">
                    <div className="Nav-brand">
                        <h1>Earhorn</h1>
                        <div>
                            <Dialog />
                        </div>
                   </div>
                 </div>
            </nav>
        );
    }   
}
export default Header;