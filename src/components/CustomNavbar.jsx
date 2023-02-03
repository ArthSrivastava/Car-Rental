import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
} from "reactstrap";
import { useState } from "react";
import { NavLink as ReactLink } from "react-router-dom";
export default function CustomNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="my-nav">
      <Navbar expand="md" fixed="" className="px-3">
        <NavbarBrand>Rental Website</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav
            style={{
              color: "#5D5A88",
            }}
            className="me-auto"
            navbar
          ></Nav>
          <Nav>
            <NavItem>
              <NavLink>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Dashboard</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Button
                  style={{
                    background: "#5D5A88",
                  }}
                >
                  Login
                </Button>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Button
                  style={{
                    background: "#5D5A88",
                  }}
                >
                  Signup
                </Button>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
