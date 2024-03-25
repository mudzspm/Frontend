import { Link } from 'react-router-dom';
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar';
function NavBar() {
  return (
    <header className='shadow-lg right-0 bg-white dark:bg-gray-900 fixed w-full z-20  start-0 border-b border-gray-200 dark:border-gray-600'>
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
            </div>
          </div>
        </div>
      </div>
      <nav className=''>
        <div className='flex max-w-[94rem] mx-auto flex-wrap items-center justify-between p-3'>
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
              data-collapse-toggle='navbar-sticky'
              type='button'
              className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
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
            className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ml-auto mr-10'
            id='navbar-sticky'
          >
            <Menubar className='border-none text-xl'>
              <MenubarMenu>
                <MenubarTrigger className='text-xl bg-transparent hover:text-[#00ADB9] font-normal'>
                  <Link to='/'>Home</Link>
                </MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className='text-xl bg-transparent hover:text-[#00ADB9] font-normal'>
                  Package
                </MenubarTrigger>
                <MenubarContent className='flex flex-col items-center border-none bg-[#fafafa] top-5'>
                  <MenubarItem>
                    <Link to='#'>Qurban</Link>
                  </MenubarItem>
                  <MenubarItem>
                    <Link to='#'>Aqiqah</Link>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                  <MenubarCheckboxItem>
                    Always Show Bookmarks Bar
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem checked>
                    Always Show Full URLs
                  </MenubarCheckboxItem>
                  <MenubarSeparator />
                  <MenubarItem inset>
                    Reload <MenubarShortcut>⌘R</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem disabled inset>
                    Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem inset>Toggle Fullscreen</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem inset>Hide Sidebar</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Profiles</MenubarTrigger>
                <MenubarContent>
                  <MenubarRadioGroup value='benoit'>
                    <MenubarRadioItem value='andy'>Andy</MenubarRadioItem>
                    <MenubarRadioItem value='benoit'>Benoit</MenubarRadioItem>
                    <MenubarRadioItem value='Luis'>Luis</MenubarRadioItem>
                  </MenubarRadioGroup>
                  <MenubarSeparator />
                  <MenubarItem inset>Edit...</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem inset>Add Profile...</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
