    // src/components/Header/index.js
import React from "react";
import "./header.css"

class Header extends React.Component{
    render(){
        return (
            <nav className="Nav">
                <div className="Nav-menus">
                    <div className="Nav-brand">
                        <h1>Earhorn</h1>
                   </div>
                 </div>
            </nav>
        );
    }   
}
export default Header;