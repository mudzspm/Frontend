import PortionCard from '@/components/PortionCard';
import SearchForm from '@/components/SearchForm';
import { Button } from '@/components/ui/button';


function AqiqaSection() {
  return (
    <section className='max-w-[90rem] mx-auto py-16'>
      <SearchForm />

      <div className='mt-[60px]'>
        <div className='flex flex-col gap-7 xl:px-20 lg:px-10 md:px-8 px-0 xl:mx-0 lg:mx-0 md:mx-2 mx-1'>
          <h2 className='xl:text-[1.625rem] lg:text-[1.625rem] text-base font-normal'>Qurban - Cattle</h2>
          <div className='grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2  xl:gap-8 lg:gap-6 md:gap-3 gap-1 '>
            <PortionCard />
            <PortionCard />
            <PortionCard />
            <PortionCard />
            <PortionCard />
            
          </div>
        </div>
      </div>
    <div className='flex justify-end items-center font-Montserrat text-[1.75rem] mt-4 mr-2'>
      <Button size='lg' variant='message'  >
      View Cart <span className='ml-2 mt-[2px]'>
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="16" viewBox="0 0 21 16" fill="none">
<path d="M20.3048 8.70711C20.6953 8.31658 20.6953 7.68342 20.3048 7.29289L13.9408 0.928932C13.5503 0.538408 12.9171 0.538408 12.5266 0.928932C12.1361 1.31946 12.1361 1.95262 12.5266 2.34315L18.1834 8L12.5266 13.6569C12.1361 14.0474 12.1361 14.6805 12.5266 15.0711C12.9171 15.4616 13.5503 15.4616 13.9408 15.0711L20.3048 8.70711ZM0.597656 9H19.5977V7H0.597656V9Z" fill="white"/>
</svg>
      </span>
      </Button>
    </div>
    </section>
  );
}

export default AqiqaSection;
