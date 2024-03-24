const PriceCard = () => {
  return (
    <>
      <div>
        <div className='max-w-[36.625rem] rounded-[1.25rem] shadow-lg bg-blue'>
          <img src='qurban.png' alt='Qurban' className='max-w-full' />
          <div className='p-8'>
            <p className='text-[#909090] text-[1.25rem] font-normal mt-[1.625rem]'>
              Qurban individually or share with others.
            </p>
            <hr className='max-w-[32rem] h-[0.031rem]  bg-[#BBBBBB] border-1 rounded mt-[1.625rem] ' />
            <p className='mt-[0.813rem]'>Starting from</p>

            <div className='flex justify-between items-center'>
              <div>
                <span className='text-[#00ADB9] text-[1.75rem] font-bold'>
                  RM 500
                </span>
                <span className='text-[#000000] text-[1.5rem] mt-[0.5rem] font-normal items-center ml-[0.625rem]'>
                  per portion
                </span>
              </div>
              <img src='Ellipse.svg' alt='Ellipse' />
            </div>
          </div>
        </div>
        <div className='p-[2.063rem] text-[#848484] text-[1rem] font-medium '>
          <div className='flex gap-4 mt-[2.063rem]'>
            <img src='ok.svg' alt='verify' />

            <p>
              Distribution to our brothers and sisters in need in 38 countries
            </p>
          </div>
          <div className='flex gap-4 mt-[2rem]'>
            <img src='ok.svg' alt='verify' />

            <p>Printed Validation Certificate/e-Certificate</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceCard;
