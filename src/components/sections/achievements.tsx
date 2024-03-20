function Achievements() {
  return (
    <section className='2xl:px-52 xl:px-32 lg:px-24 md:px-12 px-6 text-center justify-center mt-[4.509rem] '>
      <h2 className='text-[#0F405A] xl:text-5xl lg:text-4xl text-3xl font-semibold'>
        Our  Achievements 
      </h2>
      <p className='text-xl font-medium text-[#0F405A] mt-3.5'>
        Proof that we are committed to providing the best service for you
      </p>
      <div className="mt-[4.176rem]">
      <img src="achievement.png" alt="Achievement" className="max-w-full"/>
      </div>

      <div className="text-center flex justify-center mt-[1.444rem]">
        {/* <img src="swipe.svg" alt="Swipe" /> */}

        <div className='flex items-center gap-[0.592rem]'>
        <div className="w-[1.5rem] h-[1.5rem] bg-[#D9D9D9] rounded-full"></div>
        <div className="w-[1.5rem] h-[1.5rem] bg-[#0F405A] rounded-full"></div>
        <div className="w-[1.5rem] h-[1.5rem] bg-[#D9D9D9] rounded-full"></div>
        <div className="w-[1.5rem] h-[1.5rem] bg-[#D9D9D9] rounded-full"></div>
          </div>
      </div>
    </section>
  );
}

export default Achievements;
