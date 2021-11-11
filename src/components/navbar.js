import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="home-nav">
            <div className="navbar-content">
            <div className="logo"><Link to="/"><img src="images/logo.png" alt="../images/logo.png"></img></Link></div>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/about">ABOUT US</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                    <li><a href="#">LOG IN</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;