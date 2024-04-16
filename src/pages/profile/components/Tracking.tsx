import { useState } from 'react'
import TrackingCard from './TrackingCard'
import OrderDetails from './OrderDetails';

// type TrackingProps = {
//     profileData: userProfile,
//     setProfile: React.Dispatch<React.SetStateAction<userProfile>>
// }

const Tracking = () => {
    const [selectedTrackingType, setSelectedTrackingType] = useState(0)
    const [showOrderDetails, setShowOrderDetails] = useState(false);
    return (
        !showOrderDetails ?
            <div className='bg-white min-w-[850px] p-10 shadow-xl border border-solid rounded-sm  mb-2'>
                <div className="bg-gradient-to-r from-[#00ADB9] to-[#5ed1da] h-[190px] flex justify-center flex-col gap-2 rounded-[12px] pl-4">
                    <p className='text-[#fff] font-bold text-[36px]'>Track</p>
                    <p className='text-[#fff] text-[14px]'>Looking for answers? Here are some of the frequently asked questions or send us a message.</p>
                </div>
                <div className='flex gap-2 bg-[#E6E8EB] p-[5px] rounded-[7px] w-[28%] mt-8 cursor-pointer'>
                    <div className={`p-[10px] w-[50%] rounded-[4px] ${selectedTrackingType == 0 ? 'bg-[#00ADB9] text-white font-bold' : 'bg-[#E6E8EB]'}`} onClick={() => setSelectedTrackingType(0)}>
                        <span className='text-[14px]'>Ongoing</span>
                    </div>
                    <div className={`p-[10px] w-[50%] rounded-[4px] ${selectedTrackingType == 1 ? 'bg-[#00ADB9] text-white font-bold' : 'bg-[#E6E8EB]'}`} onClick={() => setSelectedTrackingType(1)}>
                        <span className='text-[14px]'>Completed</span>
                    </div>
                </div>

                <div>
                    <div className='mt-4'>
                        <TrackingCard setShowOrderDetails={setShowOrderDetails} ongoing={selectedTrackingType == 0} />
                    </div>
                    <div className='mt-4'>
                        <TrackingCard setShowOrderDetails={setShowOrderDetails} ongoing={selectedTrackingType == 0} />
                    </div>
                    <div className='mt-4'>
                        <TrackingCard setShowOrderDetails={setShowOrderDetails} ongoing={selectedTrackingType == 0} />
                    </div>
                </div>
            </div>
            : <OrderDetails setShowOrderDetails={setShowOrderDetails} />
    )
}

export default Tracking