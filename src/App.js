import React, { Component } from 'react';
import Counter from './Counter';
class App extends Component {
  render() {
    return (
      <div className="App" style={{width: '400px', margin: '20px auto'}}>
        <Counter />
      </div>
    );
  }
}



export default App;
