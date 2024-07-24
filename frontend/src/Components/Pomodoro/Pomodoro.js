import { useEffect, useState } from 'react';
import './Pomodoro.css';

const Pomodoro = () => {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [start, setStart] = useState(false);
    const [work, setWork] = useState(true);
    const [text, setText] = useState("Start Studying!");
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        let interval = null;
        if (start) {
            interval = setInterval(() => {
                setSeconds(prevSeconds => {
                    if (prevSeconds === 0) {
                        if (minutes === 0) {
                            if(counter % 4 === 0 && work === true){
                                setWork(false)
                                setMinutes(15)
                            } else{
                                if(work === true){ 
                                    setWork(false)
                                    setMinutes(5)
                                } else{
                                    setWork(true)
                                    setMinutes(25)
                                    setCounter(counter + 1)
                                }
                            }
                            return 0;
                        } else {
                            setMinutes(prevMinutes => prevMinutes - 1);
                            return 59;
                        }
                    } else {
                        return prevSeconds - 1;
                    }
                });
            }, 1000);
        } else {
            clearInterval(interval); 
        }

        return () => clearInterval(interval);
    }, [start, minutes, counter]);

    const handleClick = () => {
        if (start === false){
            setText("Pause");
            setStart(true);
            
        } else {
            setText("Start Studying!");
            setStart(false);
        }
    };

    const bodyClass = work ? 'body work-session' : 'body break-session';

    return (
        <div className= 'body'>
            <div className={bodyClass}>
                <h1 className='header'>PomoFocus</h1>
                <h2 className='clock'>{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</h2>
                <p className='cycles'>Pomodoro Cycle #{counter}</p>
                <button className = "start-stop"onClick={handleClick}>{text}</button>
            </div>
        </div>
    );
}

export default Pomodoro;
