import React, { useState } from 'react';
import {

  Navbar,
  NavbarToggler,
  NavbarBrand,

} from 'reactstrap';

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        {/* <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/search/">Search</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/map">Map</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/auto">Auto</NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse> */}
      </Navbar>
    </div>
  );
}

export default NavBar;
