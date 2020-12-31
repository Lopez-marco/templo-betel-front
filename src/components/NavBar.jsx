import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        className="navbar active"
        // color="light"
        // style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        light
        expand="md"
        fixed="top"
      >
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          {/* <NavbarText>Simple Text</NavbarText> */}
          <Nav
            className="justify-content-center"
            style={{ width: "110%", textDecorationColor: "white" }}
            navbar
          >
            <NavItem>
              <NavLink href="#about" className="text-white">
                La Iglesia
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#Servicios" className="text-white">
                Servicios
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink href="/components/" className="text-white">
                Eventos{" "}
              </NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink href="#" className="text-white">
                Blog
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#grabaciones" className="text-white">
                Grabaciones
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink href="/components/" className="text-white">
                Foro
              </NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink href="#contactanos" className="text-white">
                Contactanos
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
