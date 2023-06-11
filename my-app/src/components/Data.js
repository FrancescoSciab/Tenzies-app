import { useEffect, useState } from "react"

export default function Data(props) {
    const seconds = Math.floor(props.elapsedTime / 1000);
    //localstorage best time
    const [bestTime, setBestTime] = useState(localStorage.getItem("bestTime"))
    const [record, setRecord] = useState(0)
    console.log(seconds)
    
    //first time users will have localstorage set up
    useEffect(() => {
        if(!bestTime) {
            setBestTime(seconds)
        }
    }, [bestTime])
        
    
    //to check shortest elapsed time before setting localstorage
    useEffect(() => {
        if(seconds <= bestTime) {
            localStorage.setItem("bestTime", seconds)
        }
    }, [seconds])

    
    useEffect(() => {
        setRecord(localStorage.getItem("bestTime"))
    }, [record])


    return(
        <div>
            <p>You took {seconds} seconds</p>
            <p>Best Time: {record}</p>
        </div>
    
    )
}