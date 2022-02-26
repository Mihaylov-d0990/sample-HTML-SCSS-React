import "./style.scss"
import Head from "./components/Head";
import Musician from "./components/Musician";
import Quote from "./components/Quote";
import Tracks from "./components/Tracks/Tracks";
import Photos from "./components/Photos";
import Slider from "./components/Slider";
import Foot from "./components/Foot";

function App() {
    return (
        <div className="wrapper">
            <Head />
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
