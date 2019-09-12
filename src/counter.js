import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }
  componentDidMount() {
    console.log("component did mount");
    console.log("-------------------");
  }
  render() {
    return <div>
      <button onClick={this.increment}>Increment</button>
      <button onClick={this.decrement}>Decrement</button>
      <div className="counter">
        Counter:{this.state.counter}
      </div>
    </div>
  }
  componentDidUpdate(prevProps, prevstate, snapshot) {
    console.log('component did update');
    console.log("-----------")
  }
}
