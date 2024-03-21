import Slider from 'react-slick';

function Achievements() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <section className='mb-16 2xl:px-52 xl:px-32 lg:px-24 md:px-12 px-6 text-center justify-center mt-[4.509rem] '>
      <h2 className='text-[#0F405A] xl:text-6xl lg:text-4xl text-3xl font-semibold'>
        Our Achievements
      </h2>
      <p className='text-xl font-medium text-[#0F405A] mt-3.5 mb-[4.1rem]'>
        Proof that we are committed to providing the best service for you
      </p>

      <Slider {...settings}>
        <div className=''>
          <img
            src='placeholder.png'
            alt='Achievement'
            className='w-full mr-5'
          />
        </div>
        <div>
          <img
            src='placeholder.png'
            alt='Achievement'
            className='w-full mr-5'
          />
        </div>
        <div>
          <img
            src='placeholder.png'
            alt='Achievement'
            className='w-full mr-5'
          />
        </div>
        <div>
          <img src='placeholder.png' alt='Achievement' className='w-full' />
        </div>
      </Slider>
    </section>
  );
}

export default Achievements;
