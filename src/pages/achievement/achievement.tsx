import AchievmentCard from '@/components/achievmentCard/achievmentCard';
import PageWrapper from '@/components/ui/PageWrapper';


export const Achievement = () => {
  return (
      <>
          <PageWrapper>
              <section>
                  <div className='bg-[#01ACBC] text-center py-[5.313rem]' >
                      <h2 className='xl:text-[3.188rem] lg:text-4xl md:text-3xl text-2xl font-bold text-[#F5F5F5]'>
                          Recognition & Achievement
                      </h2>
                  </div>

              </section>

              <div className='mt-[5.349rem] mb-[4.644rem] p-4'>
                  <div className='xl:flex-row flex items-center justify-center gap-[3.62rem] flex-col    '>
                      
              <AchievmentCard />
                  <AchievmentCard />
                  </div>
                
              </div>

             <div className='mt-[5.349rem] mb-[4.644rem] p-4'>
                  <div className='xl:flex-row flex items-center justify-center gap-[3.62rem] flex-col    '>
                      
              <AchievmentCard />
                  <AchievmentCard />
                  </div>
                
              </div>

              <div className='mt-[4.644rem] mb-[4.75rem] p-3'>
                  <div className='flex justify-center'>
                      <img src="record.png" alt="Record" />
                  </div>

                  <div className='mt-[3.285rem]'>
                      <div className='xl:flex-row flex justify-center gap-10 flex-col text-[#2B2B2B] font-medium text-[1.313rem] text-center' >
                          
                      <p >
                          2017, 2018, 2019, 2020: BIGGEST PARTICIPATION IN <br/>
THE 'VICTIMS' PROGRAM
                      </p>
                      <p>
                          2018: BIGGEST ATTENDANCE FOR 'AKIKAH' <br/>
                          
CEREMONY ORGANIZED IN ONE YEAR
                      </p>
                      </div>
                      <div className='xl:flex-row flex justify-center gap-10 flex-col text-[#2B2B2B] font-medium text-[1.313rem] text-center mt-[1.175rem]'>
                          
                      <p>
                          2020: BIGGEST NUMBER OF PARTICIPANTS <br/>
REGISTERED IN 'KORBAN' PROGRAM (IN 24 HOURS)
                      </p>
                      <p>
                          2020: THE FIRST 'AKIKAH' & 'VICTIM' ORGANIZATION <br/>
TO GET MS ISO 9001: 2015 (QUALITY MANAGEMENT <br/>
SYSTEM)
                      </p>
                      </div>
                      <div className='xl:flex-row flex justify-center gap-10 flex-col text-[#2B2B2B] font-medium text-[1.313rem] text-center mt-[1.175rem]'>
                          
                      <p>
                          2022: THE FIRST VICTIM AND AKIKAH SERVICES TO BE <br/>
RECOGNIZED BY SHARIAH COMPLIANCE
                      </p>
                      <p>
                          2022: THE FIRST VICTIM AND AKIKAH SERVICES TO BE <br/>
RECOGNIZED MS 1900:2014 (QUALITY MANAGEMENT <br/>
BASED ON SHARIAH)
                      </p>
                      </div>
                  </div>
              </div>
      </PageWrapper>
      </>
  )
}

export default Achievement;