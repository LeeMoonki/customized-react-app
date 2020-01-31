import React, { Component } from 'react';
import 'Css/hello.scss';
import style from 'Css/hello.module.scss';

class HelloComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: '',
      age: '',
    };
  }
  componentDidMount() {
    import('../js/simpleMath').then(({
      default: math,
      add
    }) => {
      this.setState({
        year: math.add(2019, 1),
        age: add(2020, -1990),
      });
    });
  }
  render() {
    return (
      <div className="title-wrapper">
        <span className={style.title}>Hello React! (in component)</span>
        <div>This year is {this.state.year}.</div>
        <div>And I'm {this.state.age} years old.</div>
      </div>
    );
  }
}

export default HelloComponent;
