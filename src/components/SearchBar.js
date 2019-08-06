import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onFormSubmit = event => {
    event.preventDefault();
    //console.log(this.state.term);
    //props in class based components
    //console.log(this.props);
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
              placeholder="What kind of images you like?"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
