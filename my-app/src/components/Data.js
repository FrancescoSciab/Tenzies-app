import { useEffect, useState } from "react"

export default function Data(props) {
    const seconds = Math.floor(props.elapsedTime / 1000);
    const bestTime = [];
    
    
    useEffect(() => {
        
        function loopOver() { 
            bestTime.push(seconds)
        }
        const timeList = bestTime.map(loopOver)
        
        localStorage.setItem("TimeList", timeList)
    }, [seconds])

    return(
        <div>
            <p>You took {seconds} seconds</p>
            {bestTime}
        </div>
    
    )
}