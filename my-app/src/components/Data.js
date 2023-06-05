export default function Data(props) {
    const seconds = Math.floor(props.elapsedTime / 1000)

    
    localStorage.setItem("bestTime", seconds)
    const bestTime = localStorage.getItem("bestTime")
    
    
    
    return(
        <div>
            <p>You took {seconds} seconds</p>

            <p>Best time: {bestTime} seconds</p>
        </div>
    
    )
}