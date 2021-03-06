import React, { useState, useContext } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import {
    Link
} from "react-router-dom";

import { CartContext } from '../contexts/Cart'

const TopMenu = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const { cartItems } = useContext(CartContext)

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Products</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar className="justify-content-end">
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink>
                                <Link to="/">Giỏ hàng ({cartItems.length})</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="/">Home</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="/products">Products</Link>
                            </NavLink>
                        </NavItem>
                    </Nav>

                </Collapse>
            </Navbar>
        </div>
    );
}

export default TopMenu;