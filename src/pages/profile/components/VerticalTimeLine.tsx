interface TimelineItemProps {
  title: string;
  timestamp: string;
  isFirst: boolean;
  isLast: boolean;
}

const TimelineItem = ({
  title,
  timestamp,
  isFirst,
  isLast,
}: TimelineItemProps) => (
  <div className='relative pb-8'>
    {!isLast && (
      <span
        className='absolute top-4 left-4 -ml-px h-full w-0.5 bg-blue-600'
        aria-hidden='true'
      ></span>
    )}
    <div className='relative flex space-x-3'>
      <div>
        <span
          className={`${
            isFirst ? 'bg-green-500' : 'bg-blue-500'
          } h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white`}
        >
          {/* Icon placeholder: insert actual SVG or element here */}
          <svg
            className='h-5 w-5 text-white'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M5 13l4 4L19 7'
            />
          </svg>
        </span>
      </div>
      <div className='min-w-0 flex-1 pt-1.5 flex flex-col space-x-4'>
        <div>
          <p className='font-medium'>{title}</p>
          <p className='text-sm text-gray-500'>
            <time dateTime={timestamp}>{timestamp}</time>
          </p>
        </div>
      </div>
    </div>
  </div>
);

interface Iitems {
  items: { title: string; timestamp: string }[];
}

const Timeline = ({ items }: Iitems) => {
  return (
    <div className='bg-white px-4 py-5 rounded-lg'>
      <div className='flow-root'>
        <ul className='-mb-8'>
          {items.map(
            (
              item: { title: string; timestamp: string },
              index: number | string,
            ) => (
              <TimelineItem
                key={index}
                title={item?.title}
                timestamp={item.timestamp}
                isFirst={index === 0}
                isLast={index === items.length - 1}
              />
            ),
          )}
        </ul>
      </div>
    </div>
  );
};

const App = () => {
  const timelineData = [
    {
      title: 'Order Received',
      timestamp: '03/03/2024 5:23 pm',
    },
    {
      title: 'Processing Order',
      timestamp: '03/03/2024 5:23 pm',
    },
    {
      title: 'Order Execution',
      timestamp: '03/03/2024 5:23 pm',
    },
    {
      title: 'Order Complete',
      timestamp: '03/03/2024 5:23 pm',
    },
  ];

  return (
    <div className='App'>
      <Timeline items={timelineData} />
    </div>
  );
};

export default App;
