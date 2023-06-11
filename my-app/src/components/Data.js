import { useEffect, useState } from "react"

export default function Data(props) {
    const seconds = Math.floor(props.elapsedTime / 1000);
    const [bestTime, setBestTime] = useState(localStorage.getItem("bestTime"))
    console.log(seconds)
    
    useEffect(() => {
        if(!bestTime) {
            setBestTime(seconds)
        }
    }, [bestTime])
        
    
    
    useEffect(() => {
        if(seconds <= bestTime) {
            localStorage.setItem("bestTime", seconds)
        }
    }, [seconds])


    return(
        <div>
            <p>You took {seconds} seconds</p>
            <p>Best Time: {}</p>
        </div>
    
    )
}