import React from "react"

export default function TrackList() {
    const [tracks, setTracks] = React.useState([
        {
            id: "01",
            name: "3LAU, Bright Lights — How You Love Me",
            chosen: true,
            time: 210
        },
        {
            id: "02",
            name: "Bright Lights, Kaleena Zanders, Kandy — War For Love",
            chosen: false,
            time: 260
        },
        {
            id: "03",
            name: "Pink Is Punk, Benny Benassi, Bright Lights — Ghost",
            chosen: false,
            time: 220
        },
        {
            id: "04",
            name: "Hardwell, Dyro, Bright Lights — Never Say Goodbye",
            chosen: false,
            time: 230
        },
        {
            id: "05",
            name: "Zeds Dead, Dirtyphonics, Bright Lights — Where Are You Now",
            chosen: false,
            time: 240
        },
        {
            id: "06",
            name: "Zedd, Bright Lights — Follow You Down",
            chosen: false,
            time: 250
        }        
    ])

    return (
        <div className="tracks__list">
            {tracks.map(track => {
                return (
                    <div key={track.id}>
                        <div className="tracks__id">{track.id}</div>
                        <div 
                            className={track.chosen ? "tracks__item tracks__item_chosen" : "tracks__item"} 
                        >{track.name}</div>
                    </div>
                )
            })}
        </div>
    )
}