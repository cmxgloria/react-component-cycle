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
  getSnapshotBeforeUpdate(prevProps, prevstate) {
    console.log('get snapshot before update');
    return null;
  }//allow us to capture some properties that are not stored in the state before we render that component
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
    console.log('render');
    if (this.props.showErrorComponent && this.state.error) {
      return <div>We have the counter error.{this.state.error.message}</div>
    }
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
  componentDidCatch(error, info) {
    console.log('component did catch');
  }
}
