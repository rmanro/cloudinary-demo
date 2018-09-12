import React, { Component } from 'react';
import { getUrl } from './cloudinary';
import './App.css';

class App extends Component {
  render() {
    const src = 'http://www.mentalfloss.com/wp-content/uploads/2007/06/hippopet4.jpg';

    return (
      <div className="App">
          <h1>CLOUDINARY DEMO</h1>
          <img src={src} alt="Bigger Hippo Dog"/>
          <img src={getUrl(src, 'w_100')} alt="Smaller Hippo Dog"/>
      </div>
    );
  }
}

export default App;

// another image sizing example:
// <img src={getUrl(src, 'w_50,h_50')} alt="Even Smaller Hippo Dog"/>
