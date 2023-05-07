import React, { useEffect, useState } from 'react';
import styles from './css/Item.module.css';
import { Link } from 'react-router-dom';
import AddToCartDialog from './AddToCartDialog';

const Item = ({ item, onCheck, onItemRender }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    onItemRender();
  }, [onItemRender]);

  const handleCheck = (e) => {
    onCheck(item.id, e.target.checked);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className={styles.item}>
      <div className={styles.itemImage}>
        <img src={item.cover} alt={item.name} />
      </div>
      <div className={styles.itemDetails}>
        <h3 className={styles.itemTitle}>
          <Link to={`/product/${item.id}`}>{item.name}</Link>
        </h3>
        <h4 className={styles.itemAuthor}>{item.author}</h4>
        <p className={styles.itemCategory}>{item.category}</p>
        <p className={styles.itemPrice}>{item.price.toFixed(2)} UAH</p>
        <div className={styles.itemCheckbox}>
          <input type="checkbox" onChange={handleCheck} />
          <span>Add to Cart</span>
        </div>
        {isDialogOpen && (
          <AddToCartDialog
            productName={item.name}
            onClose={handleCloseDialog}   />
            )}
          </div>
        </div>
        );
        };
export default Item;