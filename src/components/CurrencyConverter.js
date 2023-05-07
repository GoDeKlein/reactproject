import React from 'react';

const CurrencyConverter = ({ amount, rate, currency }) => {
  const convertedAmount = (amount * rate).toFixed(2);
  return (
    <div>
      {amount} {currency} = {convertedAmount} {currency === 'UAH' ? 'USD' : 'UAH'}
    </div>
  );
};

export default CurrencyConverter;
