import React from "react";
// import axios from '../api/unsplash';
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from './ImageList'

class App extends React.Component {

  state ={images: []};

  onSearchSubmit = async(search)=> {
    const {data} =await unsplash.get('/search/photos',{
      params: {query: search},
    });

    this.setState({images: data.results})
    
  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images ={this.state.images}/>
      </div>
      
    );
  }
}

export default App;
