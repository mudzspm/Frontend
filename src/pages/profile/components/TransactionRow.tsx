import { ChevronRight } from 'lucide-react';
import transactionIcon from '../icons/transaction.png';

type TransactionRowProps = {
    setTransactionDetailsView: React.Dispatch<React.SetStateAction<boolean>>
}

const TransactionRow = ({ setTransactionDetailsView }: TransactionRowProps) => {
    return (
        <div className="flex pb-4 border-b-[#E6E6E6] border-b mt-4">
            <div className='w-[25%]'>
                <div className='flex gap-4'>
                    <img src={transactionIcon} />
                    <div>
                        <p className='text-[18px] font-medium'>Payment</p>
                        <p className='text-xs text-[#A3A3A3]'>03 December 2024</p>
                    </div>
                </div>
            </div>
            <div className='w-[25%] flex justify-center'>
                <div>
                    <p className='text-[18px] font-medium'>Qurban</p>
                    <p className='text-xs text-[#A3A3A3]'>ID: XK3-6J</p>
                </div>
            </div>
            <div className='w-[25%] flex justify-center'>
                <div>
                    <p className='text-[18px] font-medium'>**9985</p>
                    <p className='text-xs text-[#A3A3A3]'>Bank Islam</p>
                </div>
            </div>
            <div className='w-[25%] flex justify-center gap-4'>
                <div>
                    <p className='text-[18px] font-medium'>RM 850.00</p>
                    <p className='text-xs text-[#A3A3A3]'>Received</p>
                </div>
                <div className='flex items-center'>
                    <ChevronRight className='cursor-pointer' onClick={() => setTransactionDetailsView(true)} />
                </div>
            </div>
        </div>
    )
}

export default TransactionRow