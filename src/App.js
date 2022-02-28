import "./style.scss"

import Main from "./components/Main";
import Musician from "./components/Musician";
import Quote from "./components/Quote";
import Tracks from "./components/Tracks/Tracks";
import Photos from "./components/Photos";
import Slider from "./components/Slider";
import Foot from "./components/Foot";

import React from "react";

function App() {

    return (
        <div className="wrapper">
            <Main />
            <Musician />
            <Quote />
            <Tracks />
            <Photos />
            <Slider />
            <Foot />
        </div>
    );
}

export default App;
