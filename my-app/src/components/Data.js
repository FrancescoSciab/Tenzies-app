import { useEffect, useState } from "react"

export default function Data(props) {
    const seconds = Math.floor(props.elapsedTime / 1000);
    //localstorage best time
    const [bestTime, setBestTime] = useState(localStorage.getItem("bestTime"))

    const record = (seconds < bestTime)
    
    
    //first time users will have localstorage set up
    useEffect(() => {
        if(!bestTime || record) {
            localStorage.setItem("bestTime", seconds)
        }

        setBestTime(localStorage.getItem("bestTime"))
    }, [seconds, bestTime, record])
        
    
    
    

    
    


    return(
        <div>
            <p>You took {seconds} seconds</p>
            <p>Best Time: {bestTime}</p>
        </div>
    
    )
}