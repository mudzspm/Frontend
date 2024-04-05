import { ChevronLeft } from "lucide-react";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

import AnimalIcon from '../icons/animal.png';
import VerticleTimeLine from "./VerticalTimeLine";

type OrderDetailsProps = {
    setShowOrderDetails: React.Dispatch<React.SetStateAction<boolean>>
}

const OrderDetails = ({ setShowOrderDetails }: OrderDetailsProps) => {
    // Dummy data for the sake of this example
    const orderDetails = {
        orderPlacedOn: '03/03/2024',
        performBy: '07/06/2024',
        location: 'Wilayah Persekutuan Kuala Lumpur, Setapak',
        type: 'Qurban Buffalo / Portion',
        price: 'RM 5950.00',
        status: 'Paid',
        paymentMethod: 'Online Banking - Installment',
        orderID: 'XK4-5J',
        portions: 7,
        participants: [
            {
                name: 'test',
                icNumber: 'test',
                qty: 123
            },
            {
                name: 'test',
                icNumber: 'test',
                qty: 123
            },
            {
                name: 'test',
                icNumber: 'test',
                qty: 123
            }
        ],
    };

    return (
        <div className='bg-white min-w-[850px] p-10 shadow-xl border border-solid rounded-sm  mb-2'>
            <h1 className="text-2xl font-bold text-gray-700 mb-2">Track Qurban and Aqiqah</h1>
            <p className="mb-4">Get updated on the latest process</p>

            <div className="flex gap-2 mt-8 cursor-pointer" onClick={() => setShowOrderDetails(false)}>
                <ChevronLeft color="#00ADB9" />
                <p className="text-[14px] text-[#00ADB9]">Return</p>
            </div>

            <div className="flex gap-4 mt-4">
                <div className="bg-white mb-4 flex gap-4 w-[25%]">
                    <img className="w-full rounded mb-4" src={AnimalIcon} alt="Qurban Buffalo" />
                </div>
                <div className="w-[75%]">
                    <div className="flex justify-between w-full pl-4">
                        <div>
                            <p className="font-bold text-xl mb-2">Order</p>
                            <p className="font-bold text-xl mb-2">{orderDetails.orderID}</p>
                        </div>
                    </div>
                    <div className="flex justify-between w-full pl-4 mt-10">
                        <p className="font-medium">{orderDetails.type}</p>
                        <p className="font-medium">x 7 portions</p>
                    </div>
                </div>
            </div>

            <div className="flex">
                <div className="w-[30%]">
                    <p className="text-gray-600 text-sm mb-2">Order placed in</p>
                    <p className="text-[14px]">{orderDetails.orderPlacedOn}</p>
                </div>
                <div className="w-[30%]">
                    <p className="text-gray-600 text-sm mb-2">Perform by</p>
                    <p className="text-[14px]">{orderDetails.performBy}</p>
                </div>
                <div className="w-[40%]">
                    <p className="text-gray-600 text-sm mb-2">Location of Qurban</p>
                    <p className="text-[14px]">{orderDetails.location}</p>
                </div>
            </div>

            <div className="flex mt-8 items-center">
                <div className="w-[30%]">
                    <p className="text-gray-600 text-sm mb-2">Price</p>
                    <p className="text-[14px]"> {orderDetails.price}</p>
                </div>
                <div className="w-[30%]">
                    <p className="text-gray-600 text-sm mb-2">Status of payment</p>
                    <p className="text-[14px]">{orderDetails.status}</p>
                </div>
                <div className="w-[40%]">
                    <p className="text-gray-600 text-sm mb-4">Payment method</p>
                    <p className="text-[14px]">{orderDetails.paymentMethod}</p>
                </div>
            </div>

            <div className="mt-4">
                <p className="text-[#00ADB9] text-[14px] cursor-pointer">Download E-Certificate</p>
            </div>

            <Tabs style="underline" className="mt-10">
                <Tabs.Item active title="Order Timeline">
                    <div className="mb-6 mt-8">
                        <h3 className="text-xl font-bold text-gray-700 mb-2">Order Timeline</h3>
                        <VerticleTimeLine activeStep={1} />
                    </div>
                </Tabs.Item>
                <Tabs.Item title="Particiapnts">
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full">
                            <thead className="bg-[#EFEFEF]">
                                <tr>
                                    <th className="px-4 py-2 text-left text-gray-600">No.</th>
                                    <th className="px-4 py-2 text-left text-gray-600">Name</th>
                                    <th className="px-4 py-2 text-left text-gray-600">IC Number</th>
                                    <th className="px-4 py-2 text-left text-gray-600">Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderDetails.participants.map((participant, index) => (
                                    <tr key={index} className="bg-white border-b">
                                        <td className="px-4 py-2">{index + 1}</td>
                                        <td className="px-4 py-2">{participant.name}</td>
                                        <td className="px-4 py-2">{participant.icNumber}</td>
                                        <td className="px-4 py-2">{participant.qty} Portions</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Tabs.Item>
            </Tabs>
        </div>
    );
};

export default OrderDetails;
