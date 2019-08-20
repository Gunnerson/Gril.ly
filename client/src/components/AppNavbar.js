import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import store from "../store";
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

    // state = {
    //     isOpen: false
    // }

    // toggle = () => {
    //     this.setState({
    //         isOpen: !this.state.isOpen
    //     });
    // }

    loginOrProfile = (auth) => {
        return auth.isAuthenticated ? 
            <Nav className="float-xs-right" navbar>
            {/* <Nav className="ml-auto" navbar></Nav> */}
                <NavItem className="navbar-text">

                    Welcome back {auth.user.name}! /
                </NavItem>
            <NavItem>
                <NavLink tag= {Link} to ="/logout"> Logout</NavLink>
            </NavItem>
            </Nav>
        
        :

        <Nav className="float-xs-right" navbar>
        {/* <Nav className="ml-auto" navbar> */}
            <NavItem>
                <NavLink tag={Link} to="/login">Login</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/register">
                Sign up
            </NavLink>
            </NavItem>
        </Nav>
    };
render() { 

    const { user } = this.props.auth;
    console.log(this.props)
    console.log("-------")

    return (
        <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/"><b>Gril.ly</b></NavbarBrand>
                    {/* <NavbarToggler onClick={this.toggle} /> */}
                    {/* <Collapse isOpen={this.state.isOpen} navbar></Collapse> */}
{/* //                           <Collapse isOpen={this.state.isOpen} navbar> */}
{/* //                         <Nav className="ml-auto" navbar>
//                             <NavItem>
//                                 <NavLink href="/login">
//                                     Login
//                                 </NavLink>
//                             </NavItem>
//                             <NavItem>
//                                 <NavLink href="/register">
//                                     Sign up
//                                 </NavLink>
//                             </NavItem>
//                         </Nav>
//                     </Collapse> */}
                    {this.loginOrProfile(this.props.auth)}

                </Container>
                
                
            </Navbar>
        </div>
    );

}
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(AppNavbar);



// class AppNavbar extends Component {
//     state = {
//         isOpen: false
//         }
       
//     toggle = () => {
//         this.setState({
//         isOpen: !this.state.isOpen
//         });

//         }

//     render() {
//         return (
//         <div>
//             <Navbar color="dark" dark expand="sm" className="mb-5">
//                 <Container>
//                     <NavbarBrand href="/">Gril.ly</NavbarBrand>
//                     <NavbarToggler onClick={this.toggle} />
//                     <Collapse isOpen={this.state.isOpen} navbar>
//                         <Nav className="ml-auto" navbar>
//                             <NavItem>
//                                 <NavLink href="/login">
//                                     Login
//                                 </NavLink>
//                             </NavItem>
//                             <NavItem>
//                                 <NavLink href="/register">
//                                     Sign up
//                                 </NavLink>
//                             </NavItem>
//                         </Nav>
//                     </Collapse>
//                 </Container>
//             </Navbar>
//         </div>
//         );
//     }
// }


// export default AppNavbar;