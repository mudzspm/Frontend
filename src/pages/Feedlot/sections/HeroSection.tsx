function HeroSection() {
  return (
    <section
      className='pt-9 pb-[51px] h-[25dvh]'
      style={{
        backgroundImage:
          'linear-gradient(101.6deg, rgba(8, 64, 89, 0.51) -0.81%, rgba(0, 173, 185, 0.51) -0.8%, rgba(255, 255, 255, 0.51) 114.32%)',
      }}
    >
      <p className='text-4xl font-bold text-[#084059] text-center max-w-[1140px] mx-auto'>
        Over <strong className='text-[#09B1CB]'>500</strong> farms located all
        across the country,
        <strong className='text-[#09B1CB]'>benefiting our brothers</strong> and
        need while simultaneously
        <strong className='text-[#09B1CB]'>
          {' '}
          empowering the nation’s economy.
        </strong>
      </p>
    </section>
  );
}

export default HeroSection;
