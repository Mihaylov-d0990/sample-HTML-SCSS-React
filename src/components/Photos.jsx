import image1 from "../images/photos/image1.png"
import image2 from "../images/photos/image2.png"
import image3 from "../images/photos/image3.png"
import image4 from "../images/photos/image4.png"
import image5 from "../images/photos/image5.png"

export default function Photos() {

    const photos = [image1, image2, image3, image4, image5]

    return (
        <div className="photos">
            <div className="container">
                <div className="photos__content">
                    {photos.map((photo, index) => {
                        return (
                            <div className="photos__image border-30" key={Math.random()}>
                                <img src={photo} alt="" />
                                {index === 4 ? <div className="photos__text"><div>EDC Las Vegas Mainstage</div></div> : <></>}
                            </div>
                        )
                    })}
                </div>                
            </div>
        </div>
    )
}