import React from 'react';
import ItemEntries from "./itemEntries";
import AddItem from "./AddItem";

class CategoryComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentItem: {key: "", name: "", completed: false},
      itemsList: [],
    }
    this.handleInput.bind(this);
    this.handleAdd.bind(this);
    this.deleteItem.bind(this);
    this.completedToggle.bind(this);
  }

//OHMYGOD This was deleteItem(key) {} and was causing it to refresh the app -_-
  deleteItem = key => {
    const newList = this.state.itemsList
    const filteredList = newList.filter(item => item.key !== key)
    this.setState({itemsList: filteredList})
  }

  //creates a strike through if completed, takes away if not completed
  completedToggle = key => {
    var itemsList = this.state.itemsList
    for (var x in itemsList) {
      if (itemsList[x].key === key) {
        itemsList[x].completed = !itemsList[x].completed
      }
    }
    this.setState({itemsList: itemsList}, () => {
      console.log(itemsList)
    })
  }


  handleAdd = e => {
    e.preventDefault();
    const newItem = this.state.currentItem
    if (newItem.name !== '') {
      const itemsList = [...this.state.itemsList, newItem]
      this.setState({
        itemsList: itemsList,
        currentItem: {key: "", name: "", completed: false}
      })
    }
  }

  handleInput = e => {
    this.setState({
      currentItem: {key: Date.now(), name: e.target.value, completed: false}
    }, () => {
      console.log("currentItem: key: " + this.state.currentItem.key + " , name: " + this.state.currentItem.name + " , completed? " + this.state.currentItem.completed)
    })
  }


  render(props) {
    return(
      <section>
        <ul className="ulCatComp content-wrap" name={this.props.name}>
          <h2 className="catTitle">{this.props.name}</h2>
          <ItemEntries
            itemsList={this.state.itemsList}
            deleteItem={this.deleteItem}
            completedToggle={this.completedToggle}
            completedItems={this.state.completedItems}/>
          <AddItem
            handleInput={this.handleInput}
            currentItem={this.state.currentItem}
            handleAdd={this.handleAdd} />
        </ul>
      </section>

    )
  }
}

export default CategoryComponent;


// strikeToggle = key => {
//   console.log("running strikeToggle..")
//   const newList = this.state.itemsList
//   const completedList = this.state.completedItems
//   console.log("newList: " + newList + ", completedList: " + completedList + ", key: " + key)
//
//   //STOPS WORKING HERE
//   for (var x in completedList) { //if item already in completed list, take off list
//     console.log("checking x in completedlist: " + x)
//     if (x.key === key) {
//       console.log("key already in completedList..removing from list")
//       completedList.filter(item => item.key !== key)
//       this.setState({completedItems: completedList}, () => {
//         console.log("completedItems are " + this.state.completedItems)
//       })
//     }
//     else { //else add to completedList
//       console.log("item not in completedList, adding to completedList..")
//       this.setState({currentItem: {key: x.key, name: x.name, completed: false}}, () => {
//         this.addCompleted()})
//     }}}
//
//
//
//
//   addCompleted = () => {
//     console.log("running addCompleted. completedItems are " + this.state.completedItems + ", currentItem is " + this.state.currentItem)
//     const completedList = [...this.state.completedItems, this.state.currentItem]
//     this.setState({
//       completedList: completedList,
//       currentItem: {key: "", name: "", completed: false}
//     }, () => {
//       console.log(this.state.completedList + "currentItem: " + this.state.currentItem)
//     })
//   }
