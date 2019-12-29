import React, {Component} from 'react';
import {hot} from 'react-hot-loader/root';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello React</h1>
        <h2>Hi there</h2>
        <h2>Test</h2>
      </div>
    );
  }
}

export default hot(App);
