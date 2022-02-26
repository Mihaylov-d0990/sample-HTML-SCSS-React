import React from "react"

import image1 from "../images/slider/image1.png"
import image2 from "../images/slider/image2.png"
import image3 from "../images/slider/image3.png"
import arrowRight from "../images/slider/arrow-right.svg"
import arrowLeft from "../images/slider/arrow-left.svg"


export default function Slider() {

    const [elements, setElements] = React.useState(
        [
            {
                id: 0,
                location: "Chandler, AZ",
                place: "The Park at Wild Horse Pass",
                date: "Apr 02 2021",
                image: image1
            },
            {
                id: 1,
                location: "Ibiza, IBZ",
                place: "Swag Ibiza Club",
                date: "Jul 08 2021",
                image: image2
            },
            {
                id: 2,
                location: "Ibiza, IBZ",
                place: "El Swing Ibiza",
                date: "Jul 10 2021",
                image: image3
            }
        ]
    )

    return (
        <div className="slider">
            <div className="slider__content">
                <div className="slider__arrow">
                    <img src={arrowLeft} alt="" />
                </div>
                    <div className="slider__list">
                        {elements.map(element => {
                            return (
                                <div className="slider__item border-30" key={element.id}>
                                    <div className="slider__image border-30">
                                        <img src={element.image} alt="" />
                                    </div>
                                    <div className="slider__position">
                                        <div className="slider__location">{element.location}</div>
                                        <div className="slider__place">{element.place}</div>
                                    </div>
                                    <div className="slider__item-bottom">
                                        <div className="slider__date">{element.date}</div>
                                        <div className="slider__button border-30">tickets</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                <div className="slider__arrow">
                    <img src={arrowRight} alt="" />
                </div>
            </div>
        </div>
    )
}