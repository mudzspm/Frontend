import Hero from '@/pages/home/sections/hero';
import PriceCard from './sections/priceCard';
import Support from '@/pages/home/sections/support';
import QurbanServiceBanner from '@/pages/home/sections/qurbanService';
import Trust from '@/pages/home/sections/trust';
import Services from '@/pages/home/sections/services';


const Home = () => {
  return (
    <>
      <Hero />

      <div className='text-center mt-[13.063rem]'>
        <h3 className='xl:text-[4rem] lg:text-4xl text-3xl text-[#084059] font-bold'>
          Choose A Package
        </h3>
        <p className='text-[1.5rem] text-[#000000] font-light mt-[1.438rem]'>
          Available Payment Methods
        </p>
        <div className='justify-center items-center flex'>
          <img src='visa.png' alt='Visa Chip' />
        </div>
      </div>

      <div className='flex justify-center items-center flex-col xl:gap-8 mt-[7.313rem] xl:flex-row p-4'>
       
        <PriceCard />
        <PriceCard />
      </div>

      <div>
        <div className='relative mt-[13.375rem] h-[18.125rem] bg-[#00ADB96B] py-[2rem]'>
          <img
            src='qurban-.png'
            alt='Aqiqah'
            className='absolute mix-blend-overlay bg-no-repeat bg-cover object-cover h-full w-full top-0 '
          />
        </div>
      </div>

      <div>
        <Support />
      </div>
      <div>
        <QurbanServiceBanner />
      </div>

      <div className='mt-[15.625rem]'>
        {/* <Trust /> */}
      </div>

      <div className='mt-[3.375rem]'>
        <Services />
      </div>

      <div className='mt-[22.125rem]'>
        <h2 className='text-center xl:text-[4rem] lg:text-4xl text-3xl text-[#084059]'>
          In Collaboration With
        </h2>
        <div className='bg-[#E6F7F8] flex justify-center xl:flex-row flex-col  p-[6.813rem] gap-[2.625rem] mt-[3rem]'>
          <img src='ilum.svg' alt='' />
          <img src='upm.svg' alt='' />
          <img src='ppz.svg' alt='' />
          <img src='haji.svg' alt='' />
          <img src='ppz-.svg' alt='' />
        </div>
      </div>

      <div className='mt-[18.625rem]'>
        {/* <QuestionForm /> */}
      </div>
    </>
  );
};
export default Home;
