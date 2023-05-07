import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet, useLocation } from 'react-router-dom';

import { useParams } from 'react-router';

import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import Menu from './components/menu';
import CurrencyConverter from './components/CurrencyConverter';
import ProductInfosWrapper from './components/ProductInfoWrapper';    




function AppHeader({ itemCount, displayedItemCount }) {
  const location = useLocation();

  if (location.pathname === '/') {
    return (
      <Header
        itemCount={itemCount}
        displayedItemCount={displayedItemCount}
      />
    );
  } else {
    return <Header />;
  }
}

class App extends Component {
 
  state = {
    items: [
      { id: 1,  name: 'Spider-Man: Birth of Venom',  author: 'Mike Zeck', category: 'Comic', cover: '/images/1.jpg', price: 300.00 },
      { id: 2, name: 'To Kill a Mockingbird', author: 'Gerry Duggan', category: 'Comic', cover: '/images/2.jpg', price: 250.00 },
      { id: 3, name: 'Hulk Vs. Thor: Banner Of War', author: 'Donnie Cates', category: 'Comic', cover: '/images/3.jpeg', price: 100.00 },
      { id: 4, name: 'Batman: Year One', author: 'Frank Miller', category: 'Comic', cover: '/images/4.jpg', price: 150.00 },
      { id: 5, name: 'NARUTO Massiv 1', author: 'Masashi Kishimoto', category: 'Manga', cover: '/images/5.jpeg', price: 200.99 },
      { id: 6, name: 'Demon Slayer: Kimetsu no Yaiba Massiv 20', author: 'Gotoge, Koyoharu', category: 'Manga', cover: '/images/6.jpeg', price: 149.99 },
      { id: 7, name: 'Bleach, Band 01', author: 'Tite Kubo', category: 'Manga', cover: '/images/7.jpg', price: 199.99 },
      
    ],
    categories: ['All', 'Comic', 'Manga'],
    displayedItems: [],
    shoppingList: [],
    renderedItemsCount: 0,
    isLoggedIn: false,
  };
 

  handleItemRender = () => {
    this.setState((prevState) => ({
      renderedItemsCount: prevState.renderedItemsCount + 1,
    }));
  };


  componentDidMount() {
    this.setState({ displayedItems: this.state.items });
  }

  handleCheck = (id, isChecked) => {
    const { items, shoppingList } = this.state;
    const item = items.find((item) => item.id === id);

    if (isChecked) {
      this.setState({ shoppingList: [...shoppingList, item] });
    } else {
      this.setState({
        shoppingList: shoppingList.filter((item) => item.id !== id),
      });
    }
  };

  handleLoginLogout = () => {
    this.setState((prevState) => ({ isLoggedIn: !prevState.isLoggedIn }));
  };

  handleCommentSubmit = (productId, comment) => {
    console.log(
      `Product ID: ${productId}, Comment: ${comment}`
    );
    alert(`Your report: "${comment}" added successfully!`);
  };

  handleCategoryChange = (category) => {
    if (category === 'All') {
      this.setState({ displayedItems: this.state.items });
    } else {
      this.setState({
        displayedItems: this.state.items.filter(
          (item) => item.category === category
        ),
      });
    }
    this.setState({ shoppingList: [] }); // Clear the shopping list
  };

  render() {
    const { displayedItems, shoppingList, isLoggedIn, categories } = this.state;

    return (
      <div>
        <Router>
          <AppHeader
            itemCount={shoppingList.length}
            displayedItemCount={displayedItems.length}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Menu
                    isLoggedIn={isLoggedIn}
                    onLoginLogout={this.handleLoginLogout}
                    categories={categories}
                    onCategoryChange={this.handleCategoryChange}
                  />
                  <Body
                    items={displayedItems}
                    onCheck={this.handleCheck}
                    onItemRender={this.handleItemRender}
                  />
                </>
              }
            />
            <Route
              path="/product/:id"
              element={
                <ProductInfosWrapper
                  items={this.state.items}
                  handleCommentSubmit={this.handleCommentSubmit}
                />
              }
            />
          </Routes>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;