import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router";


function Header() {
    return (
        <>
            <Navbar className="header-nav">
                <div className="logo-div">
                    <NavLink to="/">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/960px-React-icon.svg.png"></img> React Practice             </NavLink></div>
                <div className="nav-links">
                   <NavLink to="/">Tic-Tac-Toe</NavLink>
                   <NavLink to="/random-color-generator">Random Color Generator</NavLink>
                     <NavLink to="/products">Products</NavLink>
                        <NavLink to="/users-list">Users List</NavLink>
                    
                    
                </div>
            </Navbar>
        </>
    )
}

export default Header;