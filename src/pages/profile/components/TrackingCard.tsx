import TrackingConnector from "./TrackingConnector";

type trackingCardProps = {
    setShowOrderDetails: React.Dispatch<React.SetStateAction<boolean>>,
    ongoing: boolean
}

const TrackingCard = ({ setShowOrderDetails, ongoing }: trackingCardProps) => {
    return (
        <div className="p-5 bg-[#F7F8FA] mt-8">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <span className="font-bold text-[20px]">XK3-6J</span>
                    <div className="w-0 h-[44px] border-r-solid border-r border-r-black"></div>
                    <span className="font-bold text-[20px]">Aqiqah Goat / Whole</span>
                </div>
                <div className="flex gap-4 items-center">
                    <span className="font-bold text-[20px]">
                        RM 850.00
                    </span>
                    <div className="bg-[#E50022] text-white px-[12px] py-[4px] rounded-sm">
                        <span className="text-[12px] font-medium">Paid</span>
                    </div>
                </div>
            </div>
            <div className="flex gap-3 mt-4 items-center text-[#525252] text-[14px]">
                <span className="text-[12px]">
                    Order placed in 03/02/2024
                </span>
                <div className="w-0 h-[15px] border-r-solid border-r border-r-black"></div>
                <span className="text-[12px]">
                    Wilayah Persekutuan Kuala Lumpur, Setapak
                </span>
                <div className="w-0 h-[15px] border-r-solid border-r border-r-black"></div>
                <span className="text-[12px]">
                    Quantity: 7 portion
                </span>
            </div>
            <div className="px-4 py-2 bg-[#FFFEFE] mt-4">
                <div className="flex gap-2 items-center">
                    <span className="font-medium text-[16px]">Ready for distribution</span>
                    <span className="text-[14px] text-[#525252]">16/06/2024</span>
                </div>

                <div className="mt-4">
                    <TrackingConnector activeStep={ongoing ? 1 : 4} />
                </div>
            </div>
            <div className="flex justify-end cursor-pointer">
                <p className="text-[#53AFBE] text-xs mt-4" onClick={() => setShowOrderDetails(true)}>View order details</p>
            </div>
        </div>
    )
}

export default TrackingCard;
