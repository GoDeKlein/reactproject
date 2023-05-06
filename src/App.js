import React, { Component } from 'react';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import Menu from './components/menu';

class App extends Component {
  state = {
    items: [
      { id: 1, name: 'Item 1', category: 'Category 1' },
      { id: 2, name: 'Item 2', category: 'Category 1' },
      { id: 3, name: 'Item 3', category: 'Category 2' },
      { id: 4, name: 'Item 4', category: 'Category 2' },
      // More items here
    ],
    categories: ['All', 'Category 1', 'Category 2'],
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
    this.setState({ shoppingList: [] }); 
  };

  render() {
    const { displayedItems, shoppingList, isLoggedIn, categories } = this.state;

    return (
      <div>
        <Header itemCount={shoppingList.length} 
        displayedItemCount={displayedItems.length}
        />
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
        <Footer />
      </div>
    );
  }
}

export default App;
