import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async term => {
    //console.log(term);
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
      // headers: {
      //   Authorization:
      //     "Client-ID 6e0b857434ca6c5fbff69dcf601615f1d57837bcd4023f60a8db40e16e6fca57"
      // }
    });
    //console.log(this);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
