import React, {Component} from 'react';
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    }
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState(prevState => ({
      isNavOpen: !prevState.isNavOpen
    }));
  }

  render() {
    const { isNavOpen } = this.state;
    return (
      <React.Fragment>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img src="logo512.png" height="30" width="41" alt="University Test"/>
            </NavbarBrand>
            <Collapse isOpen={isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-university fa-lg"/> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/students">
                    <span className="fa fa-user fa-lg"/> Students
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/groups">
                    <span className="fa fa-list fa-lg"/> Groups
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/about-us">
                    <span className="fa fa-info fa-lg"/> About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contact-us">
                    <span className="fa fa-address-card fa-lg"/> Contact Us
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;