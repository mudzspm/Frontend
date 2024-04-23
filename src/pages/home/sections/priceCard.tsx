const PriceCard = () => {
  return (
    <>
      <div>
      {/* max-w-[36.625rem] */}
        <div className=' rounded-[1.25rem] shadow-[0px_4px_16px_0px_#00000040] bg-[#E4E4E4]'>
          <img src='qurban.png' alt='Qurban' className='max-w-full' />
          <div className='p-8'>
            <p className='text-[#909090] xl:text-[1.25rem] lg:text-sm text-xs font-normal '>
              Qurban individually or share with others.
            </p>
            <hr className='max-w-[32rem] h-[1px]  bg-[#909090] border-1 rounded xl:mt-[1.625rem] lg:mt-6 md:mt-4 mt-3 ' />
            <p className='mt-[0.813rem] text-sm'>Starting from</p>

            <div className='flex justify-between items-center '>
              <div className=' items-center inline-flex gap-2.5'>
                <p className='text-[#00ADB9] xl:text-[1.75rem] lg:text-xl text-lg  font-bold'>
                  RM 500
                </p>
                <p className='text-[#000000] xl:text-[1.5rem] lg:text-lg text-base  self-baseline'>
                  per portion
                </p>
              </div>
              <img src='Arrow-.svg' alt='Ellipse' />
            </div>
          </div>
        </div>
        <div className='p-[2.063rem] text-[#848484] xl:text-[1rem] lg:text-[1rem] text-xs   font-medium '>
          <div className='flex gap-4 '>
            <img src='ok.svg' alt='verify' />

            <p>
              Distribution to our brothers and sisters in need in 38 countries
            </p>
          </div>
          <div className='flex gap-4 mt-[1.625rem]'>
            <img src='ok.svg' alt='verify' />

            <p>Printed Validation Certificate/e-Certificate</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceCard;
