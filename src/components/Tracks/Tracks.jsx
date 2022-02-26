import React from "react"

import Player from "./Player"

import image from "../../images/traks/image.png"

export default function Tracks() {

    return (
        <div className="tracks">
            <div className="container">
                <div className="tracks__content">
                    <div className="tracks__first-block">
                        <div className="tracks__circle">
                            <div className="tracks__image">
                                <img src={image} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="tracks__second-block">
                        <div className="tracks__title title title-icon">Last tracks</div>
                        <Player />
                        <div className="tracks__social-media">
                            <div className="tracks__follow">Follow me:</div>
                            
                            <a href="/">
                                <div className="tracks__spotify">Spotify</div>
                            </a>
                            <a href="/">
                                <div className="tracks__itunes">iTunes</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}