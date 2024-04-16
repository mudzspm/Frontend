

const PriceCard = () => {
  return (
  <>
  <div className="mt-[4.125rem] w-[748px] ">
  

<div className="flex items-center gap-2 ">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="mb-[0.563rem]">
<g clip-path="url(#clip0_1509_23851)">
<path d="M7.50033 18.3337C7.96056 18.3337 8.33366 17.9606 8.33366 17.5003C8.33366 17.0401 7.96056 16.667 7.50033 16.667C7.04009 16.667 6.66699 17.0401 6.66699 17.5003C6.66699 17.9606 7.04009 18.3337 7.50033 18.3337Z" stroke="black" stroke-opacity="0.87" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.6663 18.3337C17.1266 18.3337 17.4997 17.9606 17.4997 17.5003C17.4997 17.0401 17.1266 16.667 16.6663 16.667C16.2061 16.667 15.833 17.0401 15.833 17.5003C15.833 17.9606 16.2061 18.3337 16.6663 18.3337Z" stroke="black" stroke-opacity="0.87" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M0.833008 0.833008H4.16634L6.39967 11.9913C6.47588 12.375 6.6846 12.7196 6.9893 12.9649C7.29399 13.2102 7.67526 13.3405 8.06634 13.333H16.1663C16.5574 13.3405 16.9387 13.2102 17.2434 12.9649C17.5481 12.7196 17.7568 12.375 17.833 11.9913L19.1663 4.99967H4.99967" stroke="black" stroke-opacity="0.87" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1509_23851">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
<p className="mb-[0.563rem] text-xl text-[#000000] font-semibold"> Cart</p>
</div>

  <div className=" mt-[1.875rem] border-b border-[#E6E6E6]">
        <div className="flex justify-between mb-[0.563rem]">

        <p className="text-base font-normal text-[#000000DE]">
        Your Cart
        </p>
        <p className="text-base font-normal text-[#000000DE] mr-11">
        Total (RM)
        </p>
        </div>
    </div>

    <div className=" flex items-center gap-3 p-4 mt-8 ">
    <input type="checkbox" id="some_id" className="
  
  appearance-none w-4 h-4 border-2 border-[#53AFBE] rounded-sm bg-white
  mt-1
  checked:bg-[#00ADB9] checked:border-0
  focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100
  disabled:border-steel-400 disabled:bg-steel-400
"
/>
<span className="text-base text-[#000] font-semibold"> Qurban</span>
    </div>


  <div className="border-b flex flex-row items-center gap-3 p-4 mt-6">
    <input type="checkbox" id="some_id" className=" 
  appearance-none w-4 h-4 border-2 border-[#53AFBE] rounded-sm bg-white
  mt-1
  checked:bg-[#00ADB9] checked:border-0
  focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100
  disabled:border-steel-400 disabled:bg-steel-400
"
/>

<div className="max-w-[68px] basis-1/4 h-15">

<img src="qurban--.svg" alt="Qurban" className="max-w-full"/>
</div>

<div className="flex flex-col basis-1/2 gap-1 ">

<p className="text-base font-normal text-[#000000]">
Qurban Buffalo / Portion
</p>
<p className="text-xs text-[#000000] font-normal">
Kandang Pak Samad
</p>
<p className="text-xs text-[#000000] font-normal">
  RM 500
</p>
</div>


<div className=" flex basis-1/4 gap-2 items-center justify-end">
<button type="button" id="decrement-button"  className=" dark:border-[#53AFBE]  inline-flex items-center justify-center border border-[#53AFBE] rounded h-5 w-5 focus:ring-[#53AFBE] dark:focus:ring-[#53AFBE] focus:ring-2 focus:outline-none">
            <svg className=" text-[#53AFBE] dark:text-white" aria-hidden="true" width="12" height="13" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
            </svg>
        </button>
  <p className="text-[0.938] text-[#1E1E1E] font-semibold">1</p>
  <button type="button" id="increment-button"  className="   dark:border-[#53AFBE]  inline-flex items-center justify-center border border-[#53AFBE] rounded h-5 w-5 focus:ring-[#53AFBE] dark:focus:ring-[#53AFBE] focus:ring-2 focus:outline-none">
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
<rect y="5.31738" width="12" height="2" fill="#53AFBE"/>
<rect x="7" y="0.317383" width="12" height="2" transform="rotate(90 7 0.317383)" fill="#53AFBE"/>
</svg>
        </button>
</div>

<div className="flex basis-1/4 justify-end gap-2 ">
  <p className="text-xl text-[#000000]">6000.00</p>
  <button>
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
<path d="M11.1429 14.1507C11.1429 15.0674 10.3714 15.8174 9.42857 15.8174H2.57143C1.62857 15.8174 0.857142 15.0674 0.857142 14.1507V4.15072H11.1429V14.1507ZM9.42857 5.81738H2.57143V14.1507H9.42857V5.81738ZM3 1.65072L3.85714 0.817383H8.14286L9 1.65072H12V3.31738H0V1.65072H3Z" fill="#A3A3A3"/>
</svg>
  </button>
</div>

    </div>
    <div className="border-b flex flex-row items-center gap-3 p-4 mt-6">
    <input type="checkbox" id="some_id" className=" 
  appearance-none w-4 h-4 border-2 border-[#53AFBE] rounded-sm bg-white
  mt-1
  checked:bg-[#00ADB9] checked:border-0
  focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100
  disabled:border-steel-400 disabled:bg-steel-400
"
/>

<div className="max-w-[68px] basis-1/4 h-15">

<img src="qurban--.svg" alt="Qurban" className="max-w-full"/>
</div>

<div className="flex flex-col basis-1/2 gap-1 ">

<p className="text-base font-normal text-[#000000]">
Qurban Buffalo / Portion
</p>
<p className="text-xs text-[#000000] font-normal">
Kandang Pak Samad
</p>
<p className="text-xs text-[#000000] font-normal">
  RM 500
</p>
</div>


<div className=" flex basis-1/4 gap-2 items-center justify-end">
<button type="button" id="decrement-button"  className=" dark:border-[#53AFBE]  inline-flex items-center justify-center border border-[#53AFBE] rounded h-5 w-5 focus:ring-[#53AFBE] dark:focus:ring-[#53AFBE] focus:ring-2 focus:outline-none">
            <svg className=" text-[#53AFBE] dark:text-white" aria-hidden="true" width="12" height="13" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
            </svg>
        </button>
  <p className="text-[0.938] text-[#1E1E1E] font-semibold">1</p>
  <button type="button" id="increment-button"  className="   dark:border-[#53AFBE]  inline-flex items-center justify-center border border-[#53AFBE] rounded h-5 w-5 focus:ring-[#53AFBE] dark:focus:ring-[#53AFBE] focus:ring-2 focus:outline-none">
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
<rect y="5.31738" width="12" height="2" fill="#53AFBE"/>
<rect x="7" y="0.317383" width="12" height="2" transform="rotate(90 7 0.317383)" fill="#53AFBE"/>
</svg>
        </button>
</div>

<div className="flex basis-1/4 justify-end gap-2 ">
  <p className="text-xl text-[#000000]">6000.00</p>
  <button>
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
<path d="M11.1429 14.1507C11.1429 15.0674 10.3714 15.8174 9.42857 15.8174H2.57143C1.62857 15.8174 0.857142 15.0674 0.857142 14.1507V4.15072H11.1429V14.1507ZM9.42857 5.81738H2.57143V14.1507H9.42857V5.81738ZM3 1.65072L3.85714 0.817383H8.14286L9 1.65072H12V3.31738H0V1.65072H3Z" fill="#A3A3A3"/>
</svg>
  </button>
</div>

    </div>
    <div className=" flex items-center gap-3 p-4 mt-8 ">
    <input type="checkbox" id="some_id" className="
  
  appearance-none w-4 h-4 border-2 border-[#53AFBE] rounded-sm bg-white
  mt-1
  checked:bg-[#00ADB9] checked:border-0
  focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100
  disabled:border-steel-400 disabled:bg-steel-400
"
/>
<span className="text-base text-[#000] font-semibold"> Aqiqah</span>
    </div>


  <div className="border-b flex flex-row items-center gap-3 p-4 mt-6">
    <input type="checkbox" id="some_id" className=" 
  appearance-none w-4 h-4 border-2 border-[#53AFBE] rounded-sm bg-white
  mt-1
  checked:bg-[#00ADB9] checked:border-0
  focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100
  disabled:border-steel-400 disabled:bg-steel-400
"
/>

<div className="max-w-[68px] basis-1/4 h-15">

<img src="qurban--.svg" alt="Qurban" className="max-w-full"/>
</div>

<div className="flex flex-col basis-1/2 gap-1 ">

<p className="text-base font-normal text-[#000000]">
Qurban Buffalo / Portion
</p>
<p className="text-xs text-[#000000] font-normal">
Kandang Pak Samad
</p>
<p className="text-xs text-[#000000] font-normal">
  RM 500
</p>
</div>


<div className=" flex basis-1/4 gap-2 items-center justify-end">
<button type="button" id="decrement-button"  className=" dark:border-[#53AFBE]  inline-flex items-center justify-center border border-[#53AFBE] rounded h-5 w-5 focus:ring-[#53AFBE] dark:focus:ring-[#53AFBE] focus:ring-2 focus:outline-none">
            <svg className=" text-[#53AFBE] dark:text-white" aria-hidden="true" width="12" height="13" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
            </svg>
        </button>
  <p className="text-[0.938] text-[#1E1E1E] font-semibold">1</p>
  <button type="button" id="increment-button"  className="   dark:border-[#53AFBE]  inline-flex items-center justify-center border border-[#53AFBE] rounded h-5 w-5 focus:ring-[#53AFBE] dark:focus:ring-[#53AFBE] focus:ring-2 focus:outline-none">
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
<rect y="5.31738" width="12" height="2" fill="#53AFBE"/>
<rect x="7" y="0.317383" width="12" height="2" transform="rotate(90 7 0.317383)" fill="#53AFBE"/>
</svg>
        </button>
</div>

<div className="flex basis-1/4 justify-end gap-2 ">
  <p className="text-xl text-[#000000]">6000.00</p>
  <button>
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
<path d="M11.1429 14.1507C11.1429 15.0674 10.3714 15.8174 9.42857 15.8174H2.57143C1.62857 15.8174 0.857142 15.0674 0.857142 14.1507V4.15072H11.1429V14.1507ZM9.42857 5.81738H2.57143V14.1507H9.42857V5.81738ZM3 1.65072L3.85714 0.817383H8.14286L9 1.65072H12V3.31738H0V1.65072H3Z" fill="#A3A3A3"/>
</svg>
  </button>
</div>

    </div>
    </div>
   
  </>
  )
}
export default PriceCard