import image1 from "../images/musician/image1.png"
import image2 from "../images/musician/image2.png"

export default function Musician() {

    return (
        <div className="musician">
            <div className="container">
                <div className="musician__content">
                    <div className="musician__first-block">
                        <div className="musician__title title title-icon">Bright Lights</div>
                        <div className="musician__text">Bright Lights is a multi-Grammy nominated singer, songwriter, DJ and record producer. She has written for numerous  pop stars including Britney Spears, Justin Bieber, Usher and Beyoncé. Her catalog has amassed over 1 billion streams worldwide. More than 100 million of those streams can be attributed to her artist career and include such hits as Porter Robinson's "Language," 3LAU's "How You Love Me" and her own single "Runaway." She was also a featured vocalist on Zedd's #1 Clarity album. Her latest music video, "Put It Down," reached 1 million streams in the first week, releasing independently. Bright Lights is currently in the studio working on a self-produced album slated for release in 2020. </div>
                        <div className="musician__about">
                            <div className="musician__item">Based in: Los Angeles</div>
                            <div className="musician__item">Founded in 2011</div>
                            <div className="musician__item">Genre: #DancePop </div>
                            <div className="musician__item">Label: 333 Recordings</div>
                        </div>
                    </div>
                    <div className="musician__second-block">
                        <div className="musician__image">
                            <img className="border-30" src={image1} alt="" />
                        </div> 
                        <div className="musician__image">
                            <img className="border-30" src={image2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}