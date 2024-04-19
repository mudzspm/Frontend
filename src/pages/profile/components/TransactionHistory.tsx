import TransactionRow from "./TransactionRow"

type TransactionHistoryProps = {
    setTransactionDetailsView: React.Dispatch<React.SetStateAction<boolean>>
}

export const TransactionHistory = ({ setTransactionDetailsView }: TransactionHistoryProps) => {
    return (
        <div className="mt-4">
<div className="flex justify-between">
            <p className="font-medium text-[20px]">Past Transactions</p>
<p className="items-center flex gap-1 text-sm">
    <span>
        <img src='filter.svg' alt="" />
    </span>
    Filter
</p>
</div>

            <div className="mt-8">
                <TransactionRow setTransactionDetailsView={setTransactionDetailsView} />
                <TransactionRow setTransactionDetailsView={setTransactionDetailsView} />
                <TransactionRow setTransactionDetailsView={setTransactionDetailsView} />
                <TransactionRow setTransactionDetailsView={setTransactionDetailsView} />
                <TransactionRow setTransactionDetailsView={setTransactionDetailsView} />
                <TransactionRow setTransactionDetailsView={setTransactionDetailsView} />
                <TransactionRow setTransactionDetailsView={setTransactionDetailsView} />
                <TransactionRow setTransactionDetailsView={setTransactionDetailsView} />
            </div>
        </div>
    )
}