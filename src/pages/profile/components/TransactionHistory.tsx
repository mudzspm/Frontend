import TransactionRow from "./TransactionRow"

type TransactionHistoryProps = {
    setTransactionDetailsView: React.Dispatch<React.SetStateAction<boolean>>
}

export const TransactionHistory = ({ setTransactionDetailsView }: TransactionHistoryProps) => {
    return (
        <div className="mt-4">

            <p className="font-medium text-[20px]">Past Transactions</p>

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