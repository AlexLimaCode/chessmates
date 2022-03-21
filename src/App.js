import React, { useState } from "react";
import './App.css';
import "swiper/css";
import "@material-tailwind/react/tailwind.css";
import DefaultNavbar from "./Components/DefaultNavbar";
import HeroSection from "./Components/HeroSection";
import Carousel from "./Components/Carousel";
import About from "./Components/About";
import SwiperExample from "./Components/SwiperExample";
import RoadMap from "./Components/RoadMap";

function App() {
    return (
        <div className="App bg-black">
            <div className="w-full">
                <DefaultNavbar />
            </div>
            <div className="space-y-16">
                <HeroSection />
                <About />
                <RoadMap />
                <SwiperExample />
            </div>
        </div>
    
    );
}

export default App;
