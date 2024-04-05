import PortionCard from '@/components/PortionCard';
import SearchForm from '@/components/SearchForm';

function AqiqaSection() {
  return (
    <section className='max-w-[90rem] mx-auto py-16'>
      <SearchForm />

      <div className='mt-[60px]'>
        <div className='flex flex-col gap-7 px-20'>
          <h2 className='text-2xl font-normal'>Aqiqah Goat</h2>
          <div className='flex gap-8'>
            <PortionCard />
            <PortionCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AqiqaSection;
