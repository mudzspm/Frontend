import { ChevronLeft } from 'lucide-react';
import { Tabs } from 'flowbite-react';
import AnimalIcon from '../icons/animal.png';
import VerticleTimeLine from './VerticalTimeLine';

type OrderDetailsProps = {
  setShowOrderDetails: React.Dispatch<React.SetStateAction<boolean>>;
};

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
        qty: 123,
      },
      {
        name: 'test',
        icNumber: 'test',
        qty: 123,
      },
      {
        name: 'test',
        icNumber: 'test',
        qty: 123,
      },
    ],
  };

  return (
    <div className='bg-white min-w-[850px] p-10 shadow-xl border border-solid rounded-sm  mb-2'>
      <h1 className='text-2xl font-bold text-gray-700 mb-2'>
        Track Qurban and Aqiqah
      </h1>
      <p className='mb-4'>Get updated on the latest process</p>

      <div
        className='flex gap-2 mt-8 cursor-pointer'
        onClick={() => setShowOrderDetails(false)}
      >
        <ChevronLeft color='#00ADB9' />
        <p className='text-[14px] text-[#00ADB9]'>Return</p>
      </div>

      <div className='flex gap-4 mt-4'>
        <div className='bg-white mb-4 flex gap-4 w-[25%]'>
          <img
            className='w-full rounded mb-4'
            src={AnimalIcon}
            alt='Qurban Buffalo'
          />
        </div>
        <div className='w-[75%]'>
          <div className='flex justify-between w-full pl-4'>
            <div>
              <p className='font-bold text-xl mb-2'>Order {orderDetails.orderID}</p>
            </div>
            <div className='rounded-[26px] px-6 py-[8px]  text-white bg-[#53AFBE] text-xs items-center justify-end'>completed</div>
          </div>
          <div className='flex justify-between mt-5 w-full pl-4 '>
            <p className='text-xl font-semibold'>{orderDetails.type}</p>
            <p className='font-semibold mr-2'>x 7 portions</p>
          </div>
        </div>
      </div>

      <div className='flex'>
        <div className='w-[30%]'>
          <p className='text-[#525252] text-sm mb-2'>Order placed in</p>
          <p className='text-[14px] font-medium text-[#000000]'>{orderDetails.orderPlacedOn}</p>
        </div>
        <div className='w-[30%]'>
          <p className='text-[#525252] text-sm mb-2'>Perform by</p>
          <p className='text-[14px] font-medium text-[#000000]'>{orderDetails.performBy}</p>
        </div>
        <div className='w-[40%]'>
          <p className='text-[#525252] text-sm mb-2'>Location of Qurban</p>
          <p className='text-[14px] font-medium text-[#000000]'>{orderDetails.location}</p>
        </div>
      </div>

      <div className='flex mt-8 items-center'>
        <div className='w-[30%]'>
          <p className='text-[#525252] text-sm mb-2'>Price</p>
          <p className='text-[14px] font-medium text-[#000000]'> {orderDetails.price}</p>
        </div>
        <div className='w-[30%]'>
          <p className='text-[#525252] text-sm mb-2'>Status of payment</p>
          <p className='text-[14px] font-medium text-[#000000]'>{orderDetails.status}</p>
        </div>
        <div className='w-[40%]'>
          <p className='text-[#525252] text-sm mb-4'>Payment method</p>
          <p className='text-[14px] font-medium text-[#000000]'>{orderDetails.paymentMethod}</p>
        </div>
      </div>

      <div className='mt-4'>
        <p className='text-[#00ADB9] text-[14px] cursor-pointer text-base font-medium'>
          Download E-Certificate
        </p>
      </div>

      <Tabs style='underline' className='mt-10 '>
        <Tabs.Item active title='Order Timeline' className='text-[#000000]'>
          <div className='mb-6 mt-8'>
            <h3 className='text-xl font-bold text-gray-700 mb-2'>
              Order Timeline
            </h3>
            <VerticleTimeLine />
          </div>
        </Tabs.Item>
        <Tabs.Item title='Particiapnts'>
          <div className='overflow-x-auto'>
            <table className='table-auto w-full'>
              <thead className='bg-[#EFEFEF]  rounded-[5px]'>
                <tr> 
                  <th className='px-4 py-2 text-left text-gray-600 rounded-[5px]'>No.</th>
                  <th className='px-4 py-2 text-left text-gray-600'>Name</th>
                  <th className='px-4 py-2 text-left text-gray-600 '>
                    IC Number
                  </th>
                  <th className='px-4 py-2 text-left text-gray-600 rounded-[5px]'>
                    Quantity
                  </th>
                </tr>
              </thead>
              <tbody>
                {orderDetails.participants.map((participant, index) => (
                  <tr key={index} className='bg-white border-b'>
                    <td className='px-4 py-2'>{index + 1}</td>
                    <td className='px-4 py-2'>{participant.name}</td>
                    <td className='px-4 py-2'>{participant.icNumber}</td>
                    <td className='px-4 py-2'>{participant.qty} Portions</td>
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
