import Map from '@/components/map/map';
import PageWrapper from '@/components/ui/PageWrapper';

export const CountryImplementation = () => {
  return (
      <>
          <PageWrapper>
              <section className='bg-[#07ABB71A] text-center justify-center flex' >
                  <h2 className='xl:text-5xl lg:text-4xl md:text-4xl sm:text-3xl text-2xl font-bold mt-[5.563rem] mb-[2.938rem] p-3'>
                    <span className='text-[#01ACBC]'>163,216 </span>   Heads of Livestock Slaughter Have Been <br/>
                      Benefited by Our Brothers in Need in
                      <br />
                      
                      <span className='text-[#01ACBC]'> 42 Countries
                          
                      </span>
</h2>
              </section>

              <Map />      
    </PageWrapper>
      
      
      </>
  )
}
export default CountryImplementation;