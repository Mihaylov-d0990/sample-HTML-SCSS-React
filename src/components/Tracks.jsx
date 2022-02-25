import image from "../images/traks/image.png"

export default function Tracks() {

    const tracks = [
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
        
        
        
        
        
             
    ]

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
                        <div className="tracks__song"></div>
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