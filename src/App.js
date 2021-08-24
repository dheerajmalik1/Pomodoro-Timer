import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [timeLeft, setTimeLeft] = useState(2 * 60); //time in seconds

  const minutesLeft = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");
  const secondsLeft = (timeLeft - minutesLeft * 60).toString().padStart(2, "0");
  // let counter;
  useEffect(() => {
    console.log("from use effect", timeLeft);
  });

  function startPomodoro() {
    const inter = setInterval(function () {
      console.log("inside set interval", timeLeft);
      //this value of set interval is not changing, why?
      if (timeLeft <= 0) {
        console.log("will this ever work");
      }
      setTimeLeft((timeLeft) => timeLeft - 2);
      // console.log(timeLeft);
    }, 1000);
  }
  console.log("just above return");
  return (
    <div className="App">
      <div className="pomodoro-box">
        <h2>Some dialogue here</h2>
        <div className="timer">
          <span>{minutesLeft}</span>:<span>{secondsLeft}</span>
        </div>
        <div className="buttons">
          <button onClick={startPomodoro}>Start</button>
          <button>Reset</button>
        </div>
      </div>
    </div>
  );
}
