import { useEffect, useState } from "react"

export default function Data(props) {
    const seconds = Math.floor(props.elapsedTime / 1000);
    //localstorage best time
    const [bestTime, setBestTime] = useState(localStorage.getItem("bestTime"))
    
    
    //first time users will have localstorage set up
    useEffect(() => {
        if(!bestTime) {
            setBestTime(seconds)
        }
        //to check shortest elapsed time before setting localstorage
        if(seconds <= bestTime) {
            localStorage.setItem("bestTime", seconds)
        }

        setBestTime(localStorage.getItem("bestTime"))
    }, [seconds, bestTime])
        
    
    
    

    
    


    return(
        <div>
            <p>You took {seconds} seconds</p>
            <p>Best Time: {bestTime}</p>
        </div>
    
    )
}