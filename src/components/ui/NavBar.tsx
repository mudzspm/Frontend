import { Link } from 'react-router-dom';
import { Dropdown, Navbar, Sidebar, CustomFlowbiteTheme } from 'flowbite-react';
import { useState } from 'react';

const customSideBar: CustomFlowbiteTheme['sidebar'] = {
  root: {
    inner: 'bg-transparent',
  },
  item: {
    base: 'text-xl',
  },
};

const customDropdown: CustomFlowbiteTheme['dropdown'] = {
  floating: {
    item: {
      base: 'hover:bg-transparent text-xl mb-5 px-3',
    },
  },
};

function NavigationBar() {
  const [show, setShow] = useState(false);

  const handleSideBar = () => setShow((prev) => !prev);

  return (
    <>
      <header
        className={`${
          show
            ? "before:opacity-25 before:content-[''] before:absolute before:bg-black before:w-full before:h-screen"
            : ''
        } shadow-lg right-0 bg-white dark:bg-gray-900 sticky w-full z-20  start-0 border-b border-gray-200 dark:border-gray-600 top-0`}
      >
        <div className='bg-[#0F405A] p-[5px] text-white hidden lg:block'>
          <div className='max-w-[71.3rem] mx-auto flex text-base font-normal 2xl:justify-between md:justify-around'>
            <div className='flex'>
              <img src='heart.svg' alt='heart' className='mr-1' />
              <p>Helping tomorrow</p>
            </div>
            <div className='flex gap-1'>
              <a
                href='mailto:info@digiqurban.org'
                className='border-r-[1px] border-[#8A8A8A] pr-3 inline-block'
              >
                Email: info@digiqurban.org
              </a>
              <a href='tel:1-800-885-885' className='inline-block pl-3'>
                Phone: 1-800-885-885
              </a>
            </div>
            <div className='flex gap-[18.8px]'>
              <p>Social network</p>
              <div className='flex items-center gap-6'>
                <a href='#' className='inline-block'>
                  <img src='facebook.svg' alt='facebook' />
                </a>
                <a href='#' className='inline-block'>
                  <img src='twiter.svg' alt='twitter' />
                </a>
                <a href='#' className='inline-block'>
                  <img src='yt.svg' alt='facebook' />
                </a>
                <a href='#' className='inline-block'>
                  <img src='insta.svg' alt='facebook' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <Navbar className='flex max-w-[94rem] mx-auto flex-wrap items-center justify-between p-3'>
          <Link
            to='#'
            className='flex items-center space-x-3 rtl:space-x-reverse'
          >
            <img src='digi-qurban.svg' alt='digi-qurban.svg' />
          </Link>
          <div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
            <Link
              to='#'
              className='flex items-center space-x-3 rtl:space-x-reverse mr-5'
            >
              <img src='cart.svg' className='h-6 w-6' alt='digi cart' />
            </Link>
            <Link
              to='#'
              className='flex items-center space-x-3 rtl:space-x-reverse'
            >
              <img src='user-detail.svg' className='h-8 w-8' alt='digi user' />
            </Link>

            <button
              onClick={handleSideBar}
              data-drawer-toggle='default-sidebar'
              type='button'
              className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500  md:hidden  '
              aria-controls='navbar-sticky'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='w-5 h-5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 17 14'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M1 1h15M1 7h15M1 13h15'
                />
              </svg>
            </button>
          </div>
          <div
            className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ml-auto mr-2'
            id='navbar-sticky'
          >
            <div className='flex md:order-2'>
              <Navbar.Collapse>
                <Link
                  className='hover:text-[#00ADB9] text-xl font-normal hover:bg-transparent'
                  to='/'
                >
                  Home
                </Link>
<div >
                <Dropdown
                  theme={customDropdown}
                  inline
                  label={<p className='text-xl font-normal '>Packages</p>}
                  className='rounded-none rounded-b-lg border-none px-4 py-2 mt-4 bg-[#f7f7f7]'
                >
                  <Link to='/qurban'>
                    <Dropdown.Item className='hover:text-[#00ADB9] text-xl font-normal'>
                      Qurban
                    </Dropdown.Item>
                  </Link>
                  <Link to='/aqiqa'>
                    <Dropdown.Item className=' hover:bg-transparent hover:text-[#00ADB9] text-xl font-normal'>
                      Aqiqah
                    </Dropdown.Item>
                  </Link>
                </Dropdown>

</div>

                <Link
                  className='hover:text-[#00ADB9] text-xl font-normal hover:bg-transparent'
                  to='/feedlot'
                >
                  FeedLot
                </Link>
                <div> 
                <Dropdown
                  theme={customDropdown}
                  inline
                  label={<p className='text-xl font-normal'>Information</p>}
                  className='rounded-none rounded-b-lg border-none px-4 py-2 mt-4 bg-[#f7f7f7]'
                >
                  <Dropdown.Item className='hover:text-[#00ADB9] text-xl font-normal hover:bg-transparent'>
                    About Us
                  </Dropdown.Item>
                  <Dropdown.Item className='hover:text-[#00ADB9] text-xl font-normal hover:bg-transparent'>
                    Yayasan Ar-Rahman
                  </Dropdown.Item>
                  <Dropdown.Item className='hover:text-[#00ADB9] text-xl font-normal hover:bg-transparent'>
                    Institute Ar-Rahman
                  </Dropdown.Item>
                  <Dropdown.Item className='hover:text-[#00ADB9] text-xl font-normal hover:bg-transparent'>
                    Contact Us
                  </Dropdown.Item>
                </Dropdown>
                </div>
              </Navbar.Collapse>
              <Navbar.Toggle />
            </div>
          </div>
        </Navbar>
      </header>

      <div
        id='drawer-backdrop'
        data-drawer-backdrop='true'
        className={` bg-transparent fixed bottom-0 w-72 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800 transform ${
          show ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-labelledby='drawer-bottom-label'
      >
        <button
          type='button'
          onClick={handleSideBar}
          data-drawer-hide='drawer-bottom-example'
          aria-controls='drawer-bottom-example'
          className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white'
        >
          <svg
            className='w-3 h-3'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 14 14'
          >
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
            />
          </svg>
          <span className='sr-only'>Close menu</span>
        </button>
        <Sidebar theme={customSideBar} className='bg-transparent'>
          <Sidebar.Items>
            <Sidebar.ItemGroup className='bg-transparent'>
              <Sidebar.Item href='#'>Home</Sidebar.Item>
              <Sidebar.Collapse className='text-xl' label='Packages'>
                <Sidebar.Item href='#'>Qurban</Sidebar.Item>
                <Sidebar.Item href='#'>Aqiqah</Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Item href='#'>FeedLot</Sidebar.Item>
              <Sidebar.Collapse label='Information'>
                <Sidebar.Item href='#'>About Us</Sidebar.Item>
                <Sidebar.Item href='#'>Yayasan Ar-Rahman</Sidebar.Item>
                <Sidebar.Item href='#'>Institute Ar-Rahman</Sidebar.Item>
                <Sidebar.Item href='#'>Contact Us</Sidebar.Item>
              </Sidebar.Collapse>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </>
  );
}

export default NavigationBar;
