interface SupportCardProps {
  image: string;
}

const SupportCard = ({ image }: SupportCardProps) => {
  return (
    <div className='max-w-[15.813rem] h-[21.5rem] rounded-[1.25rem] drop-shadow-lg'>
      <img
        src={image}
        alt='Animal'
        className='bg-cover object-cover max-h-full max-w-full'
      />
    </div>
  );
};
export default SupportCard;
