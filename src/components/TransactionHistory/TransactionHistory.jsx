import css from './TransactionHistory.module.css'

export const TransactionHistory = ({ item }) => {
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                    <th>Tupe</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {item.map(transaction => (
                    <tr key={transaction.id}>
                        <td>{transaction.type}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        
    );
};