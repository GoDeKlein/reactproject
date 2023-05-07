import React, { useState } from 'react';
import styles from './css/NewItemForm.module.css';

const NewItemForm = ({ onAddItem }) => {
  const [newItem, setNewItem] = useState({
    id: '',
    name: '',
    author: '',
    category: '',
    cover: '',
    price: '',
    description: '',
  });

  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ ...newItem, id: parseInt(newItem.id), price: parseFloat(newItem.price) });
    setNewItem({
      id: '',
      name: '',
      author: '',
      category: '',
      cover: '',
      price: '',
      description: '',
    });
  };

  return (
    <form className={styles.newItemForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="id">ID:</label>
        <input type="number" name="id" id="id" value={newItem.id} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" value={newItem.name} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="author">Author:</label>
        <input type="text" name="author" id="author" value={newItem.author} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="category">Category:</label>
        <input type="text" name="category" id="category" value={newItem.category} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="cover">Cover URL:</label>
        <input type="text" name="cover" id="cover" value={newItem.cover} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="price">Price:</label>
        <input type="number" step="0.01" name="price" id="price" value={newItem.price} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="description">Description:</label>
        <textarea name="description" id="description" rows="4" value={newItem.description} onChange={handleChange} required></textarea>
      </div>
      <div className={styles.formGroup}>
        <button type="submit" className={styles.submitButton}>Add Item</button>
      </div>
    </form>
  );
};

export default NewItemForm;