import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store.js';
import AlbumsListContainer from './components/AlbumsListContainer';
import './App.css';

class App extends Component {
  render() {
    return (

      <Provider store={store}>
      <div className="App">

        <header className="App-header">

        <AlbumsListContainer />

        </header>

    </div>
    </Provider>
    );
  }
}

export default App;
