
import PriceCard from '../../components/priceCard/priceCard';

 const Home = () => {
  return (
    <>
    <div className="text-center mt-[13.063rem]">

        <h3 className="xl:text-[4rem] lg:text-4xl text-3xl text-[#084059] font-bold">
          Let’s Start By Choosing A Package
</h3>
        <p className="text-[1.5rem] text-[#000000] font-light mt-[1.438rem]">
          Available Payment Methods
        </p>
        <div className="justify-center items-center flex">

        <img src="visa.png" alt="Visa Chip" />
        </div>
      </div>   
      
      <div className='flex justify-center items-center flex-col xl:gap-8 mt-[7.313rem] xl:flex-row p-4'>
        
        <PriceCard />
        <PriceCard />
      </div>


      <div>
        
              <div className='relative mt-[13.375rem] h-[18.125rema ] bg-[#00ADB96B] py-[2rem]'>
        <img
          src='qurban-.png'
          alt='Aqiqah'
          className='absolute mix-blend-overlay bg-no-repeat bg-cover object-cover h-full w-full top-0 '
        />
       
      </div>
      </div>


      
    
    </>
  )
}
export default Home;