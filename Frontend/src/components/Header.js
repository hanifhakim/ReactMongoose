import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {
    Button,
    Collapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarBrand,
    Navbar,
    NavbarToggler, 
    Nav,
    NavItem,
    UncontrolledDropdown
    } from 'reactstrap';

class Header extends Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
    }
    
      toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }

    render(){
        return(
         <div>
                <Navbar color="light" light expand="md">
                    <div className="container">
                        <Link className="navbar-brand" to="/">ReactMongoose</Link>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Link className="nav-link" to="/">Tasks</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/register"><Button className="mx-3" color="primary">Register</Button></Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/login"><Button color="success">Login</Button></Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        )
    }
}

export default Header