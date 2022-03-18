import {NavLink} from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem
} from "reactstrap"
import "./Header.css";

function Header() {
  return (<div className="Header">

    <Navbar className="d-flex" color="info" expand="md" light="light">
      <Nav>
      <NavbarBrand href="/">
        <div className="Header-logo">Pix.ly</div>
      </NavbarBrand>
      <NavbarText>
        Your one stop image shop
      </NavbarText>
      </Nav>
      <Nav className="me-2 align-right" navbar="navbar">
        <NavItem>
          <NavLink to="/Upload">
            <button className="btn btn-outline-light">Upload a New Image</button>
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  </div>)
}

export default Header;