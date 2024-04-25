import PortionCard from '@/components/PortionCard';
import SearchForm from '@/components/SearchForm';


function QurbanSection() {
  return (
    <section className='max-w-[90rem] mx-auto py-16'>
      <SearchForm />

      <div className='mt-[60px] '>
        <div className='flex flex-col gap-7 xl:px-20 lg:px-10 md:px-8 px-0 xl:mx-0 lg:mx-0 md:mx-2 mx-1'>
          <h2 className='xl:text-[1.625rem] lg:text-[1.625rem] text-base font-normal'>Qurban - Cattle</h2>
          <div className='flex xl:gap-8 lg:gap-6 md:gap-3 gap-1 overflow-x-scroll' >



            <PortionCard />
            <PortionCard />
            
            <PortionCard />
            <PortionCard />
            
          </div>
        </div>

        <div className='flex flex-col gap-7 xl:px-20 lg:px-10 md:px-8 px-0 xl:mx-0 lg:mx-0 md:mx-2 mx-1 mt-20'>
          <h2 className='text-2xl font-normal'>Qurban - Buffalo</h2>
          <div className='flex xl:gap-8 lg:gap-6 md:gap-3 gap-1 overflow-x-scroll' >



            <PortionCard />
            <PortionCard />
            
            <PortionCard />
            <PortionCard />
            
          </div>
        </div>

      </div>
    </section>
  );
}

export default QurbanSection;
