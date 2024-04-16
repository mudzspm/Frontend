import { Button } from './ui/button';

function PortionCard() {
  return    (                                                                                           
    <div className='flex flex-col gap-[15px] max-w-[18.95rem] py-5 px-[18px] border-[1px] border-[#A7E0EA] rounded-[10px] hover:shadow-[0px_10px_21px_0px_rgba(0,0,0,0.25)] transition-all'>
      <div className='flex gap-[15px]'>
        <img src='dummyImage.png' alt='cow' />
        <div className='flex flex-col gap-1'>
          <p className='text-2xl font-semibold text-[#000]'>Cattle / Portion</p>
          <p className='flex gap-[6px]'>
            <img
              src='location.svg'
              className='block'
              width={13}
              height={13}
              alt='location'
            />
            <span className='block text-xs text-[#969696]'>Kandang A</span>
          </p>
        </div>
      </div>
      <p className='text-xs font-light text-[#969696]'>
        (Whole) Can be shared by 7 people with different niat. (Portion) Minimum
        one portion for one person.
      </p>
      <p className='text-xs'>
        <strong className='text-base text-[#000]'>RM 450</strong> per portion
      </p>
      <div className='flex p-2 rounded-[5px] border-[1px] items-center justify-between hover:border-[#53AFBE] hover:text-[#084059]'>
        <div className='flex items-center gap-2'>
          <Button
            className='w-[1.563rem] h-[1.563rem] p-2 text-[#53AFBE] border-[#53AFBE] items-center hover:bg-transparent hover:text-[#53AFBE] border-[1px]'
            variant='outline'
          >
            <span className='mb-[2px]'>

            -
            </span>
          </Button>
          <p className='font-semibold text-[#1E1E1E]'>01</p>
          <Button
            className=' w-6 h-6 p-1 font-semibold text-[#53AFBE] border-[#53AFBE] hover:bg-transparent items-center  hover:text-[#53AFBE] border-[1px] shadow-[0px_0px_2px_rgba(83, 175, 190, 0.53)]'
            variant='outline'
          >
            <span className='mb-[2px]'>
            +

            </span>
          </Button>
        </div>
        <p className='font-semibold text-2xl text-[#53AFBE] '>RM 450</p>
      </div>

      <Button size='sm' variant='outline' className='text-xl'>
        Add to cart
      </Button>
    </div>
  );
}

export default PortionCard;
