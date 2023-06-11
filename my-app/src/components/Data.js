import { useEffect } from "react"

export default function Data(props) {
    const seconds = Math.floor(props.elapsedTime / 1000);
    const bestTime = []

    function getHighestValue(number) {
        return Math.max(number)
    }

    function saveTime() {
        bestTime.push(seconds)
        //loop over besttime array
        const record = bestTime.forEach(getHighestValue)

        localStorage.setItem("bestTime", record)
    }

    //as seconds are loaded, push them to localstorage
    useEffect(() => {
        saveTime()
        localStorage.setItem("bestTime", bestTime)
    })
    

    return(
        <div>
            <p>You took {seconds} seconds</p>
            
        </div>
    
    )
}