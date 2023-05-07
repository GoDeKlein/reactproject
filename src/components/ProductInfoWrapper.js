import React from 'react';
import { useParams } from 'react-router-dom';
import ProductInfo from './ProductInfo';

function ProductInfoWrapper({ items, handleCommentSubmit }) {
    const { id } = useParams();
    const product = items.find((item) => item.id === parseInt(id));
    return (
      <ProductInfo
        product={product}
        handleCommentSubmit={handleCommentSubmit}
      />
    );
  }

export default ProductInfoWrapper;