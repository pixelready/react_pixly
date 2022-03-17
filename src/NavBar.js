import {NavLink} from "react-router-dom";

function NavBar() {
    return (
        <header>
            <NavLink exact to="/">Pix.ly</NavLink>
            <NavLink exact to="/upload">Upload</NavLink>
        </header>
    )
}

export default NavBar;