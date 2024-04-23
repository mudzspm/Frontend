import { useEffect, useState } from 'react';

interface TimerProps {
  countDownDays: number;
}

const Timer = ({ countDownDays }: TimerProps) => {
  function addDaysToCurrentDate(daysToAdd: number) {
    const currentDate = new Date();

    const targetDate = new Date(
      currentDate.getTime() + daysToAdd * 24 * 60 * 60 * 1000,
    );

    const day = targetDate.getDate().toString().padStart(2, '0');
    const month = (targetDate.getMonth() + 1).toString().padStart(2, '0');
    const year = targetDate.getFullYear();
    return `${year}-${month}-${day}`;
  }

  const daysToGo = addDaysToCurrentDate(countDownDays);

  function calculateTimeLeft() {
    const difference = +new Date(daysToGo) - +new Date();

    let timeLeftStamp = {
      days: '00',
      hours: '00',
      minutes: '00',
    };

    if (difference > 0) {
      timeLeftStamp = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
          2,
          '0',
        ),
        hours: String(
          Math.floor((difference / (1000 * 60 * 60)) % 24),
        ).padStart(2, '0'),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
          2,
          '0',
        ),
      };
    }

    return timeLeftStamp;
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000); // Update every second

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='bg-[#00ADB9] text-center  rounded-[15px] 
    xl:pb-8 xl:px-8 lg:pb-8 lg:px-8 md:pb-8 md:px-8 pb-4 px-4 lg:mx-8 md:mx-10  mx-10 flex justify-center xl:gap-14 lg:gap-8 md:gap-6 
    gap-2 flex-wrap shadow-[0px_4px_16px_0px_rgba(0,0,0,0.3)]'>
      <div className='flex justify-center  items-center gap-6'>
        <h2 className='text-[#FFFFFF] xl:text-[5.25rem] lg:text-[4rem] md:text-5xl text-[2rem] flex flex-col justify-center'>
          <p>{timeLeft.days}</p>
          <p className='xl:text-base lg:text-xs text-[0.5rem] font-normal'>DAYS</p>
        </h2>
        <h2 className='text-[#FFFFFF] xl:text-[5.25rem] lg:text-[4rem] md:text-5xl text-[2rem] mb-8 animate-pulse'>:</h2>
        <h2 className='text-[#FFFFFF] xl:text-[5.25rem] lg:text-[4rem] md:text-5xl text-[2rem] flex flex-col justify-center'>
          <p>{timeLeft.hours}</p>
          <p className='xl:text-base lg:text-xs text-[0.5rem] font-normal '>HOURS</p>
        </h2>
        <h2 className='text-[#FFFFFF] xl:text-[5.25rem] lg:text-[4rem] md:text-5xl text-[2rem]  mb-8 animate-pulse'>:</h2>
        <h2 className='text-[#FFFFFF] xl:text-[5.25rem] lg:text-[4rem] md:text-5xl text-[2rem] flex flex-col justify-center'>
          <p>{timeLeft.minutes}</p>
          <p className='xl:text-base lg:text-xs text-[0.5rem] font-normal'>MINUTES</p>
        </h2>
      </div>
      <div className='flex gap-1 xl:flex-col lg:flex-col md:flex-col flex-row items-center xl:items-start
      lg:items-start md:items-start sm:items-start  justify-center
      text-left text-white lg:text-[4rem] text-xl'>
        <p className='xl:text-xl lg:text-xs text-[0.5rem] font-normal'>TO GO..</p>
        <p className='xl:text-[2.5rem] lg:text-4xl text-xs font-bold '>WHY WAIT?</p>
      </div>
    </div>
  );
};

export default Timer;
