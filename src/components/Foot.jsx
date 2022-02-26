import logo from "../images/logo.svg"
import apple from "../images/foot/apple.svg"
import spotify from "../images/foot/spotify.svg"
import instagram from "../images/foot/instagram.svg"
import youtube from "../images/foot/youtube.svg"
import twitter from "../images/foot/twitter.svg"
import facebook from "../images/foot/facebook.svg"


export default function Foot() {

    const linksIcons = [apple, spotify, instagram, youtube, twitter, facebook]

    return (
        <div className="foot">
            <div className="container">
                <div className="foot__content">
                    <div className="foot__logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="foot__management">
                        <div className="foot__title">Artist Management:<br/>EMAIL:</div>
                        <div className="foot__text">Jake Henny<br/>jake@brightlightsofficial.com</div>
                    </div>
                    <div className="foot__links">
                        {linksIcons.map((icon, index) => {
                            return (
                                <div className="foot__link" key={index}>
                                    <a href="/">
                                        <img src={icon} alt="" />
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                    <div className="foot__copyright">©  2020 DJ bright lights.</div>
                </div>
            </div>
        </div>
    )
}