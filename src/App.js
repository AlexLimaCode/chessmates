import React, { useState } from "react";
import './App.css';
import "@material-tailwind/react/tailwind.css";
import Button from "@material-tailwind/react/Button";
import DefaultNavbar from "./Components/DefaultNavbar";

function App() {
    return (
        <div className="App">
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            
            <Button color="lightBlue" ripple="light">Button</Button>
        </div>
    );
}

export default App;
