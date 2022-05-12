import React from 'react';
import Post from './Post'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loadedContent: []
    }
  }
  
  render() {
    return (
      <div className="App">
      <div id="header">
        
      </div>
      <div classname="content">
        { this.state.loadedContent ? this.state.loadedContent.map(<Post></Post>) : <h1>Loading</h1>}
      </div>
    </div>
    )
  }
}

export default App;
