import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@material-tailwind/react/Navbar';
import NavbarContainer from '@material-tailwind/react/NavbarContainer';
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper';
import NavbarBrand from '@material-tailwind/react/NavbarBrand';
import NavbarToggler from '@material-tailwind/react/NavbarToggler';
import NavbarCollapse from '@material-tailwind/react/NavbarCollapse';
import Nav from '@material-tailwind/react/Nav';
import NavLink from '@material-tailwind/react/NavLink';
import NavItem from "@material-tailwind/react/NavItem";

const DefaultNavbar = () => {
    const [openNavbar, setOpenNavbar] = useState(false);

    return (
        <Navbar className={"bg-gray-400 lg:bg-gray-400 md:bg-stone-500 sm:bg-orange-500 "} color="none" navbar>
        <NavbarContainer>
            <NavbarWrapper>
                <NavbarBrand>Navbar</NavbarBrand>
                <NavbarToggler
                    color="white"
                    onClick={() => setOpenNavbar(!openNavbar)}
                    ripple="light"
                />
            </NavbarWrapper>

            <NavbarCollapse open={openNavbar}>
                <Nav>
                    <NavItem active="light" ripple="light">Discover</NavItem>
                    <NavLink href="#navbar" ripple="light">Profile</NavLink>
                    <NavItem ripple="light">Settings</NavItem>
                </Nav>
            </NavbarCollapse>
        </NavbarContainer>
    </Navbar>
    );
};

export default DefaultNavbar;
