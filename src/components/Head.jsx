import logo from "../images/logo.svg"
import image1 from "../images/main/image1.png"
import image2 from "../images/main/image2.png"
import image3 from "../images/main/image3.png"

export default function Head() {

    const items = [
        {
            image: image1,
            text: <>Working on my upcoming full-lenth album that`s releasing later this year.</>
        },
        {
            image: image2,
            text: <>Halloween vibes.<br/>Listen my new track!</>
        },
        {
            image: image3,
            text: <>WarForLove is OUT NOW!!<br/>Stream it here!</>
        }
    ]

    const links = [
        {
            name: "About",
            link: "/"
        },
        {
            name: "News",
            link: "/"
        },
        {
            name: "Music",
            link: "/"
        },
        {
            name: "Media",
            link: "/"
        },
        {
            name: "Tours",
            link: "/"
        },
        {
            name: "Contacts",
            link: "/"
        }
    ]

    return (
        <div className="main">
                <div className="container">
                    <div className="main__head">
                        <div className="main__logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="main__nav">
                            {links.map(link => {
                                return (
                                    <div className="main__nav-item" key={Math.random()}>
                                        <a href={link.link} >{link.name}</a>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="main__content">
                            <div className="main__title title">New Single</div>
                            <div className="main__song-name">War For Love</div>
                            <div className="main__song"></div>
                            <div className="main__list">
                                {items.map(item => {
                                    return (
                                        <div className="main__item border-20"  key={Math.random()}>
                                            <img src={item.image} alt="" />
                                            <div className="main__item-text border-20">{item.text}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                </div>
            </div>
    )
}