function Trust() {
  return (
    <section className='bg-[#EB414B1A] mt-5 text-center p-4 2xl:px-52 xl:px-32 lg:px-24 md:px-12 '>
      <div className='mb-14'>
        <h2 className='mt-10 xl:text-6xl lg:text-5xl text-4xl text-[#000000] font-bold'>
          Trusted by Over{' '}
          <span className='text-[#FF5309] xl:text-6xl lg:text-5xl md:text-4xl text-2xl'>
            {' '}
            4000,000{' '}
          </span>
          Malaysians
        </h2>
        <p className='text-2xl text-[#3A2B24] font-medium mt-2.5'>
          16 years of faithfully facilitating the implementation of your Qurban
          and Aqiqah
        </p>
      </div>

      <div className='text-start flex md:justify-center justify-start 2xl:px-0 px-4 2xl:gap-28 md:flex-nowrap flex-wrap gap-12'>
        <div>
          <img className='block' src='calendar.svg' alt='Calendar' />
          <h2 className='mt-[15px] gap-4 items-center inline-flex bg-gradient-to-r from-[#EB414B] to-[#FF5309] text-transparent bg-clip-text font-bold xl:text-6xl lg:text-5xl md:text-4xl text-2xl'>
            <span className='inline-block'>16</span>
            <span className='text-[#50426F] text-lg inline-block'>
              Years <br /> Operation
            </span>
          </h2>
        </div>

        <div>
          <img src='user.svg' alt='user' />
          <h2 className=' inline-flex gap-4 items-center mt-[15px] bg-gradient-to-r from-[#EB414B] to-[#FF5309] text-transparent bg-clip-text font-bold xl:text-6xl lg:text-5xl md:text-4xl text-2xl'>
            <span className='inline-block'>44k+</span>
            <span className='text-[#50426F] text-lg '>
              Qurban and Aqiqah <br /> Participtions
            </span>
          </h2>
        </div>

        <div className='mb-16'>
          <img src='animal.svg' alt='' />

          <div>
            <h2 className=' inline-flex items-center gap-4 mt-[15px] bg-gradient-to-r from-[#EB414B] to-[#FF5309] text-transparent bg-clip-text font-bold xl:text-6xl lg:text-5xl md:text-4xl text-2xl'>
              <span className='inline-block'>4,474</span>
              <span className='text-[#50426F] text-lg'>
                Animals has been
                <br /> slaughtered
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trust;
