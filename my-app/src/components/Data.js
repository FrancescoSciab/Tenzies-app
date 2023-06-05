import { useState } from "react"

export default function Data(props) {
    const seconds = Math.floor(props.elapsedTime / 1000)
    const [timeSaved, setTimeSaved] =  useState(false)
    const bestTime = localStorage.getItem("bestTime")

    function saveTime() {
        localStorage.setItem("bestTime", seconds)
        setTimeSaved(true);
    }

    if(timeSaved) {
        saveTime()
    } else if (seconds < bestTime) {
        localStorage.setItem("bestTime", seconds)
    }
    
    
    
    
    
    return(
        <div>
            <p>You took {seconds} seconds</p>

            <p>Best time: {bestTime} seconds</p>
        </div>
    
    )
}