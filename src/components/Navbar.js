import { Component } from "react";
import "./NavbarStyles.css"
import logo from "./TAWicon.png"


class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render() {
        return(
            <>
                <nav>
                    <a href="index.html"><img className="navbar-logo" src={logo} alt="logo" /></a>
                    <div>
                        <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                            <li><a className="active" href="index.html">Home</a></li>
                            <li><a href="#Portfolio">Projects</a></li>
                            <li><a href="index.html">Thoughts</a></li>
                            <li><a href="index.html">Hmu</a></li>
                        </ul>
                    </div>
                    <div id="mobile" onClick={this.handleClick}>
                        <i id="bar" className={this.state.clicked ? "fa fa-times" : "fas fa-bars"}></i>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar;