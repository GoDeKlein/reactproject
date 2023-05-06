import React from 'react';
import './css/Header.css';

const Header = ({ itemCount, displayedItemCount }) => {
  return (
    <header className="header">
      <h1>Comic book universe</h1>
      <div>
        <span className="item-count">Items in cart: {itemCount}</span>
        <span className="displayed-item-count">
          Displayed items: {displayedItemCount}
        </span>
      </div>
    </header>
  );
};

export default Header;
