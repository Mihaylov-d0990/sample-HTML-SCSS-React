import "./style.scss"
import Head from "./components/Head";
import Musician from "./components/Musician";
import Quote from "./components/Quote";
import Tracks from "./components/Tracks";
import Photos from "./components/Photos";

function App() {
    return (
        <div className="wrapper">
            <Head />
            <Musician />
            <Quote />
            <Tracks />
            <Photos />
            <div className="slider">
                <div className="slider__content">
                    <div className="slider__arrow"></div>
                    <div className="slider__item">
                        <div className="slider__image">
                            <img src="" alt="" />
                        </div>
                        <div className="slider__location">Chandler, AZ</div>
                        <div className="slider__place">The Park at Wild Horse Pass</div>
                        <div className="slider__item-bottom">
                            <div className="slider__date">Apr 02 2021</div>
                            <div className="slider__button">tickets</div>
                        </div>
                    </div>
                    <div className="slider__item">
                        <div className="slider__image">
                            <img src="" alt="" />
                        </div>
                        <div className="slider__location">Ibiza, IBZ</div>
                        <div className="slider__place">Swag Ibiza Club</div>
                        <div className="slider__item-bottom">
                            <div className="slider__date">Jul 08 2021</div>
                            <div className="slider__button">tickets</div>
                        </div>
                    </div>
                    <div className="slider__item">
                        <div className="slider__image">
                            <img src="" alt="" />
                        </div>
                        <div className="slider__location">Ibiza, IBZ</div>
                        <div className="slider__place">El Swing Ibiza</div>
                        <div className="slider__item-bottom">
                            <div className="slider__date">Jul 10 2021</div>
                            <div className="slider__button">tickets</div>
                        </div>
                    </div>
                    <div className="slider__arrow"></div>
                </div>
            </div>
            <div className="foot">
                <div className="container">
                    <div className="foot__content">
                        <div className="foot__logo">
                            <img src="" alt="" />
                        </div>
                        <div className="foot__management">
                            <div className="foot__title">Artist Management:<br/>EMAIL:</div>
                            <div className="foot__text">Jake Henny<br/>jake@brightlightsofficial.com</div>
                        </div>
                        <div className="foot__links">
                            <div className="foot__link">
                                <a href="/">
                                    <img src="" alt="" />
                                </a>
                            </div>
                            <div className="foot__link">
                                <a href="/">
                                    <img src="" alt="" />
                                </a>
                            </div>
                            <div className="foot__link">
                                <a href="/">
                                    <img src="" alt="" />
                                </a>
                            </div>
                            <div className="foot__link">
                                <a href="/">
                                    <img src="" alt="" />
                                </a>
                            </div>
                            <div className="foot__link">
                                <a href="/">
                                    <img src="" alt="" />
                                </a>
                            </div>
                            <div className="foot__link">
                                <a href="/">
                                    <img src="" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="foot__copyright">©  2020 DJ bright lights.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
