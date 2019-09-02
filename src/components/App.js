import React from 'react';
import SearchBar from './SearchBar';
// import axios from 'axios';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class App extends React.Component {

  // onSearchSubmit = (term) => {
  //    axios.get('https://api.unsplash.com/search/photos', {
  //     params: { query: term },
  //     headers: {
  //       Authorization: 'Client-ID b6b80aa08bf9c3b64bac2b6a887a6e7cd330c41543f4fe2923ff330e71f4923d'
  //     }
  //   }).then((response) => {
  //     console.log(response.data.results)
  //   });
  // }

  // onSearchSubmit = async (term) => {
  //   const response = await axios.get('https://api.unsplash.com/search/photos', {
  //     params: { query: term },
  //     headers: {
  //       Authorization: 'Client-ID b6b80aa08bf9c3b64bac2b6a887a6e7cd330c41543f4fe2923ff330e71f4923d'
  //     }
  //   });
  //   this.setState({ images: response.data.results })
  // }

  // another option with axios using external file
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });
    this.setState({ images: response.data.results })
  }


  //  <ImageList /> replaces --> Found: {this.state.images.length} images
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
