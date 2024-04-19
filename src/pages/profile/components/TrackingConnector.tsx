import orderReceivedIcon from '../icons/completedOrder.svg';

import orderIcon from '../icons/completedOrder.svg';

type connectorProps = {
    activeStep: number
}

const TrackingConnector = ({ activeStep }: connectorProps) => {
    return (
        <div>
            <div className="flex items-center min-h-[120px] ml-4">
                <div className={`w-[44px] h-[40px] rounded-[14px] flex justify-center items-center bg-[#00ADB9] relative`}>
                    <img src={orderReceivedIcon} className='w-[20px]' />
                    <span className='text-xs absolute top-12 left-[2px] min-w-[100px]'>Order Received</span>
                </div>
                <div className={`w-[150px] border-b border-b-[#00ADB9]`}>
                </div>
                <div className={`w-[44px] h-[40px] rounded-[14px] relative flex justify-center items-center ${activeStep < 1 ? 'bg-[#D9D9D9]' : 'bg-[#00ADB9]'}`}>
                    <img src={activeStep < 1 ? orderIcon : orderReceivedIcon} className='w-[20px]' />

                    <span className='text-xs absolute top-12 left-[2px] min-w-[100px]'>Processing Order</span>
                </div>
                <div className={`w-[150px] border-b ${activeStep == 0 ? 'border-b-[#E6E8EB]' : 'border-b-[#00ADB9]'}`}>
                </div>
                <div className={`w-[44px] h-[40px] rounded-[14px] relative flex justify-center items-center ${activeStep < 2 ? 'bg-[#D9D9D9]' : 'bg-[#00ADB9]'}`}>
                    <img src={activeStep < 2 ? orderIcon : orderReceivedIcon} className='w-[20px]' />
                    <span className='text-xs  absolute top-12 left-[2px] min-w-[100px]'>Order Execution</span>
                </div>
                <div className={`w-[150px] border-b ${activeStep == 0 ? 'border-b-[#E6E8EB]' : 'border-b-[#00ADB9]'}`}>
                </div>
                <div className={`w-[44px] h-[40px] rounded-[14px] relative flex justify-center items-center ${activeStep < 3 ? 'bg-[#D9D9D9]' : 'bg-[#00ADB9]'}`}>
                    <img src={activeStep < 3 ? orderIcon : orderReceivedIcon} className='w-[20px]' />
                    <span className='text-xs  absolute top-12 left-[2px] min-w-[100px]'>Order Complete</span>
                </div>
            </div>
        </div>
    )
}

export default TrackingConnector