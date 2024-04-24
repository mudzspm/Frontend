import Hero from '@/pages/home/sections/hero';
import PriceCard from './sections/priceCard';
import Support from '@/pages/home/sections/support';
import QurbanServiceBanner from '@/pages/home/sections/qurbanService';
import Services from '@/pages/home/sections/services';
import Timer from './sections/timer';
import UserJourney from '@/components/UserJourney';
import Trust from './sections/trust';

const Home = () => {
  return (
    <>
      <Hero />
      <div className='text-center 2xl:mt-[13.063rem] xl:mt-[11rem] lg:mt-40 mt-[8.688rem]'>
        <h3 className='xl:text-[4rem] lg:text-[2.813rem] text-[1.625rem] text-[#084059] font-bold'>
          Choose A Package
        </h3>
        <p className='2xl:text-[1.5rem] xl:text-[1.5rem] lg:text-base text-sm text-[#000000] font-light mt-[1.438rem]'>
          Available Payment Methods
        </p>
        <div className='justify-center items-center flex'>
          <img src='visa.png' alt='Visa Chip' />
        </div>
      </div>

      <div className='flex justify-center items-center flex-col xl:gap-8 mt-[7.313rem] xl:flex-row lg:gap-6 lg:flex-row p-4'>
        <PriceCard />
        <PriceCard />
      </div>

      <div className='relative mt-[13.375rem] h-[18.125rem] bg-[#00ADB9] py-[2rem]'>
        <img
          src='qurban-.png'
          alt='Aqiqah'
          className='absolute mix-blend-overlay bg-no-repeat bg-cover object-cover h-full w-full top-0 '
        />
      </div>

      <Support /> 

      <section className='max-w-[75.5rem] mx-auto my-[7.8rem] flex flex-col gap-[180px]'>
        <Timer countDownDays={4} />
        <UserJourney  />
      </section>

      <QurbanServiceBanner />
      <div className='xl:mt-[15.625rem] lg:mt-[10rem] mt-[6.188rem]'>
        <Trust />
      </div>

      <div className='mt-[3.375rem]'>
        <Services />
      </div>

      <div className='xl:mt-[22.125rem] lg:mt-56 mt-36 xl:mb-[20rem] lg:mb-[17rem] mb-[12rem]'>
        <h2 className='font-bold text-center xl:text-[4rem] lg:text-5xl text-xl text-[#084059]'>
          In Collaboration With
        </h2>
        <div className='bg-[#EDECEC] flex justify-center flex-wrap  xl:p-[6.813rem]  p-[3rem] gap-[2.625rem] mt-[3rem]'>
          <img src='ilum.svg' alt='IIUM'  className='xl:max-w-full lg:w-[128px] w-[60px]'/>
          <img src='upm.svg' alt='UPM'  className='xl:max-w-full lg:w-[128px] w-[60px]'/>
          <img src='ppz.svg' alt='PPZ'  className='xl:max-w-full lg:w-[128px] w-[60px]'/>
          <img src='haji.svg' alt='HAJI'  className='xl:max-w-full lg:w-[128px] w-[60px]'/>
          <img src='ppz-.svg' alt='PPZ'  className='xl:max-w-full lg:w-[128px] w-[60px]'/>
        </div>
      </div>
      {/* <div className='mt-[18.625rem]'><QuestionForm /></div> */}
    </>
  );
};
export default Home;
