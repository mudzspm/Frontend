import { Button } from "@/components/ui/button";



const OTP = () => {
  return (
    <>
    
    <section className="grid grid-cols-2 gap-2">
    {/* image section ------------------------------ */}

<div className="relative h-fit"
style={{
    backgroundImage:
    'linear-gradient(180.05deg, rgba(0, 173, 185, 0.64) 42.88%, rgba(8, 64, 89, 0.64) 99.96%)'
}}
>
<img src="qurban--.png" alt="Qurban" 
className='mix-blend-overlay max-w-full'
/>
<div className="absolute top-[38%] left-[30%] ">
<h3 className="font-bold text-5xl text-[#FFFFFF] leading-[3.6rem]">
QURBAN & AQIQAH
</h3>
<h1 className="font-bold text-[5.625rem] text-[#084059] leading-[6.733rem]">
Now Easier
</h1>
</div>

</div>

{/* Form section ------------------------- */}

<div className="m-auto ">
    <img src="artboard.svg" alt='Art' />
<p className="mt-[3.688rem] text-[1.75rem] text-[#1A1A1A] font-bold">
Verify your account
</p>
<p className="text-xs text-[#000]">We will send you OTP via email</p>

<div id="otp" className="flex flex-row justify-center text-center  mt-9">
            <input className="font-bold text-2xl  rounded-l-[0.375rem] border-[#E4E4E7] h-[3.375rem] w-[3.125rem] text-center form-control  focus:ring-black focus-within:border-[#000] " type="text" id="first"  /> 
            <input className="font-bold text-2xl border-[#E4E4E7] h-[3.375rem] w-[3.125rem] text-center form-control focus:ring-black focus-within:border-[#000]" type="text" id="second"  /> 
            <input className="font-bold text-2xl border-[#E4E4E7] h-[3.375rem] w-[3.125rem] text-center form-control focus:ring-black focus-within:border-[#000]" type="text" id="third"  /> 
            
            <div className="rounded-full w-1 h-1 p-1 bg-[#09090B] justify-center text-center items-center m-6 "></div>
            <input className="font-bold text-2xl border-[#E4E4E7] h-[3.375rem] w-[3.125rem] text-center form-control focus:ring-black focus-within:border-[#000]" type="text" id="fourth" />
            <input className="font-bold text-2xl border-[#E4E4E7] h-[3.375rem] w-[3.125rem] text-center form-control focus:ring-black focus-within:border-[#000]" type="text" id="fifth"   /> 
            <input className="font-bold text-2xl rounded-r-[0.375rem] border-[#E4E4E7] h-[3.375rem] w-[3.125rem] text-center form-control focus:ring-black focus-within:border-[#000]" type="text" id="sixth"   />
            
                      </div>

                      <div className="mt-[1.3125rem] text-center">
    <p className="text-xs text-[#1A1A1A]">Didn’t receive code?    <span className="text-[#000] font-bold text-xs"> Re-send code </span></p>
</div>
<div className="mt-9">

  <Button size='xl' variant='login'
  style={{
    backgroundImage:'linear-gradient(180deg, #00ADB9 -305.94%, #084059 730.63%)',
  }}
  >Submit OTP</Button>
</div>
<div className="mt-7">
    <hr  className="w-[22.5rem] border-1 bg-[#E5E5E5]"/>
</div>

<div className="mt-7 text-center">
    <p className="text-xs text-[#1A1A1A] flex justify-center items-center gap-[0.563rem]"><span ><img src="arrowleft.svg" alt=""/> </span>Back to Sign up </p>
    <p className="mt-[11.605rem] text-xs text-[#666]">
    © DigitalQurban2024
    </p>
</div>


</div>





</section>
    
    
    </>
  )
}
export default OTP;