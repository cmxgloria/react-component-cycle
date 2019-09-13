import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      seed: 0
    }
    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }
  static getDerivedStateFromProps(props, state) {
    if (props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed
      }
    }
  }// static write before every other method
  componentDidMount() {
    console.log("component did mount");
    console.log("-------------------");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("should component update")
    if (nextProps.ignoreProp && this.props.ignoreProp !== nextProps.ignoreProp) {
      console.log('should component render -DO NOT RENDER');
      return false;
    }
    console.log('should component render - RENDER');
    return true;

  }
  render() {
    return <div className="container">
      <button className="increment" onClick={this.increment}>Increment</button>
      <button className="decrement" onClick={this.decrement}>Decrement</button>
      <div className="counter">
        Counter:{this.state.counter}
      </div>
    </div>
  }
  componentDidUpdate(prevProps, prevstate, snapshot) {
    console.log('component did update');
    console.log("-----------")
  }
  componentWillMount() {
    console.log("component will mount");//this one when click unmount button , it render will mount function
  }
}
