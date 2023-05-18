import "./countdown.sass";

import { MdTimer } from "react-icons/md";

export default function Countdown() {
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minsEl = document.getElementById("mins");
  const secsEl = document.getElementById("secs");
  const dataEl = document.getElementById("data");

  const newYears = "01 June 2023";

  function countdown() {
    const newYearsDate: any = new Date(newYears);
    const currentDate: any = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days: Number = Math.floor(totalSeconds / 3600 / 24);
    const hours: Number = Math.floor(totalSeconds / 3600) % 24;
    const mins: Number = Math.floor(totalSeconds / 60) % 60;
    const secs: Number = Math.floor(totalSeconds) % 60;

    // daysEl.innerHTML = days;
    // hoursEl.innerHTML = formatTime(hours);
    // minsEl.innerHTML = formatTime(mins);
    // secsEl.innerHTML = formatTime(secs);
  }

  function formatTime(time: any) {
    return time < 10 ? `0${time}` : time;
  }

  countdown();

  setInterval(countdown, 1000);

  return (
    <main className="countdown">
      <div className="countline">
        <p className="timing">Termina em:</p>
        <MdTimer className="times" />
        <div className="countdown-container">
          <div className="days-c">
            <p id="days">00</p>
            <span>:</span>
          </div>

          <div className="hours-c">
            <p id="hours">00</p>
            <span>:</span>
          </div>

          <div className="mins-c">
            <p id="mins">00</p>
            <span>:</span>
          </div>

          <div className="secs-c">
            <p id="secs">00</p>
          </div>
        </div>
      </div>
    </main>
  );
}
