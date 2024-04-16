import { useState } from 'react'
import { TransactionHistory } from './TransactionHistory'
import TransactionDetailsView from './TransactionDetailsView'
import { Installments } from './Installments'

const Transaction = () => {
    const [transactionDetailsView, setTransactionDetailsView] = useState(false)
    const [selectedTrackingType, setSelectedTrackingType] = useState(0)
    return (
        <div>
            {
                !transactionDetailsView ? <div className='bg-white w-[850px] p-10 shadow-xl border border-solid rounded-sm  mb-2'>
                    <div className="bg-gradient-to-r from-[#00ADB9] to-[#5ed1da] h-[190px] flex justify-center flex-col gap-2 rounded-[12px] pl-4">
                        <p className='text-[#fff] font-bold text-[36px]'>Transaction</p>
                        <p className='text-[#fff] text-[14px]'>Looking for answers? Here are some of the frequently asked questions or send us a message.</p>
                    </div>
                    <div className='flex gap-2 bg-[#E6E8EB] p-[5px] rounded-[7px] w-[28%] mt-8 cursor-pointer'>
                        <div className={`p-[10px] w-[50%] rounded-[4px] ${selectedTrackingType == 0 ? 'bg-[#00ADB9] text-white font-bold' : 'bg-[#E6E8EB]'}`} onClick={() => setSelectedTrackingType(0)}>
                            <span className='text-[14px]'>History</span>
                        </div>
                        <div className={`p-[10px] w-[50%] rounded-[4px] ${selectedTrackingType == 1 ? 'bg-[#00ADB9] text-white font-bold' : 'bg-[#E6E8EB]'}`} onClick={() => setSelectedTrackingType(1)}>
                            <span className='text-[14px]'>Installment</span>
                        </div>
                    </div>
                    <div>
                        {selectedTrackingType == 0 && <TransactionHistory setTransactionDetailsView={setTransactionDetailsView} />}
                        {selectedTrackingType == 1 && <Installments />}
                    </div>
                </div> :
                    <TransactionDetailsView setTransactionDetailsView={setTransactionDetailsView} />
            }
        </div>
    )
}

export default Transaction