import React, { useState } from "react";
import './App.css';
import "@material-tailwind/react/tailwind.css";
import Button from "@material-tailwind/react/Button";
import DefaultNavbar from "./Components/DefaultNavbar";
import HeroSection from "./Components/HeroSection";
import Carousel from "./Components/Carousel";

function App() {
    return (
        <div className="App">
            <div className="w-full">
                <DefaultNavbar />
            </div>
            <div>
                <HeroSection />
            </div>
            <Carousel />
        </div>
    
    );
}

export default App;
