
import SupportCard from "../supportCard/supportCard";


const Support = () => {
    const imagesAnimals = [
        {
            src: "animal-",
            alt: ''
        },

        {
            src: 'farm-',
            alt: 'Farm'
        },
        {
            src: 'animal-2',
            alt: 'Aninal'
        },
        {
            src: 'farm-2',
            alt: 'Farm'
        }
        
    ];

  return (
      <>
      
          <section>
              

        
              <div className='relative bg-gradient-to-r from-[#084059ED] via-[#084059ED] to-[#53AFBEED]'>
                      <img
          src='feedLot.png'
          alt='Aqiqah'
                      className='absolute mix-blend-overlay bg-no-repeat bg-cover object-cover h-full w-full opacity-[20%]'
                      
                  />
                 
                  <div className="max-w-[81.125rem] mx-auto p-[5rem]">
                  <div className=" mr-auto">
                      
                  <h1 className="font-bold xl:text-[5.375rem] lg:text-6xl md:text-6xl sm:text-5xl text-4xl  text-[#FFFFFF] ">
                      Support local farms with
                      <br />
                      DQ FeedLot
                  </h1>
                  <p className="text-[#B3B3B3] xl:text-[1.5rem] font-light mt-[2.25rem]">
                      The demand for sacrificial animals during festivities will
                      be met by sourcing 
                      them from <br /> locally owned agrofarm stock, ensuring
                      the support of local agriculture while fulfilling
                      <br />
                      
                      religious obligations.
                  </p>
                      </div>
                      <div className=" ml-auto ">
                          
                  <div className=" flex justify-end gap-[1.125rem]">
                      
                          <p className="text-[#FFFFFF]">
                          Find out more
                          </p>
                              <img src="FindArrow.svg" alt="Arrow" className="mr-[1rem]" />
                         
                      </div>
                       <div className=" flex justify-end gap-[1.125rem] " >
                              <SupportCard />
                              <SupportCard />
                               <SupportCard />
                              <SupportCard />
                     </div>
                      </div>
                  </div>
        
      </div>
    
              {/* <div className="mt-[7.813rem] mx-auto max-w-[120rem] justify-center item-center text-center">
                  <Timer />
              </div> */}
              
              
          </section>
      
      </>
  )
}

export default Support;
