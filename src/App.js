import React, { Component } from 'react';
import { getUrl } from './cloudinary';
import './App.css';

class App extends Component {
  render() {
    const src = 'https://www.omgubuntu.co.uk/wp-content/uploads/2016/03/cookie-100k-1.jpg';

    return (
      <div className="App">
          <h1>CLOUDINARY DEMO</h1>
          <img className="original" src={src} alt="Normal Cat"/>
      </div>
    );
  }
}

export default App;

// image sizing and effects examples:
// <img src={getUrl(src, 'w_200')} alt="Smaller Cat"/>
// <img src={getUrl(src, 'w_50,h_50')} alt="Even Smaller Cat"/>
// <img src={getUrl(src, 'e_oil_paint:70')} alt="Oil Paint Cat"/>