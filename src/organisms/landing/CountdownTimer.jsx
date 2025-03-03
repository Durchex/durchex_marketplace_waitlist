import React from "react";
import Countdown from "react-countdown";

const CountdownTimer = () => {
  const targetDate = new Date("March 15, 2025 00:00:00").getTime();

  const renderer = ({ days, hours, minutes, seconds }) => (
    <div className="text-white flex flex-col items-center justify-center px-4">
      <p className="text-[#CAC7D1] text-base md:text-xl mb-4">March 15, 2025</p>
      <div className="flex space-x-4 md:space-x-8 text-center mb-4">
        {[
          { label: "days", value: days },
          { label: "hours", value: hours },
          { label: "minutes", value: minutes },
          { label: "seconds", value: seconds },
        ].map((time, index) => (
          <div key={index} className="flex flex-col items-center">
            <p className="text-3xl md:text-5xl font-semibold">{time.value}</p>
            <span className="text-[#CAC7D1] text-xs md:text-sm">
              {time.label}
            </span>
          </div>
        ))}
      </div>
      <p className="text-[#CAC7D1] text-sm md:text-lg flex items-center gap-2">
        till launch <span className="text-2xl">🚀</span>
      </p>
    </div>
  );

  return <Countdown date={targetDate} renderer={renderer} />;
};

export default CountdownTimer;
