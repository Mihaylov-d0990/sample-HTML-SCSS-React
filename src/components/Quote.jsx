import image from "../images/quote/image.png"

export default function Quote() {

    return (
        <div className="quote">
            <div className="container">
                <div className="quote__content border-30">
                    <div className="quote__first-block">
                        <div className="quote__text">“In an age where mainstream music is designed to be as easily consumed as possible, listening to Bright Lights is refreshing, to say the least. Her sound is perfect for radio but complex enough to separate her from other pop newcomers.”</div>
                        <div className="quote__link"><a href="/">PopULove.net</a></div>
                    </div>
                    <div className="quote__second-block">
                        <div className="quote__image border-30">
                            <img src={image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}