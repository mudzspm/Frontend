import SupportCard from './supportCard';
import SwipeImg from './swiper';



const Support = () => {
  const imagesAnimals = [
    {
      src: 'animal-.png',
      alt: '',
    },

    {
      src: 'farm-.png',
      alt: 'Farm',
    },
    {
      src: 'animal-2.png',
      alt: 'Aninal',
    },
    {
      src: 'farm-2.png',
      alt: 'Farm',
    },
  ];

  return (
    <>
      <section>
      {/* bg-gradient-to-r from-[#084059ED] via-[#084059ED] to-[#53AFBEED] */}
        <div
        style={{backgroundImage:
          'linear-gradient(270deg, rgba(83, 175, 190, 0.93) 0%, rgba(8, 64, 89, 0.93) 100%)',}}
        className='relative '>
          <img
            src='feedLot.png'
            alt='Aqiqah'
            className='absolute mix-blend-overlay bg-no-repeat bg-cover object-cover h-full w-full opacity-[20%]'
          />

          <div className='max-w-[81.125rem] mx-auto p-[5rem]'>
            <div className=' mr-auto'>
              <h1 className='font-bold xl:text-[5.375rem] lg:text-5xl md:text-4xl text-2xl text-[#FFFFFF] '
              >
                Support local farms with
                <br />
                DQ FeedLot
              </h1>
              <p className='text-[#B3B3B3] xl:text-2xl xl:pr-[9.375rem] lg:text-base sm:text-sm text-xs font-light mt-[2.25rem]'>
                The demand for sacrificial animals during festivities will be
                met by sourcing them from  locally owned agrofarm stock,
                ensuring the support of local agriculture while fulfilling
               
                religious obligations.
              </p>
            </div>
            <div className=' ml-auto xl:mt-[6.5rem] lg:mt-9 mt-5'>
              <div className=' flex justify-end items-center  gap-[1.125rem]'>
                <p className='text-[#FFFFFF] xl:text-2xl lg:text-base md:text-sm text-xs'>Find out more</p>
                <img src='FindArrow.svg' alt='Arrow' className='mr-[1rem] xl:max-w-[26px] xl:h-[19px] max-w-[15px] h-[12px] w '  />
              </div>
              <div className='  mt-[3.125rem] '>
                <SwipeImg />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Support;
