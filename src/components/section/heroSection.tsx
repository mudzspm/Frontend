// import heroImg from "../../assets/heroImg.png"
import familySuport from '../../assets/familySupport.png'
import heart from "../../assets/heart.png"
import { Button } from "../ui/button"

const HeroSection = () => {
  return (
    <>
    <section  className="md:bg-center bg-right-bottom bg-no-repeat object-cover bg-cover flex m-0 p-0 h-[90dvh] w-full bg-[url('heroImg.png')]" >
    <div className='text-white sm:relative sm:text-white sm:px-[4rem] translate-y-[6rem] xl:ml-7 lg:ml-6 ml-3' >
    <h1 className='font-bold xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl'>QURBAN & AQIQAH</h1>
    <h2 className='xl:text-6xl lg:text-5xl md:text-4xl sm-3xl text-2xl text-[#EB414B] mt-1'>Now Easier</h2>
    <div className='mt-7' >
    <p className='text-white xl:text-3xl lg:text-3xl md:text-3xl text-2xl'>Distribute the meat to our brothers</p>
    <p className='text-white xl:text-3xl lg:text-3xl md:text-3xl text-2xl'>in need in 41 countries.</p>
    </div>
    <div className='mt-12 flex gap-6'>
    <Button size='lg'>
        Register Aqiqah
    </Button>

    <Button variant="outline" size="lg" >
        Register qurban
    </Button>
    </div>
    </div>

        </section>



    <section className='xl:mt-[5rem] lg:mt-[5rem]' >
    <div className="pb-0 py-12 px-4 sm:px-6 lg:px-8" >
  <div className="max-w-7xl mx-auto">
    <div className="lg:flex lg:items-center lg:justify-center gap-x-4">
    <div className="mt-8 lg:mt-0 md:min-w-[30rem] md:flex md:items-center md:justify-center md:p-[3rem] sm:p-[3rem] p-[2rem] ">
        <img className="w-full h-auto lg:max-w-lg max-w-lg  " src={familySuport} alt="Hero Image" />
      </div>
      
      <div className="xl:max-w-xl xl:pr-[4rem] xl:mt-6  md:p-6" >
        {/* <p className="text-[#151515] text-lg flex gap-4 ">
            <span>
            <hr  className="border-b-4 border-[#EB414B] w-5 my-2 justify-center item-center"  />
            </span>
              Couses</p> */}
              
              <div className="flex items-center gap-4">
    <div className="border-b-4 border-[#EB414B] w-6 mt-1"></div>
    <p className='className="text-[#151515] text-lg'>Courses</p>
</div>

        <h3 className="mt-3.5 font-bold text-3xl text-[#15151]">YOUR SUPPORT IS  
        <span className='text-[#FF5309]'> REALLY POWERFUL.</span>
         </h3>
        <p className='text-sm mt-8 '>
        Sociis aute euismod, vulputate. Porta amet Tortor nibh wisi 
        saepe, facere dapibus necessitatibus voluptatum eos faucibus, mollit quod quo
         voluptatem. Cillum potenti, consequuntur cupiditate perferendis ac.
          Quas sed voluptatum, aliquid! Reiciendis magnam laudantium natoque natus.
           Necessitatibus parturient potenti laborum convallis phasellus similique quia adipisci.
        </p>
        <div className='flex justify-end sm:mt-[4rem] lg:mt-[1.2rem] md:mt-[1.2rem] mr-9'>

        <img src={heart}  alt="Heat" className='xl:max-w-40 ' />
        </div>
        
      </div>
    </div>
  </div>
</div>

    </section>


    <div className='bg-[#EB414B1A] mt-5 text-center '>
<div className='p-2 ' >
  <h2 className='mt-10 xl:text-5xl lg:text-4xl md:text-3xl text-[#000000] font-bold'>
  Trusted by Over <span className='text-[#FF5309] xl:text-6xl lg:text-5xl md:text-4xl text-2xl'> 4000,000 </span>Malaysians
  </h2>
  <p className='text-base text-[#3A2B24] font-medium mt-2.5'>
  16 years of faithfully facilitating the implementation of your Qurban and Aqiqah
  </p>
 
</div>

<div className=' text-start flex justify-around'>

<div >
<div className="mb-3 rounded-full bg-[#FF5309] lg:mt-14 max-w-12 justify-center text-center p-2">
  <img src="calendar.png" alt="Calendar" />
</div>
<h2 className='text-[#FF5309] font-bold xl:text-6xl lg:text-5xl md:text-4xl text-2xl '>16
<span className='text-[#50426F] text-sm'>
Years 
Operation
</span >
</h2>

</div>

<div >
  <div className="mb-3 rounded-full bg-[#FF5309] lg:mt-14 max-w-12 justify-center text-center p-2">
<img src="user.png" alt="user"  className='max-w-9'/>

  </div>
  <h2  className='text-[#FF5309] font-bold xl:text-6xl lg:text-5xl md:text-4xl text-2xl'>
44k+
<span className='text-[#50426F] text-sm'>
Qurban and Aqiqah Participtions
</span>
</h2>


  </div>

  <div className='mb-16'>
  <div className="mb-3 rounded-full bg-[#FF5309] lg:mt-14 max-w-12 justify-center text-center p-2">
<img src="user.png" alt="" className='max-w-9'/>

  </div>
  <div >
  <h2  className='text-[#FF5309] font-bold xl:text-6xl lg:text-5xl md:text-4xl text-2xl'>
4,474
<span className='text-[#50426F] text-sm'>
Animals has been slaughtered
</span>
</h2>
  </div>
 

  </div>
</div>

    </div>


    <div className='text-center xl:mt-16 '>
      <h2 className='text-[#EB414B] xl:text-5xl lg:text-4xl text-3xl  font-semibold'>
        Our <span className='text-[#3A2B24] '> Achievements </span>
      </h2>
      <p className='text-xl font-medium'>
      Proof that we are committed to providing the best service for you
      </p>
    </div>
    </>
  )
}

export default HeroSection;