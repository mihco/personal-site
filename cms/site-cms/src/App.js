import React from 'react';
import ReactDOM from 'react-dom';
import Post from './Post'
import loremIpsum from './LoremIpsum';
import './App.css';

const concat = require("concat-stream")

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loadedContent: ""
    }
  }

  componentDidMount() {
    fetch("https://personalsitebackendjs.herokuapp.com/posts").then(res => {console.log(res); return res.text()}).then(result => {console.log(result)})
  }
  
  render() {
    return (
      <div className="App">
        <div className="content block">
          { this.state.loadedContent ? this.state.loadedContent.map((item) => <div>{ item === 1 ? "" : <hr className='border-t-amber-300 border-t-4 border-dashed'></hr> }<Post key={item} image="" title="Hello" date={item} content={loremIpsum["loremIpsum"]}/></div>) : <h1>Loading</h1>}
        </div>
        <div className="header bg-amber-200 fixed opacity-80 block bottom-0">
          <ul>
            <li className='header-content p-4'>Blog</li>
            <li className='header-content p-4 absolute right-0'><a href="index.html">Home</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default App;
