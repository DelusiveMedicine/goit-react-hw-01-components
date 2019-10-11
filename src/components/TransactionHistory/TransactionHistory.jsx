import React from 'react';
import PropTypes from 'prop-types';
import TransactionHistoryItem from './TransactionHistoryItem';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  const { table, tableCell, tableHead } = styles;
  return (
    <table className={table}>
      <thead className={tableHead}>
        <tr>
          <th className={tableCell}>Type</th>
          <th className={tableCell}>Amount</th>
          <th className={tableCell}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          const { id, type, amount, currency } = item;
          return (
            <TransactionHistoryItem
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TransactionHistory;
