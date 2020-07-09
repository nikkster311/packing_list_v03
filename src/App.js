import React, { Component } from 'react';
import "./App.css";
import AllLists from './AllLists';
import CreateCategory from "./CreateCategory"

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      catList: [],
      currentCategory: {name: "", key: ""}
    }
    this.handleInputNewCat = this.handleInputNewCat.bind(this);
    this.submitNewCat = this.submitNewCat.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
  }

  deleteCategory = key => {
    const newList = this.state.catList
    const filteredList = newList.filter(item => item.key !== key)
    this.setState({catList: filteredList})
  }

  handleInputNewCat = e => {
    this.setState({currentCategory: {name: e.target.value, key: Date.now()}}, () => {
      console.log("currentCategory: " + this.state.currentCategory.name + ", " + this.state.currentCategory.key)
    })
  }

  submitNewCat = e => {
    e.preventDefault()
    const newCategory = this.state.currentCategory
    if (newCategory.name !== "") {
      const catList = [...this.state.catList, newCategory]
      this.setState({
        catList: catList,
        currentCategory: {name: '', key: ''},
      })
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="pageTitle content-wrap"> Packing List</h1>
        <div className="main">
        <AllLists //container with ALL of the category components
          catList={this.state.catList}
          deleteCategory={this.deleteCategory}/>
        <CreateCategory
          onSubmit={this.submitNewCat}
          handleInput={this.handleInputNewCat}
          currentCategory={this.state.currentCategory} />
          </div>
          <div className="footer-div">
            <footer> <a href="https://nikkster.tech">nikkster.tech</a></footer>
          </div>
      </div>
    );
  }
}

export default App




// this.state = {
//   currentToiletriesItem: {text: '', key: ''},
//   itemsToiletries: [],
//   currentMedicinesItem: {text: '', key: ''},
//   itemsMedicines: [],
//   currentClothesShoesItem: {text: '', key: ''},
//   itemsClothesShoes: [],
//   currentDocumentsItem: {text: '', key: ''},
//   itemsDocuments: [],
//   currentEEItem: {text: '', key: ''},
//   itemsEE: [],
//   currentMiscItem: {text: '', key: ''},
//   itemsMisc: []




// <CategoryList name="toiletries"/>
// <AddToList
// name="toiletries"
// currentItem={this.state.currentToiletriesItem}
// handleInput={this.handleInput}
// handleAdd={this.handleAdd} />
// <CategoryList name="medicines"/>
// <AddToList
// name="medicines"
// currentItem={this.state.currentMedicinesItem}
// handleInput={this.handleInput}
// handleAdd={this.handleAdd}/>
// <CategoryList name="clothing and shoes"/>
// <AddToList
// name="clothingandshoes"
// currentItem={this.state.currentClothesShoesItem}
// handleInput={this.handleInput}
// handleAdd={this.handleAdd}/>
// <CategoryList name="documents"/>
// <AddToList
// name="documents"
// currentItem={this.state.currentDocumentsItem}
// handleInput={this.handleInput}
// handleAdd={this.handleAdd} />
// <CategoryList name="electronics and entertainment"/>
// <AddToList
// name="ee"
// currentItem={this.state.currentEEItem}
// handleInput={this.handleInput}
// handleAdd={this.handleAdd} />
