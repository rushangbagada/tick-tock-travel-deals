
import React, { useEffect, useState } from "react";

interface CountdownTimerProps {
  hours: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ hours }) => {
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number }>({
    hours,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const totalSeconds = hours * 60 * 60;
    let secondsRemaining = totalSeconds;

    const timer = setInterval(() => {
      if (secondsRemaining <= 0) {
        clearInterval(timer);
        return;
      }

      secondsRemaining -= 1;
      
      const hoursLeft = Math.floor(secondsRemaining / 3600);
      const minutesLeft = Math.floor((secondsRemaining % 3600) / 60);
      const secondsLeft = secondsRemaining % 60;

      setTimeLeft({
        hours: hoursLeft,
        minutes: minutesLeft,
        seconds: secondsLeft
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [hours]);

  const formatTime = (value: number) => {
    return value.toString().padStart(2, '0');
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-3xl font-bold tracking-wider">
        {formatTime(timeLeft.hours)} : {formatTime(timeLeft.minutes)} : {formatTime(timeLeft.seconds)}
      </div>
      <div className="flex justify-between w-64 text-xs text-gray-500 mt-1">
        <span className="ml-1">HOURS</span>
        <span>MINUTES</span>
        <span className="mr-1">SECONDS</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
