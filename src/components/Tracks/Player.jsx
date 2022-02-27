import React from "react"
import mozart from "./mozart.mp3"

export default function Player() {
    const [isPlaying, setIsPlaying] = React.useState(false)
    const [duration, setDuration] = React.useState(0)
    const [currentTime, setCurrentTime] = React.useState(0)

    const audioPlayer = React.useRef()
    const progressBar = React.useRef()
    const animationRef = React.useRef()

    const onLoadedMetadata = () => {
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds;
        console.log(seconds);
    }

    const calcTime = (secs) => {
        const minutes = Math.floor(secs / 60)
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`

        const seconds = Math.floor(secs % 60)
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`

        return `${returnedMinutes}:${returnedSeconds}`
    } 

    const togglePlayPause = () => {

        const prevValue = isPlaying

        setIsPlaying(!prevValue)

        if (!prevValue) {
            audioPlayer.current.play()
            animationRef.current = requestAnimationFrame(whilePlaying)
        } else {
            audioPlayer.current.pause()
            cancelAnimationFrame(animationRef.current)
        }
    }

    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime
        changePlayerCurrentTime()
        animationRef.current = requestAnimationFrame(whilePlaying)
    }

    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value
        changePlayerCurrentTime()
    }

    const changePlayerCurrentTime = () => {
        progressBar.current.style.setProperty("--seek-before-width", `${progressBar.current.value / duration * 100}%`)
        setCurrentTime(progressBar.current.value)
    }

    return (
        <div className="tracks__player player">
            <audio ref={audioPlayer} preload="metadata" onLoadedMetadata={onLoadedMetadata}>
                <source src={mozart} type="audio/mp3" />
            </audio>
            <button 
                className={`tracks__toggle ${isPlaying ? "pause-button" : "play-button"}`}
                onClick={togglePlayPause}
            ></button>
            <div className="tracks__progress-bar progress-bar">
                <input type="range" defaultValue="0" ref={progressBar} onChange={changeRange}/>
            </div>
            <div className="tracks__timer timer">
                <div className="tracks__current-time current-time">{calcTime(currentTime)}</div>
                -
                <div className="tracks__duration duration">{(duration && !isNaN(duration)) && calcTime(duration)}</div>
            </div>
        </div>
    )
}