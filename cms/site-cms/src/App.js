import React from 'react';
import ReactDOM from 'react-dom';
import Post from './Post'
import loremIpsum from './LoremIpsum';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loadedContent: [1,2,3,4]
    }
  }
  
  render() {
    return (
      <div className="App">
      <div id="header">
        <h1>Hello</h1>
      </div>
      <div className="content">
        { this.state.loadedContent ? this.state.loadedContent.map((item) => <Post key={item} image="" title="Hello" date={item} content={loremIpsum["loremIpsum"]}/>) : <h1>Loading</h1>}
      </div>
    </div>
    )
  }
}

export default App;
