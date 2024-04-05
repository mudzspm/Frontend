import FeedLotForm from '@/components/FeedLotForm';
import FeedLotCard from '@/components/FeedLotCard';
function FeedLots() {
  return (
    <div className='px-[240px] pb-[227px] '>
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
    </div>
  );
}

export default FeedLots;
