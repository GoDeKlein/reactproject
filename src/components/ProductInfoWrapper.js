import React, { useContext, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import ProductInfo from './ProductInfo';
import UserHistoryContext from './UserHistoryContext';

function ProductInfoWrapper({ items, handleCommentSubmit }) {
  const { id } = useParams();

  const product = useMemo(() => {
    return items.find((item) => item.id === parseInt(id));
  }, [id, items]);

  const { userHistory, addUserHistoryEntry } = useContext(UserHistoryContext);

  const addUniqueEntry = (entry) => {
    if (!userHistory.includes(entry)) {
      addUserHistoryEntry(entry);
    }
  };

  useEffect(() => {
    if (product) {
      const newEntry = `Visited product: ${product.name}`;
      addUniqueEntry(newEntry);
    }
  }, [product, addUserHistoryEntry, userHistory]);

  return (
    <ProductInfo
      product={product}
      handleCommentSubmit={handleCommentSubmit}
    />
  );
}

export default ProductInfoWrapper;