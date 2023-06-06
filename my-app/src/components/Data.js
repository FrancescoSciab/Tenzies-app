import { useEffect, useState } from "react"

export default function Data(props) {
    const seconds = Math.floor(props.elapsedTime / 1000)
    const [bestTime, setBestTime] = useState(0)
    const [timeSaved, setTimeSaved] =  useState(false)

    function saveTime() {
        localStorage.setItem("bestTime", seconds)
    }
    useEffect(() => {
        saveTime()
        setTimeSaved(true)
    }, [timeSaved])

    useEffect(() => {
        if(timeSaved && seconds < bestTime){
            saveTime()
            const takenTime = localStorage.getItem("bestTime")
            setBestTime(takenTime)
        }
    }, [seconds, bestTime, timeSaved])
    
    return(
        <div>
            <p>You took {seconds} seconds</p>
            <p>Best time: {bestTime} seconds</p>
        </div>
    
    )
}