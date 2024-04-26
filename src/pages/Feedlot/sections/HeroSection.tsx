function HeroSection() {
  return (
    <section
      className='py-9 px-8  h-[40dvh] items-center flex'
      style={{
        backgroundImage:
          'linear-gradient(101.6deg, rgba(8, 64, 89, 0.51) -0.81%, rgba(0, 173, 185, 0.51) -0.8%, rgba(255, 255, 255, 0.51) 114.32%)',
      }}
    >
      <p className='xl:text-5xl lg:text-4xl text-2xl font-bold text-[#000] text-center max-w-[1140px] mx-auto'>
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
