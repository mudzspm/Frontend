import { useState } from 'react';
import Gallery from './ImageGallery';
function FeedLotCard() {
  const [showGallery, setShowGallery] = useState(false);
  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

  return (
    <>
      <div
        onClick={() => setShowGallery(true)}
        className='relative flex flex-col gap-[15px] max-w-[21.5rem] p-5 border-[1px] border-[#A7E0EA] rounded-[10px] shadow-[0px_0px_6px_0px_#00ADB9] hover:shadow-[0px_0px_21px_0px_#00ADB9] transition-all cursor-pointer'
      >
        <img src='feedlot-image.png' alt='cow' />
        <div className='flex flex-col gap-1'>
          <h2 className='text-2xl font-semibold'>Kandang A</h2>
          <div className='flex items-center gap-1'>
            <img
              src='location.svg'
              className='block'
              width={9}
              height={13}
              alt='location'
            />
            <p className='text-xs font-light text-[#969696]'>
              AgroFarm KL, 1 Hampshire Rd, Singapore 219428
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-[10px] mt-4'>
          <div className='flex items-center gap-[5px]'>
            <img
              src='cow-image.svg'
              className='border-2 rounded-full border-black w-9 h-9'
              alt=''
            />
            <div className='flex flex-col'>
              <p className='text-xl font-medium'>Cattle</p>
              <p className='text-[10px] text-[#969696] leading-normal'>
                Average weight 100 KG
              </p>
            </div>
            <p className='ml-auto bg-[#00ADB9] text-white rounded-full py-[5px] px-[9px] text-xs max-w-[86px] w-full text-center'>
              Available
            </p>
          </div>

          <div className='flex items-center gap-[5px]'>
            <img
              src='beffalo.svg'
              className='border-2 rounded-full border-black w-9 h-9'
              alt=''
            />
            <div className='flex flex-col'>
              <p className='text-xl font-medium'>Buffalo</p>
              <p className='text-[10px] text-[#969696] leading-normal'>
                Average weight 100 KG
              </p>
            </div>
            <p className='ml-auto bg-[#C1272D] text-white rounded-full py-[5px] px-[9px] text-xs  max-w-[86px] w-full text-center'>
              Limited
            </p>
          </div>

          <div className='flex items-center gap-[5px]'>
            <img
              src='goat.svg'
              className='border-2 rounded-full border-black w-9 h-9'
              alt=''
            />
            <div className='flex flex-col'>
              <p className='text-xl font-medium'>Goat</p>
              <p className='text-[10px] text-[#969696] leading-normal'>
                Average weight 100 KG
              </p>
            </div>
            <p className='ml-auto bg-[#B3B3B3] text-white rounded-full py-[5px] px-[9px] text-xs  max-w-[86px] w-full text-center'>
              Sold Out
            </p>
          </div>
        </div>
      </div>
      <div
        onMouseLeave={() => setShowGallery(false)}
        className='absolute -bottom-[1000px]'
      >
        {showGallery && <Gallery images={images} />}
      </div>
    </>
  );
}

export default FeedLotCard;
