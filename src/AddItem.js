import React from "react";

class AddItem extends React.Component {

  render() {
    return(
      <form className="addItemForm content-wrap" onSubmit={this.props.handleAdd}>
        <input
          type="text"
          placeholder="New item"
          value={this.props.currentItem.name}
          onChange={this.props.handleInput} />
        <button type="submit">Add</button>
      </form>
    )
  }
}

export default AddItem;
