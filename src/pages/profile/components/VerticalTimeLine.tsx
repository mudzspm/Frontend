const TimelineItem = ({ title, timestamp, isFirst, isLast }) => (
    <div className="relative pb-8">
        {!isLast && (
            <span
                className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-[#00ADB9]"
                aria-hidden="true"
            ></span>
        )}
        <div className="relative flex space-x-3">
            <div>
                <div className="bg-[#00ADB9] rounded-[14px] w-10 h-10"></div>
            </div>
            <div className="min-w-0 flex-1 pt-1.5 flex flex-col space-x-4">
                <div>
                    <p className="font-medium">{title}</p>
                    <p className="text-sm text-gray-500">
                        <time dateTime={timestamp}>{timestamp}</time>
                    </p>
                </div>
            </div>
        </div>
    </div>
);

const Timeline = ({ items }) => {
    return (
        <div className="bg-white px-4 py-5 rounded-lg">
            <div className="flow-root">
                <ul className="-mb-8">
                    {items.map((item, index) => (
                        <TimelineItem
                            key={index}
                            title={item.title}
                            timestamp={item.timestamp}
                            isFirst={index === 0}
                            isLast={index === items.length - 1}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

const App = () => {
    const timelineData = [
        {
            title: 'Order Received',
            timestamp: '03/03/2024 5:23 pm'
        },
        {
            title: 'Processing Order',
            timestamp: '03/03/2024 5:23 pm'
        },
        {
            title: 'Order Execution',
            timestamp: '03/03/2024 5:23 pm'
        },
        {
            title: 'Order Complete',
            timestamp: '03/03/2024 5:23 pm'
        }
    ];

    return (
        <div className="App">
            <Timeline items={timelineData} />
        </div>
    );
};

export default App;
