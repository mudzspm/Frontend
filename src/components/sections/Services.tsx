// import volunteer1 from '../../assets/familySupport.png';
import { Button } from '../ui/button';
function Services() {
  return (
    <section className='2xl:px-52 xl:px-32 lg:px-24 md:px-12 px-6 xl:mt-[5rem] lg:mt-[5rem] mb-20'>
      <div className='flex lg:flex-row flex-col lg:items-center justify-center xl:gap-24 gap-12 mb-5'>
        <div className='mt-20 lg:mt-0 md:min-w-[30rem] md:flex md:items-center md:justify-center'>
          <img
            className='w-full h-auto lg:max-w-lg max-w-lg  '
            src={`volunteer1.png`}
            alt='Hero Image'
          />
        </div>

        <div className='xl:max-w-xl xl:pr-[4rem] xl:mt-6  md:p-6'>
          <div className='flex items-center gap-[0.592rem]'>
            <div className='border-b-4 border-[#01ACBC] w-6 mt-1'></div>
            <p className='text-[#0F405A] text-lg'>Our Services</p>
          </div>

          <h3 className='mt-3.5 font-bold text-3xl text-[#0F405A]'>
            QURBAN SERVICE
          </h3>
          <p className='mt-4 mb-11 text-base text-[#0F405A]'>
            Extend the benefits of your Qurban to our brothers in need in
            Malaysia or in 40 other countries
          </p>
          <Button size='lg'>Register Qurban</Button>
        </div>
      </div>
      <div className='flex lg:flex-row flex-col-reverse lg:items-center justify-center xl:gap-24 gap-12'>
        <div className='xl:max-w-xl xl:pr-[4rem] xl:mt-6  md:p-6'>
          <div className='flex items-center gap-[0.592rem]'>
            <div className='border-b-4 border-[#01ACBC] w-6 mt-1'></div>
            <p className='text-[#0F405A] text-lg'>Our Services</p>
          </div>

          <h3 className='mt-3.5 font-bold text-3xl text-[#0F405A]'>
            AQIQAH SERVICE
          </h3>
          <p className='mt-4 mb-11 text-base text-[#0F405A]'>
            Complete your child’s aqiqah starting at only RM299. Souvenirs and
            proof of execution will be send directly to your address!
          </p>
          <Button size='lg'>Register Aqiqah</Button>
        </div>
        <div className='mt-20 lg:mt-0 md:min-w-[30rem] md:flex md:items-center md:justify-center'>
          <img
            className='w-full h-auto lg:max-w-lg max-w-lg  '
            src={`volunteer2.png`}
            alt='Hero Image'
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
