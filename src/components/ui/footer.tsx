function Footer() {
  return (
    <footer className='bg-[#0F405A]'>
      <div className=' mx-auto w-full max-w-screen-xl'>
        <div className='border-b-[0.8px]  border-[#01ACBC] text-white grid grid-cols-2  py-6 lg:py-8 md:grid-cols-4'>
          <div>
            <h2 className='mb-6 text-sm font-semibold  uppercase dark:text-white'>
              Quick links
            </h2>
            <ul className='font-normal'>
              <li className='mb-4'>
                <a href='#' className=' hover:underline'>
                  About us
                </a>
              </li>
              <li className='mb-4'>
                <a href='#' className='hover:underline'>
                  Portfolio
                </a>
              </li>
              <li className='mb-4'>
                <a href='#' className='hover:underline'>
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='mb-6 text-sm font-semibold uppercase dark:text-white'>
              Explore
            </h2>
            <ul className='font-normal'>
              <li className='mb-4'>
                <a href='#' className='hover:underline'>
                  Pages
                </a>
              </li>
              <li className='mb-4'>
                <a href='#' className='hover:underline'>
                  Events
                </a>
              </li>
              <li className='mb-4'>
                <a href='#' className='hover:underline'>
                  Shops
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='mb-6 text-sm font-semibold uppercase dark:text-white'>
              Get in touch
            </h2>
            <ul className='font-normal'>
              <li className='mb-4'>
                <a href='#' className='hover:underline'>
                  Locations
                </a>
              </li>
              <li className='mb-4'>
                <a href='#' className='hover:underline'>
                  Media
                </a>
              </li>
              <li className='mb-4'>
                <a href='#' className='hover:underline'>
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div className='text-white ml-auto flex flex-col gap-5'>
            <img
              src='logo.svg'
              alt='digi qurban'
              className='h-auto w-44 ml-auto'
            />

            <ul className='flex gap-3 justify-end'>
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
            <p>© All right reserved 2024 DigiQurban</p>
          </div>
        </div>
        <div className='py-6 text-white dark:bg-gray-700 md:flex md:items-center md:justify-between'>
          <p className='flex-1'>
            Provident primis, incididunt nihil, voluptate vero fugiat laboris
            scelerisque lobortis labore aliquip, dis pretium cupidatat iure
            iaculis adipisicing aspernatur potenti voluptatibus omnis pharetra
            eugiat quod commodo nesciunt.
          </p>
          <div className='flex self-start  mt-4 sm:justify-end md:mt-0 space-x-5 rtl:space-x-reverse flex-1'>
            <a href='#' className='hover:underline'>
              Policies
            </a>
            <a href='#' className='hover:underline'>
              Terms of use
            </a>
            <a href='#' className='hover:underline'>
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
