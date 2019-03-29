import React, { Component } from 'react'
import AppBody from './components/AppBody'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Todo</h1>
        </header>
        <AppBody></AppBody>
      </div>
    );
  }
}

export default App;
