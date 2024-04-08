import { useState, useEffect } from "react";

const TimerContainer = ({ value, time }: { value: string; time: string }) => {
  return (
    <div className="w-[120px] h-[120px] py-4 px-9 flex flex-col justify-center items-center text-[#333] bg-black/10 backdrop-blur-md border border-white/30 p-5 rounded-lg text-white max-w-sm m-8">
      <p className="text-[48px]">{value}</p>
      <p className="">{time}</p>
    </div>
  );
};

const calculateTimeLeft = (date: string) => {
  const difference = +new Date(date) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export const InfoBox = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex items-center">
      <TimerContainer value={timeLeft?.days} time={"DAYS"} />
      <div className="h-[90px] w-[2.5px]  bg-[#333] rounded-lg"></div>
      <TimerContainer value={timeLeft?.hours} time={"HOURS"} />
      <div className=" text-[#333] text-[42px]">
        <p className="">:</p>
      </div>
      <TimerContainer value={timeLeft?.minutes} time={"MINUTES"} />
      <div className=" text-[#333] text-[42px]">
        <p className="">:</p>
      </div>
      <TimerContainer value={timeLeft?.seconds} time={"SECONDS"} />
    </div>
  );
};
