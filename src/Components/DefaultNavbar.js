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
import { FaDiscord, FaInstagram, FaTwitter } from 'react-icons/fa';

const DefaultNavbar = () => {
    const [openNavbar, setOpenNavbar] = useState(false);

    return (
        <Navbar className={"bg-black"} color="none" navbar>
        <NavbarContainer style={{marginBottom: "0px"}}>
            <NavbarWrapper>
                <NavbarBrand>ChessMates</NavbarBrand>
                <NavbarToggler
                    color="white"
                    onClick={() => setOpenNavbar(!openNavbar)}
                    ripple="light"
                />
            </NavbarWrapper>

            <NavbarCollapse open={openNavbar}>
                <Nav>
                    <NavLink href="https://discord.gg/tM6x7ttv" ripple="light"><FaDiscord size={25}/></NavLink>
                    <NavLink href="https://instagram.com/cheesematesnft?utm_medium=copy_link" ripple="light"><FaInstagram size={25}/></NavLink>
                    <NavLink href="https://twitter.com/cheesematesnft?s=21&t=cTT8UfG-BcPvj3oJFAMqeA" ripple="light"><FaTwitter size={25}/></NavLink>
                </Nav>
            </NavbarCollapse>
        </NavbarContainer>
    </Navbar>
    );
};

export default DefaultNavbar;
