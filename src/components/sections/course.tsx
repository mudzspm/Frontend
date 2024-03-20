import familySupport from '../../assets/familySupport.png';
import heart from '../../assets/heart.png';
function Course() {
  return (
    <section className='2xl:px-52 xl:px-32 lg:px-24 md:px-12 px-6 xl:mt-[5rem] lg:mt-[5rem]'>
      <div className='lg:flex lg:items-center justify-center gap-24'>
        <div className='mt-20 lg:mt-0 md:min-w-[30rem] md:flex md:items-center md:justify-center'>
          <img
            className='w-full h-auto lg:max-w-lg max-w-lg  '
            src={familySupport}
            alt='Hero Image'
          />
        </div>

        <div className='xl:max-w-xl xl:pr-[4rem] xl:mt-6  md:p-6'>
          <div className='flex items-center gap-[0.592rem]'>
            <div className='border-b-4 border-[#EB414B] w-6 mt-1'></div>
            <p className='text-[#EB414B] text-lg'>Courses</p>
          </div>

          <h3 className='mt-3.5 font-bold text-3xl text-[#0F405A]'>
            YOUR SUPPORT IS
             REALLY POWERFUL.
          </h3>
          <p className='mt-8 text-base text-[#0F405A]'>
            Sociis aute euismod, vulputate. Porta amet Tortor nibh wisi saepe,
            facere dapibus necessitatibus voluptatum eos faucibus, mollit quod
            quo voluptatem. Cillum potenti, consequuntur cupiditate perferendis
            ac. Quas sed voluptatum, aliquid! Reiciendis magnam laudantium
            natoque natus. Necessitatibus parturient potenti laborum convallis
            phasellus similique quia adipisci.
          </p>
          <div className='flex justify-end sm:mt-[4rem] lg:mt-[1.2rem] md:mt-[1.2rem] mr-9'>
            <img src={heart} alt='Heat' className='xl:max-w-40 ' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Course;
