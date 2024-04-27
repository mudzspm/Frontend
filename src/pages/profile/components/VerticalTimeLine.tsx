// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
const TimelineItem = ({ title, timestamp, isLast }) => (
  <div className='relative pb-8'>
    {!isLast && (
      <span
        className='absolute top-4 left-4 -ml-px h-full w-0.5 bg-[#00ADB9]'
        aria-hidden='true'
      ></span>
    )}
    <div className='relative flex space-x-3'>
      <div>
        <div className='bg-[#00ADB9] rounded-[14px] w-10 h-10'></div>
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
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-expect-error
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
