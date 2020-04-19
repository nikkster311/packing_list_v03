import React from "react";

class CreateCategory extends React.Component {
  render() {
    return (
      <div>
        <form className="createCatForm content-wrap" onSubmit={this.props.onSubmit}>
          <input
            type="text"
            placeholder="New category"
            onChange={this.props.handleInput}
            value={this.props.currentCategory.name} />
          <button type="submit"> Create Category </button>
        </form>
      </div>
    )
  }
}

export default CreateCategory;
