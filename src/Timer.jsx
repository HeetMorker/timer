import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [minutes , setminutes] = useState(10);
    const [seconds , setseconds] = useState(5);

    useEffect( () => {
        setTimeout(()=> {
            console.log("hello")
            setseconds(seconds - 1);
            if(seconds === 1 ){
                setseconds(60);
                setminutes(minutes - 1)
            }
        },1000) 
    });
    const StartTimer=()=>{  
      
    }
    const restartTimer=() => {
        // setminutes(10);  
        // setseconds(5);
    }
    const pauseTimer=() => {
        clearInterval(StartTimer);
    }
     return (
        <div className="container">
            <div className="inputes">
                <input type="text" />
                <input type="text" />
            </div>
            <div className="shadows"><h2>mintues : {minutes} second : {seconds}</h2></div>
            <div className="buttons">
            <button onClick={restartTimer}>Restart</button>
            <button onClick={pauseTimer}>Pause</button>
            <button onClick={StartTimer}>Start</button>
            </div>
        </div>
    )
}
export default Timer;