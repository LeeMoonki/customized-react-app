import React, { Component } from 'react';
import 'Css/hello.scss';
import style from 'Css/hello.module.scss';

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