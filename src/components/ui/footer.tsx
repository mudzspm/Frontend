import { Button } from './button';

function Footer() {
  return (
    // <footer className='bg-[#0F405A] pt-52 pb-32'>
    //   <div className='max-w-[78.375rem] mx-auto font-bold flex justify-between mb-[30px]'>
    //     <div className='flex flex-col gap-12'>
    //       <h2 className='text-4xl text-white'>
    //         Having trouble with our service? <br /> Talk to us!
    //       </h2>
    //       <div className='flex'>
    //         <div className='flex flex-col p-4 gap-5 w-full'>
    //           <h2 className='text-xl text-white font-bold'>Quick links</h2>
    //           <ul className='flex flex-col text-[#A3A3A3] gap-[26px] font-normal'>
    //             <li>About us</li>
    //             <li>Portfolio</li>
    //             <li>Blog</li>
    //           </ul>
    //         </div>
    //         <div className='flex flex-col p-4 gap-5 w-full'>
    //           <h2 className='text-xl text-white font-bold'>Explore</h2>
    //           <ul className='flex flex-col text-[#A3A3A3] gap-[26px] font-normal'>
    //             <li>Pages</li>
    //             <li>Events</li>
    //             <li>Shop</li>
    //           </ul>
    //         </div>
    //         <div className='flex flex-col p-4 gap-5 w-full'>
    //           <h2 className='text-xl text-white font-bold'>Get in touch</h2>
    //           <ul className='flex flex-col text-[#A3A3A3] gap-[26px] font-normal'>
    //             <li>Locations</li>
    //             <li>Media</li>
    //             <li>Contact us</li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //     <div className='text-center text-[#A3A3A3] font-normal'>
    //       <img src='footer-logo.svg' alt='digi qurban' />
    //       <p>© All right reserved 2024 DigiQurban</p>
    //     </div>
    //   </div>

    //   <div className='max-w-[78.375rem] mx-auto flex justify-between'>
    //     <div className='flex gap-[10px] justify-normal'>
    //       <Button
    //         size='sm'
    //         className='bg-[#00ADB9] font-normal hover:bg-[#31a8b1]'
    //       >
    //         Log in Breeder
    //       </Button>
    //       <Button size='sm' className='bg-[#00ADB9] hover:bg-[#31a8b1]'>
    //         Log in Executor
    //       </Button>
    //     </div>
    //     <ul className='flex gap-3 mr-28'>
    //       <li>
    //         <a href='#'>
    //           <img src='fb.svg' alt='facebook' />
    //         </a>
    //       </li>
    //       <li>
    //         <a href='#'>
    //           <img src='instagram.svg' alt='instagram' />
    //         </a>
    //       </li>
    //       <li>
    //         <a href='#'>
    //           <img src='twitter.svg' alt='twitter' />
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className='border-t-[1px] mt-7 max-w-[78.375rem] mx-auto pt-7 flex'>
    //     <p className='pr-28 text-[#A3A3A3]'>
    //       Provident primis, incididunt nihil, voluptate vero fugiat laboris
    //       scelerisque lobortis labore aliquip, dis pretium cupidatat iure
    //       iaculis adipisicing aspernatur potenti voluptatibus omnis pharetra
    //       eugiat quod commodo nesciunt.
    //     </p>
    //     <ul className='flex text-[#A3A3A3] gap-[26px] font-normal w-full mr-28 justify-end'>
    //       <li>Policies</li>
    //       <li>Terms of use</li>
    //       <li>Privacy</li>
    //     </ul>
    //   </div>
    // </footer>

// pt-52 pb-32
    <div className='bg-[#0F405A] xl:py-[15.063rem] xl:px-[6rem] lg:py-[5.813rem] lg:px-[6rem] md:px-[6rem] px-10 '>
      <div className=' flex xl:flex-row lg:flex-row md:flex-row justify-between flex-wrap flex-col gap-4 pb-4 items-center border-b-[1px] mb-4 w-full'>
<div>
  <img src='logo.png' alt="Logo" />
</div>
<div>
 <p className='text-center text-[#A3A3A3] font-normal xl:text-xl lg:text-sm text-[0.688rem]'>
 © All right reserved 2024 DigiQurban
 </p>
</div>

<div>
<ul className='flex justify-end'>
          <li>
            <a href='#'>
              <img src='fb.svg' alt='facebook' />
            </a>
          </li>
          <li>
            <a href='#'>
              <img src='instagram.svg' alt='instagram' />
            </a>
          </li>
          <li>
            <a href='#'>
              <img src='twitter.svg' alt='twitter' />
            </a>
          </li>
        </ul>
</div>
      </div>
      {/* flex justify-evenly flex-wrap */}
      <div className=' flex justify-between flex-wrap'>
        <div className='grid grid-cols-3 xl:gap-40 lg:gap-30 gap-10'>

            <div className=''>
              <h2 className='xl:text-xl lg:text-base text-xs text-white font-bold'>Quick links</h2>
              <ul className='flex flex-col text-[#A3A3A3] gap-[26px] font-normal xl:text-base text-sm'>
                <li>About us</li>
                <li>Portfolio</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className=''>
              <h2 className='xl:text-xl lg:text-base text-xs text-white font-bold'>Explore</h2>
              <ul className='flex flex-col text-[#A3A3A3] gap-[26px] font-normal xl:text-base text-sm'>
                <li>Pages</li>
                <li>Events</li>
                <li>Shop</li>
              </ul>
            </div>
            <div className=''>
              <h2 className='xl:text-xl lg:text-base text-xs text-white font-bold '>Get in touch</h2>
              <ul className='flex flex-col text-[#A3A3A3] gap-[26px] font-normal xl:text-base text-sm'>
                <li>Locations</li>
                <li>Media</li>
                <li>Contact us</li>
              </ul>
            </div>
        </div>
            
 

            <div className=' '>
              <div className='flex gap-2 xl:flex-col lg:flex-col md:flex-col mt-4'>

              <Button size='sm'  variant='message'> Log in Breeder</Button>
              <Button size='sm'  variant='message'> Log in Executor</Button>
              </div>
              <ul className=' flex justify-between gap-3 text-[#A3A3A3] font-normal mt-[2.875rem] mb-5 xl:text-base text-sm'>
                <li>Policies</li>
                <li>Terms of use</li>
                <li>Privacy</li>
              </ul>
            </div>
          </div>

    </div>
  );
}

export default Footer;
