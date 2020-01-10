import React, { Component } from 'react';
import 'Css/hello.css';
import style from 'Css/hello.module.css';

class HelloComponent extends Component {
  componentDidMount() {
    //
  }

  render() {
    return (
      <div className="title-wrapper">
        <span className={style.title}>Hello React! (in component)</span>
      </div>
    );
  }
}

export default HelloComponent;
