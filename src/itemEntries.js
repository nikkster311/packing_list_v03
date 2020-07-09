import React from 'react';

class ItemEntries extends React.Component {
  constructor(props) {
    super(props)

    this.createList.bind(this);
  }

  createList(item) {
    return(
      <li className="liItem content-wrap" key={item.key}>
      {//without () => in button onclick below, will render overandoverandover
      }
        <button className="itemButton" onClick={() => {this.props.completedToggle(item.key)}}>
          {item.completed ?
          <h4 className="completedItem">{item.name}</h4> : <h4>{item.name}</h4>}
        </button>

        <button className="deleteButton"
          onClick={() => { if (window.confirm('Are you sure you want to delete this item?')) {
            this.props.deleteItem(item.key) }}}>
          <i className="far fa-trash-alt"></i>
        </button>
      </li>
    )
  }
  //if you delete this.props.handleDelete, everything works.


  render(props) {
    const itemsList = this.props.itemsList
    const mappedItems = itemsList.map(item => this.createList(item))
    return(
      <li>
        <ul className="mappedItems">{mappedItems}</ul>
      </li>

    )
  }
}

export default ItemEntries;


// searchForCompleted = (item) => {
//   console.log("running searchForCompleted..")
//   var completedList = this.props.completedItems
//   console.log("completedList = " + completedList)
//   for (var x in completedList){
//     console.log("x = " + x)
//     if (x === item.key){
//       return true
//       console.log("searchForCompleted returned true for: " + item.name)
//     } else {
//       console.log("searchForCompleted returned false for key: " + item.name)
//     }
//   }
// }
