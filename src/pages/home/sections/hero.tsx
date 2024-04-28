import { Button } from '../../../components/ui/button';
import Slider from 'react-slick';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    appendDots: (dots: any) => (
      <div>
        <ul style={{ margin: '-20px' }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <section className="items-center relative 2xl:px-52 xl:px-32 lg:px-24 md:px-12 px-6  md:bg-center bg-right-bottom bg-no-repeat object-cover bg-cover flex h-[100dvh] bg-[url('hero--.png')] ">
      <div
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          position: 'absolute',
          right: '0',
          backgroundImage:
            'linear-gradient(102deg, rgba(8, 64, 89, 0.51) -6.08%, rgba(0, 173, 185, 0.51) 37.62%, rgba(247, 248, 250, 0.51) 82.73%)',
        }}
      />
      <div className='w-full'>
        <Slider {...settings}>
          <div className='text-[background: #084059] text-center' key={0}>
            <h1 className='font-bold xl:text-8xl lg:text-[4rem] text-5xl  text-[#084059]'
            style={{ fontFamily: 'Glacial Indifference'}}
            >
              QURBAN & AQIQAH
            </h1>
            <h2 className='xl:text-[5.25rem] lg:text-[4rem] text-[2.5rem] text-white font-bold mt-2 '
            style={{fontFamily: 'Nourd-Bold'}}
            >
              kini lebih mudah
            </h2>
            <div className='mt-8 max-w-[38rem] mx-auto'>
              <p className=' text-center text-[#0F405A] 2xl:px-0 xl:px-0 lg:px-0 px-8 xl:text-[1.688rem] lg:text-xl  text-sm font-light '
              style={{fontFamily: 'Nourd-Light'}}
              >
                Pengagihan daging qurban dan aqiqah di Malaysia dan negara ASEAN
              </p>
            </div>
            <div className='mt-[2.7rem] flex gap-4 justify-center'>
              <Button size='sm'>Sign Up Now </Button>
            </div>
          </div>
          <div className='text-[background: #084059] text-center' key={1}>
            <h1 className='font-bold xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl'>
              QURBAN & AQIQAH
            </h1>
            <h2 className='xl:text-6xl lg:text-5xl md:text-4xl text-3xl text-white font-bold mt-2'>
              kini lebih mudah
            </h2>
            <div className='mt-8 max-w-[38rem] mx-auto'>
              <p className=' text-[#0F405A] 2xl:px-0 xl:px-0 lg:px-0 px-8 xl:text-3xl lg:text-3xl md:text-3xl text-2xl font-light'>
                Pengagihan daging qurban dan aqiqah di Malaysia dan negara ASEAN
              </p>
            </div>
            <div className='mt-[2.7rem] flex gap-4 justify-center'>
              <Button size='lg'>Sign Up Now</Button>
            </div>
          </div>
          <div className='text-[background: #084059] text-center' key={2}>
            <h1 className='font-bold xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl'>
              QURBAN & AQIQAH
            </h1>
            <h2 className='xl:text-6xl lg:text-5xl md:text-4xl text-3xl text-white font-bold mt-2'>
              kini lebih mudah
            </h2>
            <div className='mt-8 max-w-[38rem] mx-auto'>
              <p className=' text-[#0F405A] xl:text-3xl lg:text-3xl md:text-3xl text-2xl font-light'>
                Pengagihan daging qurban dan aqiqah di Malaysia dan negara ASEAN
              </p>
            </div>
            <div className='mt-[2.7rem] flex gap-4 justify-center'>
              <Button size='lg'>Sign Up Now</Button>
            </div>
          </div>
          <div className='text-[background: #084059] text-center' key={1}>
            <h1 className='font-bold xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl'>
              QURBAN & AQIQAH
            </h1>
            <h2 className='xl:text-6xl lg:text-5xl md:text-4xl text-3xl text-white font-bold mt-2'>
              kini lebih mudah
            </h2>
            <div className='mt-8 max-w-[38rem] mx-auto'>
              <p className='p text-[#0F405A] xl:text-3xl lg:text-3xl md:text-3xl text-2xl font-light'>
                Pengagihan daging qurban dan aqiqah di Malaysia dan negara ASEAN
              </p>
            </div>
            <div className='mt-[2.7rem] flex gap-4 justify-center'>
              <Button size='lg'>Sign Up Now</Button>
            </div>
          </div>
          <div className='text-[background: #084059] text-center' key={3}>
            <h1 className='font-bold xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl'>
              QURBAN & AQIQAH
            </h1>
            <h2 className='xl:text-6xl lg:text-5xl md:text-4xl text-3xl text-white font-bold mt-1'>
              kini lebih mudah
            </h2>
            <div className='mt-8 max-w-[38rem] mx-auto'>
              <p className=' text-[#0F405A] xl:text-3xl lg:text-3xl md:text-3xl text-2xl font-light'>
                Pengagihan daging qurban dan aqiqah di Malaysia dan negara ASEAN
              </p>
            </div>
            <div className='mt-[2.7rem] flex gap-4 justify-center'>
              <Button size='lg'>Sign Up Now</Button>
            </div>
          </div>
          <div className='text-[background: #084059] text-center' key={4}>
            <h1 className='font-bold xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl'>
              QURBAN & AQIQAH
            </h1>
            <h2 className='xl:text-6xl lg:text-5xl md:text-4xl text-3xl text-white font-bold mt-2'>
              kini lebih mudah
            </h2>
            <div className='mt-8 max-w-[38rem] mx-auto'>
              <p className='text-[#0F405A] xl:text-3xl lg:text-3xl md:text-3xl text-2xl font-light'>
                Pengagihan daging qurban dan aqiqah di Malaysia dan negara ASEAN
              </p>
            </div>
            <div className='mt-[2.7rem] flex gap-4 justify-center'>
              <Button size='lg'>Sign Up Now</Button>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Hero;
