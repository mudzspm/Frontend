import { ChevronLeft } from "lucide-react";

type TransactionDetailsProps = {
    setTransactionDetailsView: React.Dispatch<React.SetStateAction<boolean>>
}

const TransactionDetailsView = ({ setTransactionDetailsView }: TransactionDetailsProps) => {
    const invoiceData = {
        invoiceNumber: 'INV00001',
        invoiceDate: '03/03/2024',
        customer: {
            name: 'Khadijah Binti Mohd Amim',
            address: '10, Jalan Tangsi, Tasik Perdana, 50480 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur',
            email: 'khadijahamim@gmail.com',
            contactNumber: '+60 19-23456789',
        },
        paymentDetails: {
            paymentDate: '03/03/2024',
            paymentMethod: 'Online Banking - MayBank Berhad',
            status: 'Received',
        },
        orderDetails: [
            { description: 'Qurban Cattle / Portion', netPrice: 850.00, qty: 7 },
            { description: 'Qurban Buffalo / Portion', netPrice: 850.00, qty: 7 },
        ],
    };

    const getTotal = () => {
        return invoiceData.orderDetails.reduce((total, item) => total + item.netPrice * item.qty, 0);
    };
    return (
        <div className='bg-white w-[850px] p-10 shadow-xl border border-solid rounded-[0.813rem]  mb-2'>

            <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2 items-center cursor-pointer" onClick={() => setTransactionDetailsView(false)}>
                    <ChevronLeft size={16} color="#00ADB9" />
                    <p className="text-[#00ADB9] text-[12px]">
                        Return
                    </p>
                </div>
                <p className="text-[#C1272D] text-[12px]">
                    Download Invoice (PDF)
                </p>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-bold mb-2">Payment</h2>
                <p>{invoiceData.invoiceNumber}</p>
                <p className="text-[#A3A3A3]">Invoice Date: {invoiceData.invoiceDate}</p>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-bold mb-2">Customer</h2>
                <div className="flex gap-6 justify-between">
                    <div className="w-[60%]">
                        <div className="mb-4">
                            <p className="text-[#A3A3A3] text-[12px]">Name</p>
                            <p>Khadijah Binti Mohd Amim</p>
                        </div>
                        <div className="mb-4">
                            <p className="text-[#A3A3A3] text-[12px]">Billing Address</p>
                            <p>
                                10, Jalan Tangsi, Tasik Perdana, 50480 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur
                            </p>
                        </div>
                        <div className="mb-4">
                            <p className="text-[#A3A3A3] text-[12px]">Email</p>
                            <p>Khadijahamim@gmail.com</p>
                        </div>
                        <div className="mb-4">
                            <p className="text-[#A3A3A3] text-[12px]">ContactNumber</p>
                            <p>+60 19-23456789</p>
                        </div>
                    </div>
                    <div>
                        <div className="mb-4">
                            <p className="text-[#A3A3A3] text-[12px]">Payment date</p>
                            <p>03/03/2024 </p>
                        </div>
                        <div className="mb-4">
                            <p className="text-[#A3A3A3] text-[12px]">Payment Method</p>
                            <p>
                                Online Banking
                                - MayBank Berhad
                            </p>
                        </div>
                        <div className="mb-4">
                            <p className="text-[#A3A3A3] text-[12px]">Status</p>
                            <p>Received</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-xl font-bold mb-2">Order Details</h2>
                <table className="min-w-full divide-y divide-gray-200 mb-4 mt-4">
                    <thead className="bg-[#F7F8FA]">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Description
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Net Price
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Qty.
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Total
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {invoiceData.orderDetails.map((item, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {item.description}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    RM {item.netPrice.toFixed(2)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {item.qty}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    RM {(item.netPrice * item.qty).toFixed(2)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="text-right text-xl font-medium">
                    Total: <span className="ml-4 text-[16px]">RM</span> {getTotal().toFixed(2)}
                </div>
            </div>
        </div>
    )
}

export default TransactionDetailsView;
