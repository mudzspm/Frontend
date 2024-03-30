import Stepper from './Stepper';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const userJourneyContent = [
  {
    id: 1,
    title: 'Register an account',
    subtitle: 'Register an account for ease of process',
    image: 'step-image-1.png',
    link: '#',
  },
  {
    id: 2,
    title: 'Choose a package',
    subtitle: 'Register an account for ease of process',
    image: 'step-image-2.png',
    link: '#',
  },
  {
    id: 3,
    title: 'Akad and Pay',
    subtitle: 'Recite akad and proceed with payment',
    image: 'step-image-3.png',
    link: '#',
  },
  {
    id: 4,
    title: 'Track',
    subtitle: 'Track the process of your qurban and aqiqah',
    image: 'step-image-4.png',
    link: '#',
  },
  {
    id: 5,
    title: 'Settled!',
    subtitle: 'Register an account for ease of process',
    image: 'step-image-5.png',
    link: '#',
  },
];

function UserJourney() {
  return (
    <div className='rounded-[23px] p-14 shadow-[0px_4px_34px_0px_rgba(0,0,0,0.28)] flex flex-col items-center mb-[13.75rem]'>
      <h2 className='text-5xl text-[#084059] text-center font-black'>
        Start now in 5 easy steps
      </h2>
      <Stepper />
      <div className='flex gap-6 my-14 justify-center'>
        {userJourneyContent.map(({ id, title, subtitle, image, link }) => {
          return (
            <div
              key={id}
              className=' max-w-[200px] bg-[#EBEBEB] rounded-[17px] inline-flex flex-col gap-[10px] shadow-[0px_2px_17px_0px_rgba(8,64,89,0.38)] overflow-hidden'
            >
              <span className='inline-block'>
                <img src={image} alt='step-1' className='scale-110 bg-cover' />
              </span>
              <span className='px-2 flex flex-col gap-3 text-center pb-11'>
                <p className='text-[#00ADB9] text-base underline font-semibold'>
                  <Link to={link}>{title}</Link>
                </p>
                <p>{subtitle}</p>
              </span>
            </div>
          );
        })}
      </div>
      <Button size='sm' variant='outline'>
        Sign Up Now
      </Button>
    </div>
  );
}

export default UserJourney;
