import React from "react"

export default function Player() {

    const [tracks, setTracks] = React.useState([
        {
            id: "01",
            name: "3LAU, Bright Lights — How You Love Me",
            chosen: true
        },
        {
            id: "02",
            name: "Bright Lights, Kaleena Zanders, Kandy — War For Love",
            chosen: false
        },
        {
            id: "03",
            name: "Pink Is Punk, Benny Benassi, Bright Lights — Ghost",
            chosen: false
        },
        {
            id: "04",
            name: "Hardwell, Dyro, Bright Lights — Never Say Goodbye",
            chosen: false
        },
        {
            id: "05",
            name: "Zeds Dead, Dirtyphonics, Bright Lights — Where Are You Now",
            chosen: false
        },
        {
            id: "06",
            name: "Zedd, Bright Lights — Follow You Down",
            chosen: false
        }        
    ])

    const setTrack = (id) => {
        const tracksArr = [...tracks]

        tracksArr.forEach(track => {

            if (track.id === id) track.chosen = true 
            else track.chosen = false

        })

        setTracks([...tracksArr])
    }

    const barRef = React.useRef()
    const [barStyle, setBarStyle] = React.useState({
        bar: {
            background: `linear-gradient(90deg, #7A66CC 50%, #fff 50%)`
        }
        // ,
        // slider: {
        //     left: `${Math.round(barRef.current.clientWidth * 0,5)}px`
        // }
    })

    const check = (event) => {
        let pos = event.clientX - barRef.current.getBoundingClientRect().left
        let percent = Math.round(pos / (barRef.current.clientWidth / 100))
        setBarStyle({
            bar: {
                background: `linear-gradient(90deg, #7A66CC ${percent}%, #fff ${percent}%)`
            }
            // , 
            // slider: {
            //     left: `${Math.round(barRef.current.clientWidth * (percent / 100))}px`
            // }
        })
    }

    
    const sliderRef = React.useRef()

    return (
        <>
            <div className="tracks__player player">
                <div className="tracks__play play-button"></div>
                <div className="tracks__progress-bar progress-bar" style={barStyle.bar} ref={barRef} onClick={(e) => (check(e))}>
                    <div className="tracks__slider-toggle slider-toggle" ref={sliderRef}></div>
                </div>
                <div className="tracks__timer timer">00:47-03:30</div>
            </div>
            <div className="tracks__list">
                {tracks.map(track => {
                    return (
                        <div key={track.id} onClick={() => (setTrack(track.id))}>
                            <div className="tracks__id">{track.id}</div>
                            <div 
                                className={track.chosen ? "tracks__item tracks__item_chosen" : "tracks__item"} 
                            >{track.name}</div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}