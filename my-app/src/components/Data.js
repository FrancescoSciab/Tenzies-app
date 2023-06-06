import { useEffect, useState } from "react"

export default function Data(props) {
    const seconds = Math.floor(props.elapsedTime / 1000)
    const [bestTime, setBestTime] = useState(localStorage.getItem("bestTime"))
    
    console.log(bestTime)
    
    // useEffect(() => {
    //     if(seconds < bestTime) {
    //         localStorage.setItem("bestTime", seconds)
    //         setBestTime(<p>Best Time: {localStorage.getItem("bestTime")}seconds</p>)
    //     }
    // }, [bestTime])
    
    

    return(
        <div>
            <p>You took {seconds} seconds</p>
            {bestTime}
        </div>
    
    )
}