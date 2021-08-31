import "./styles.css";
import { useState, useEffect, useRef } from "react";

export default function App() {
  const [timeLeft, setTimeLeft] = useState(60); //time in seconds
  let interRef = useRef(0);
  const minutesLeft = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");
  const secondsLeft = (timeLeft - minutesLeft * 60).toString().padStart(2, "0");
  // let counter;
  // useEffect(() => {
  //   console.log("from use effect", timeLeft);
  // });

  function startPomodoro() {
    interRef.current = setInterval(function () {
      // console.log("inside set interval", timeLeft);
      //this value of set interval is not changing, why?
      //checking changes
      // if (timeLeft <= 0) {
      //   console.log("will this ever work");
      // }
      setTimeLeft((timeLeft) => {
        if (timeLeft > 0) {
          return timeLeft - 1;
        }
        return 0;
      });
      // console.log(timeLeft);
    }, 1000);
    // window.inter = inter;
  }

  function stopPomodoro() {
    clearInterval(interRef.current);
  }
  // console.log("above return");

  function resetTimerButton() {
    clearInterval(interRef.current);
    setTimeLeft((timeLeft) => (timeLeft = 120));
  }

  return (
    <div className="App">
      <div className="pomodoro-box">
        <h2>Some</h2>
        <div className="timer">
          <span>{minutesLeft}</span>:<span>{secondsLeft}</span>
        </div>
        <div className="buttons">
          <button onClick={startPomodoro}>Start</button>
          <button onClick={resetTimerButton}>Reset</button>
          <button onClick={stopPomodoro}>Stop</button>
        </div>
      </div>
    </div>
  );
}
