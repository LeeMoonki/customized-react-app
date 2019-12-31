import React, {Component} from 'react';
import {hot} from 'react-hot-loader/root';

import Hello from './components/Hello';

class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <h2>Hi there</h2>
        <h2>Test</h2>
      </div>
    );
  }
}

export default hot(App);
