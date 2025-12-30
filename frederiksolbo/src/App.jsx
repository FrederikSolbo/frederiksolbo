import { useEffect, useState } from "react";
import "./App.css";
import WaffleHeart from '/WaffleHeart.svg'

function App() {
  const amazingTime = 1769799600000; // target timestamp

  const [timeTill, setTimeTill] = useState(amazingTime - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeTill(amazingTime - Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Convert ms → d/h/m/s
  const seconds = Math.floor(timeTill / 1000) % 60;
  const minutes = Math.floor(timeTill / (1000 * 60)) % 60;
  const hours = Math.floor(timeTill / (1000 * 60 * 60)) % 24;
  const days = Math.floor(timeTill / (1000 * 60 * 60 * 24));

  return (
    <>
    <div className="header">
      <img 
      src={WaffleHeart} 
      alt="waffle heart"
      className="wh"
      />
      <h1>Time till Frederik and Ida are together again!</h1>
      <img 
      src={WaffleHeart} 
      alt="waffle heart"
      className="wh"
      />
    </div>
      <h2>
        {days} days {hours} hours {minutes} minutes {seconds} seconds
      </h2>
    </>
  );
}

export default App;
