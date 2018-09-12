import React, { Component } from 'react';
import { getUrl } from './cloudinary';
import './App.css';

class App extends Component {
  render() {
    const src = 'http://www.mentalfloss.com/wp-content/uploads/2007/06/hippopet4.jpg';

    return (
      <div className="App">
          <h1>CLOUDINARY DEMO</h1>
          <img src={src} alt="Normal Hippo Dog"/>
      </div>
    );
  }
}

export default App;

// image sizing and effects examples:
// <img src={getUrl(src, 'w_100')} alt="Smaller Hippo Dog"/>
// <img src={getUrl(src, 'w_50,h_50')} alt="Even Smaller Hippo Dog"/>
// <img src={getUrl(src, 'e_oil_paint:70')} alt="Oil Paint Hippo Dog"/>