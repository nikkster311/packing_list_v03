import React from 'react';
import CategoryComponent from "./CategoryComponent";
import './fontawesome-free-5.7.0-web/js/all';

class AllLists extends React.Component {
//we take all of the categories and create a category component for each
//maybe just have  <AddItem/> this underneath instead of nested



  createCategory(category) {
    return (
      <section className="categorySection content-wrap" key={category.key}>
        <button className="deleteButton"
          onClick={() => { if (window.confirm('Are you sure you want to delete this category?'))
            { this.props.deleteCategory(category.key) }}}>
          <i className="far fa-trash-alt"></i>
        </button>
        <CategoryComponent
          name={category.name} />
      </section>
    )
  }
  render(props) {
    const catList = this.props.catList //sets list of all categories and keys to allCategories
    const mappedCategories = catList.map(category => this.createCategory(category))
    return( //for x in this.state.catList, map into a category component
      <section className="allCategories content-wrap">{mappedCategories}</section>
    )
  }
//return a function that adds a new <CategoryComponent/> each time submit is hit on <CreateCategory/>
}

export default AllLists;
