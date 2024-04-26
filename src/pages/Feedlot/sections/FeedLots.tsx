import FeedLotForm from '@/components/FeedLotForm';
import FeedLotCard from '@/components/FeedLotCard';
function FeedLots() {
  return (
    <>
    {/* <div className='px-[240px] pb-[227px] '>
      <div className='flex flex-col border-b-[1px] items-start px-[147px]'>
        <h2 className='text-4xl font-bold mb-5'>
          Select the location of FeedLot
        </h2>
        <div className='w-full'>
          <FeedLotForm />
        </div>
      </div>
      <div className='pt-[84px] px-[147px]'>
        <FeedLotCard />
      </div>
    </div> */}




<section className='max-w-[90rem] mx-auto py-16 '>
  <div className='xl:px-20 lg:px-10 md:px-8 px-0'>

<FeedLotForm />
  </div>

      <div className='mt-[60px]'>
        <div className='flex flex-col gap-7 xl:px-20 lg:px-10 md:px-8 px-0 xl:mx-0 lg:mx-0 md:mx-2 mx-1'>
        <h2 className='text-4xl font-bold mb-5'>
          Select the location of FeedLot
        </h2>
          <div className='grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-2  xl:gap-8 lg:gap-6 md:gap-3 gap-1 '>
          <FeedLotCard />
          <FeedLotCard />
          <FeedLotCard />
          <FeedLotCard />
          <FeedLotCard />
            
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default FeedLots;
