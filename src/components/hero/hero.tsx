import { Button } from "../ui/button";


const Hero = () => {
  return (
    <section className="relative 2xl:px-52 xl:px-32 lg:px-24 md:px-12 px-6  md:bg-center bg-right-bottom bg-no-repeat object-cover bg-cover flex h-[80dvh] bg-[url('hero.png')]">
      <div className='text-[#00ADB9] absolute top-1/2 transform  -translate-y-1/2 text-center'>
        <h1 className='font-bold xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl'>
          QURBAN & AQIQAH
        </h1>
        <h2 className='xl:text-6xl lg:text-5xl md:text-4xl sm-3xl text-2xl text-[#084059] font-bold mt-1'>
          Now Easier
        </h2>
        <div className='mt-7'>
          <p className='text-[#0F405A] xl:text-3xl lg:text-3xl md:text-3xl text-2xl'>
                      Distribute the meat to our brothers in need in 41
            <br/>
                      countries
          </p>
         
        </div>
        <div className='mt-12 flex gap-4 justify-center'>
          <Button size='lg'>Sign Up Now</Button>

        </div>
      </div>
    </section>
  );
};

export default Hero;
