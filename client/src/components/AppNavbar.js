import React, { Component } from 'react';
import {
        Collapse,
        Navbar,
        NavbarToggler,
        NavbarBrand,
        Nav,
        NavItem,
        NavLink,
        Container,
        UncontrolledDropdown,
        DropdownToggle,
        DropdownMenu,
        DropdownItem} from 'reactstrap';

class AppNavbar extends Component {
    state = {
        isOpen: false
        }
       
    toggle = () => {
        this.setState({
        isOpen: !this.state.isOpen
        });

        }

    render() {
        return (
        <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">Gril.ly</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com">
                                    Login
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com">
                                    Sign up
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
        );
    }
}


export default AppNavbar;