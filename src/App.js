import React, { useState } from "react";
import './App.css';
import "@material-tailwind/react/tailwind.css";
import Button from "@material-tailwind/react/Button";

function App() {
    const [openNavbar, setOpenNavbar] = useState(false);
    return (
        <div className="App">
            <Button color="lightBlue" ripple="light">Button</Button>
        </div>
    );
}

export default App;
