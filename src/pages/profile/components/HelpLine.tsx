import { Button } from "@/components/ui/button";
import HelpLineItem from "./HelpLineItem";

const HelpLine = () => {
    return (
        <div className='bg-white w-[850px] p-10 shadow-xl border border-solid rounded-sm  mb-2'>

            <div className="bg-gradient-to-r from-[#00ADB9] to-[#5ed1da] h-[190px] flex justify-center flex-col gap-2 rounded-[12px] pl-4">
                <p className='text-[#fff] font-bold text-[36px]'>Help Center</p>
                <p className='text-[#fff] text-[14px]'>Looking for answers? Here are some of the frequently asked questions or send us a message.</p>
            </div>
            <div className="flex gap-4 mt-4 items-start">
                <HelpLineItem title="How can I add another favorite participants?">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </HelpLineItem>
                <HelpLineItem title="How can I add another favorite participants?">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </HelpLineItem>
            </div>
            <div className="flex gap-4 mt-4 items-start">
                <HelpLineItem title="How can I add another favorite participants?">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </HelpLineItem>
                <HelpLineItem title="How can I add another favorite participants?">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </HelpLineItem>
            </div>
            <div className="flex gap-4 mt-4 items-start">
                <HelpLineItem title="How can I add another favorite participants?">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </HelpLineItem>
                <HelpLineItem title="How can I add another favorite participants?">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </HelpLineItem>
            </div>
            <div className="flex gap-4 mt-4 items-start">
                <HelpLineItem title="How can I add another favorite participants?">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </HelpLineItem>
                <HelpLineItem title="How can I add another favorite participants?">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </HelpLineItem>
            </div>

            <div className="grid gap-[1.291rem] mt-[5rem]">

<div >
<h2 className="text-[2.457rem] text-[#09B1CB] font-bold">
Get in touch
</h2>
<p className="text-[0.717rem] text-[#3D565F] font-medium mt-[0.819rem]">
Do you want to know more or contact our sales department?
</p>
<div className="grid grid-cols-2 justify-center items-center max-w-full">
<div className="flex gap-6 mt-[3.264rem]">
    <div className="">
    <img src="notebook.svg" alt="NoteBook" className="max-w-full" />
    </div>
    <div>
        <h3 className="text-sm font-bold text-[#000]">
        Visit the Knowledge Base
        </h3>
        <p className="text-[3D565F] text-[0.819rem]">
        Browse customer support articles and step- <br/> by-  step instructions for specific features.
        </p>
    </div>

</div>
<div className="flex gap-6 mt-[2.569rem]" >
    <div className="">
    <img src="profile.svg" alt="NoteBook" className="max-w-full" />
    </div>
    <div>
        <h3 className="text-sm font-bold text-[#000]">
        Get in touch with Sales
        </h3>
        <p className="text-[3D565F] text-[0.819rem]">
        Let us talk about how we can help your <br/> enterprise.
        </p>
    </div>

</div>
</div>
</div>

{/* ---------------------form------------------------- */}

<div className="mt-[1.88rem]">

<form className="">
  
  <div className="grid md:grid-cols-2 md:gap-6">
  <div className="relative mt-2">
    <input type="text" 
    className=" text-[0.819rem] text-[#8EA4AC]  focus:ring-[#09B1CB] focus:border-transparent
    w-full h-[2.932rem] rounded-[0.438rem] border-[#CDE2E7] "
    placeholder="Your name" value=""/>
    <button type="button" data-hs-toggle-password='{
        "target": "#hs-toggle-password"
      }' className="absolute top-0 end-0 p-3.5 rounded-e-md">
     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
<path d="M13.3954 6.51185C13.3954 7.38057 13.0503 8.21371 12.436 8.82799C11.8217 9.44226 10.9886 9.78736 10.1199 9.78736C9.25113 9.78736 8.41799 9.44226 7.80371 8.82799C7.18943 8.21371 6.84433 7.38057 6.84433 6.51185C6.84433 5.64312 7.18943 4.80998 7.80371 4.1957C8.41799 3.58143 9.25113 3.23633 10.1199 3.23633C10.9886 3.23633 11.8217 3.58143 12.436 4.1957C13.0503 4.80998 13.3954 5.64312 13.3954 6.51185V6.51185ZM10.1199 12.244C8.59959 12.244 7.14159 12.8479 6.0666 13.9229C4.99162 14.9979 4.3877 16.4559 4.3877 17.9762H15.852C15.852 16.4559 15.2481 14.9979 14.1731 13.9229C13.0981 12.8479 11.6401 12.244 10.1199 12.244V12.244Z" stroke="#8EA4AC" stroke-width="1.63776" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </button>
  </div>
  <div className="relative mt-2">
    <input type="text" 
    className=" text-sm  focus:ring-[#09B1CB] focus:border-transparent
    w-full h-[2.932rem] rounded-[0.438rem] border-[#CDE2E7]"
    placeholder="Email" value=""/>
    <button type="button" data-hs-toggle-password='{
        "target": "#hs-toggle-password"
      }' className="absolute top-0 end-0 p-3.5 rounded-e-md">
     <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
<path d="M2.83594 7.33066L9.2969 11.638C9.56603 11.8175 9.88232 11.9134 10.2059 11.9134C10.5294 11.9134 10.8457 11.8175 11.1148 11.638L17.5758 7.33066M4.4737 16.3383H15.938C16.3724 16.3383 16.7889 16.1658 17.0961 15.8586C17.4032 15.5515 17.5758 15.1349 17.5758 14.7006V6.51178C17.5758 6.07742 17.4032 5.66085 17.0961 5.35371C16.7889 5.04657 16.3724 4.87402 15.938 4.87402H4.4737C4.03934 4.87402 3.62277 5.04657 3.31563 5.35371C3.00849 5.66085 2.83594 6.07742 2.83594 6.51178V14.7006C2.83594 15.1349 3.00849 15.5515 3.31563 15.8586C3.62277 16.1658 4.03934 16.3383 4.4737 16.3383Z" stroke="#8EA4AC" stroke-width="1.63776" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </button>
  </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6 mt-[1.228rem]">
  <div className="relative mt-2">
    <input type="text" 
    className=" text-[0.819rem] text-[#8EA4AC]  focus:ring-[#09B1CB] focus:border-transparent
     w-full h-[2.932rem] rounded-[0.438rem] border-[#CDE2E7]"
    placeholder="Phone" value=""/>
    <button type="button" data-hs-toggle-password='{
        "target": "#hs-toggle-password"
      }' className="absolute top-0 end-0 p-3.5 rounded-e-md">
     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M2.75 4.21002C2.75 3.77566 2.92255 3.35909 3.22969 3.05195C3.53683 2.74481 3.9534 2.57227 4.38776 2.57227H7.07368C7.24548 2.5724 7.41288 2.62655 7.5522 2.72707C7.69152 2.8276 7.79569 2.96939 7.84998 3.13238L9.07666 6.8116C9.13882 6.99859 9.13146 7.20171 9.05596 7.38371C8.98045 7.56571 8.84185 7.71438 8.66558 7.80245L6.81737 8.72778C7.72331 10.7328 9.32925 12.3388 11.3343 13.2447L12.2596 11.3965C12.3477 11.2202 12.4964 11.0816 12.6784 11.0061C12.8604 10.9306 13.0635 10.9233 13.2505 10.9854L16.9297 12.2121C17.0928 12.2664 17.2347 12.3707 17.3353 12.5102C17.4358 12.6497 17.4899 12.8173 17.4898 12.9892V15.6743C17.4898 16.1087 17.3173 16.5253 17.0101 16.8324C16.703 17.1395 16.2864 17.3121 15.8521 17.3121H15.0332C8.24959 17.3121 2.75 11.8125 2.75 5.0289V4.21002Z" stroke="#8EA4AC" stroke-width="1.63776" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </button>
  </div>
  <div className="relative mt-2">
    <input type="text" 
    className=" text-[0.819rem]  focus:ring-[#09B1CB] focus:border-transparent
     w-full h-[2.932rem] rounded-[0.438rem] border-[#CDE2E7]"
    placeholder="Company" value=""/>
    <button type="button" data-hs-toggle-password='{
        "target": "#hs-toggle-password"
      }' className="absolute top-0 end-0 p-3.5 rounded-e-md">
     <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
<path d="M2.83594 9.94218L4.4737 8.30442M4.4737 8.30442L10.2059 2.57227L15.938 8.30442M4.4737 8.30442V16.4932C4.4737 16.7104 4.55997 16.9187 4.71354 17.0722C4.86711 17.2258 5.07539 17.3121 5.29258 17.3121H7.74921M15.938 8.30442L17.5758 9.94218M15.938 8.30442V16.4932C15.938 16.7104 15.8517 16.9187 15.6982 17.0722C15.5446 17.2258 15.3363 17.3121 15.1191 17.3121H12.6625M7.74921 17.3121C7.96639 17.3121 8.17468 17.2258 8.32825 17.0722C8.48182 16.9187 8.56809 16.7104 8.56809 16.4932V13.2177C8.56809 13.0005 8.65437 12.7922 8.80794 12.6387C8.96151 12.4851 9.16979 12.3988 9.38697 12.3988H11.0247C11.2419 12.3988 11.4502 12.4851 11.6038 12.6387C11.7573 12.7922 11.8436 13.0005 11.8436 13.2177V16.4932C11.8436 16.7104 11.9299 16.9187 12.0835 17.0722C12.237 17.2258 12.4453 17.3121 12.6625 17.3121M7.74921 17.3121H12.6625" stroke="#8EA4AC" stroke-width="1.63776" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </button>
  </div>
  </div>
  <div className="mt-[1.228rem]">
    <input type="text" 
    className=" text-[0.819rem] text-[#8EA4AC]   focus:ring-[#09B1CB] focus:border-transparent 
    w-full h-[2.932rem] rounded-[0.438rem] border-[#CDE2E7]"
    placeholder="Subject" value=""/>
  </div>
  
  <textarea id="message"  className="mt-[1.228rem] block p-2.5 w-full text-[0.819rem] text-[#8EA4AC]  rounded-lg border border-[#CDE2E7]  focus:ring-[#09B1CB] focus:border-transparent" placeholder="Write something"></textarea>

  <div className="mt-[1.228rem]">

<Button variant='message' size='md'

>Send Message</Button>
</div>
</form>
</div>

</div>
        </div>

        
    )
}

export default HelpLine;