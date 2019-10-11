import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistoryItem.module.css';

const TransactionHistoryItem = ({ type, amount, currency }) => {
  const { tableCell, tableBody } = styles;
  return (
    <tr className={tableBody}>
      <td className={tableCell}>{type}</td>
      <td className={tableCell}>{amount}</td>
      <td className={tableCell}>{currency}</td>
    </tr>
  );
};

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistoryItem;
