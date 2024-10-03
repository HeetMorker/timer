import React, { useEffect, useState } from 'react';
const NewTimer = () => {
    const initialMinutes = 0;
    const initialSeconds = 0;

    const [minutes, setMinutes] = useState(initialMinutes);
    const [seconds, setSeconds] = useState(initialSeconds);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (isRunning && (minutes > 0 || seconds > 0)) {
            timer = setTimeout(() => {
                if (seconds === 0) {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                } else {
                    setSeconds(seconds - 1);
                }
            }, 1000);
        }
        return () => clearTimeout(timer);
    }, [minutes, seconds, isRunning]);
    const startTimer = () => {
        setIsRunning(true);
    };
    const pauseTimer = () => {
        setIsRunning(false);
    };
    const restartTimer = () => {
        setMinutes(initialMinutes);

        setSeconds(initialSeconds);
        setIsRunning(false);
    };

    return (
        <div className="container">
            <div className="inputes">
                <label htmlFor="">ENTER MINUTES</label>
                <input type="number" onChange={(e) => { setMinutes(e.target.value) }} />
                <label htmlFor="">ENTER SECOND</label>
                <input type="text"  onChange={(e) => { setSeconds(e.target.value) }} />
            </div>
            <div className="shadows">
                <h1>Minutes: <span>{minutes}</span> Seconds: <span>{seconds}</span></h1>
            </div>
            <div className="buttons">
                <button class="button" type="button" onClick={restartTimer}>Restart</button>
                <button class="button" type="button" onClick={pauseTimer}>Pause</button>
                <button class="button" type="button" onClick={startTimer}>Start</button>
            </div>
        </div>
    );
};
export default NewTimer;