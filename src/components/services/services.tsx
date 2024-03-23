 const Services = () => {
  return (
      <>
          <p className="text-center text-[#000000s] xl:text-[2rem] text-lg ">
              Why should you use our services?
      </p>
          <div className="flex gap-[2.875rem] p-6 text-[1.25rem] justify-center xl:flex-row flex-col mt-[4.625rem]">
              
     
        <div >
          <div className='xl:border-r-2  '>
          <img src='map.svg' alt='Map'  className="max-w-full m-auto xl:p-5"/>
            
        </div>

          <div>
                  <p className="text-center text-sm">
                      Wide coverage around <br/> the country 
            </p>
          </div>
          </div>
        <div >
          <div className='xl:border-r-2'>

          <img src='degree.svg' alt='Degree'  className="max-w-full m-auto xl:p-5"/>
          </div>

          <div>
                  <p className="text-center text-sm" >
                     Easy status track for your <br/> qurban and aqiqah
            </p>
          </div>
          </div>
        <div >
          <div className='xl:border-r-2'>

          <img src='cow.svg' alt='Animal'  className="max-w-full m-auto xl:p-5"/>
          </div>

          <div>
                  <p className="text-center text-sm">
                      Good quality meat and <br/> efficient distribution
            </p>
          </div>
          </div>
        <div >
          <div>

            <img src='work.svg' alt='Certification' className="max-w-full m-auto xl:p-5" />
        
          </div>

          <div>
                  <p className="text-center text-sm">
                      Online certification <br/> provided
            </p>
          </div>
              </div>
               </div>
      </>
  )
}

export default Services;