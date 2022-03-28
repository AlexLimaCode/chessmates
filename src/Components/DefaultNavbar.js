import { useState } from 'react';
import { FaDiscord, FaInstagram, FaTwitter } from 'react-icons/fa';

const DefaultNavbar = () => {
    const [openNavbar, setOpenNavbar] = useState(false);

    return (
    //     <Navbar className={"bg-black"} color="none" navbar>
    //     <NavbarContainer style={{marginBottom: "0px"}}>
    //         <NavbarWrapper>
    //             <NavbarBrand>ChessMates</NavbarBrand>
    //             <NavbarToggler
    //                 color="white"
    //                 onClick={() => setOpenNavbar(!openNavbar)}
    //                 ripple="light"
    //             />
    //         </NavbarWrapper>

    //         <NavbarCollapse open={openNavbar}>
    //             <Nav>
    //                 <NavLink href="https://discord.gg/tM6x7ttv" ripple="light"><FaDiscord size={25}/></NavLink>
    //                 <NavLink href="https://instagram.com/cheesematesnft?utm_medium=copy_link" ripple="light"><FaInstagram size={25}/></NavLink>
    //                 <NavLink href="https://twitter.com/cheesematesnft?s=21&t=cTT8UfG-BcPvj3oJFAMqeA" ripple="light"><FaTwitter size={25}/></NavLink>
    //             </Nav>
    //         </NavbarCollapse>
    //     </NavbarContainer>
    // </Navbar>
        <nav class="bg-black shadow-md sticky top-0 z-10">
            <div class="px-3 mx-auto">
                <div class="flex justify-between">
                    <div class="flex space-x-4">
                        <a href="#" class="flex items-center py-2 px-2 text-gray-200">
                            <img class="rounded-full mx-1" src="./assets/img/absLogo.png" alt="" width="50" />
                            <span class="font-extrabold text-white">ChessMates</span>
                        </a>
                        
                    </div>
                    <div class="hidden md:flex items-center space-x-1">
                        <a href="https://discord.gg/tM6x7ttv" class="flex items-center py-2 px-3 text-white rounded hover:bg-gray-300 hover:text-white transition duration-500">
                            <FaDiscord size={40}/>
                        </a>
                        <a href="https://twitter.com/cheesematesnft?s=21&t=cTT8UfG-BcPvj3oJFAMqeA" class="flex items-center py-2 px-3 text-white rounded hover:bg-gray-300 hover:text-white transition duration-500">
                            <FaTwitter size={40}/>
                        </a>
                        <a href="https://instagram.com/cheesematesnft?utm_medium=copy_link" class="flex items-center py-2 px-3 text-white rounded hover:bg-gray-300 hover:text-white transition duration-500">
                            <FaInstagram size={40}/>
                        </a>
                    </div>
                    <div class="md:hidden flex items-center">
                        <button class="mobile-menu-button">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="mobile-menu hidden md:hidden p-1">
                <a href="https://discord.gg/tM6x7ttv" class="flex justify-center items-center py-2 px-3 text-white rounded hover:bg-gray-300 hover:text-white transition duration-500">
                    <FaDiscord size={30}/>
                </a>
                <a href="https://twitter.com/cheesematesnft?s=21&t=cTT8UfG-BcPvj3oJFAMqeA" class="flex justify-center items-center py-2 px-3 text-white rounded hover:bg-gray-300 hover:text-white transition duration-500">
                    <FaTwitter size={30}/>
                </a>
                <a href="https://instagram.com/cheesematesnft?utm_medium=copy_link" class="flex justify-center items-center py-2 px-3 text-white rounded hover:bg-gray-300 hover:text-white transition duration-500">
                    <FaInstagram size={30}/>
                </a>
                
            </div>
        </nav>
    );
};

export default DefaultNavbar;
