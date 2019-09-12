import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter';
import CSS from './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mount: true
    }
    this.mountCounter = () => this.setState({ mount: true });
    this.unmountCounter = () => this.setState({ mount: false });
  }
  render() {
    return <div>
      <button onClick={this.mountCounter}>Mount Counter</button>
      <button onClick={this.unmountCounter}>Unmount Counter</button>
      <Counter />
    </div>
  }
}
ReactDOM.render(<Counter />, document.getElementById('root'));