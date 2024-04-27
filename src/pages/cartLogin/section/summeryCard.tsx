import { Button } from '@/components/ui/button';

const SummeryCard = () => {
  return (
    <>
      <div className='px-[1.875rem]  w-[26.688rem] h-[32.438rem] shadow-md bg-[#FFFFFF] mt-[4.125rem] rounded-[0.625rem]'>
        <div className='border-b mt-[2.938rem] '>
          <p className='text-[#000000DE] text-2xl font-normal mb-3.5'>
            Summary
          </p>
        </div>

        <div className='border-b mt-[1.313rem]'>
          <p className='text-base text-[#000] font-semibold'>Qurban</p>

          <div className='flex justify-between mt-1.5'>
            <p className='text-sm text-[#000000DE] font-normal'>
              Qurban Buffalo / Portion
            </p>
            <p className='text-sm text-[#000000DE] font-normal'>x 1</p>
            <p className='text-sm text-[#000000DE] font-normal'>RM 6000</p>
          </div>

          <div className='flex justify-between mt-[0.813rem] mb-6'>
            <p className='text-sm text-[#000000DE] font-normal'>
              Qurban Buffalo / Portion
            </p>
            <p className='text-sm text-[#000000DE] font-normal'>x 4</p>
            <p className='text-sm text-[#000000DE] font-normal'>RM 6000</p>
          </div>
        </div>

        <div className='flex justify-between mt-5'>
          <p className='text-lg text-[#000000DE] font-normal'>Total</p>

          <p className='gap-2 flex items-center'>
            <span className='text-base font-normal text-[#000000DE]'>RM</span>
            <span className='text-xl font-normal text-[#000000DE]'>
              8000.00
            </span>
          </p>
        </div>
        <div className='mt-[3.25rem] text-center'>
          <Button
            variant='progress'
            style={{
              backgroundImage:
                'linear-gradient(180deg, #00ADB9 -305.94%, #084059 730.63%)',
            }}
          >
            Log in/Register to proceed
          </Button>
        </div>
      </div>
    </>
  );
};

export default SummeryCard;
