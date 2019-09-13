import React from 'react';
import Counter from './counter';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mount: true,
      ignoreProp: 0,
      seed: 40
    }
    this.mountCounter = () => this.setState({ mount: true });
    this.unmountCounter = () => this.setState({ mount: false });
    this.ignoreProp = () => this.setState({ ignoreProp: Math.random });
    this.seedGenerator = () => this.setState({ seed: Number.parseInt(Math.random() * 100) });
  }
  render() {
    return <div className="flex-container">
      <button className="mount" onClick={this.mountCounter} disabled={this.state.mount}>Mount Counter</button>
      <button className="unmount" onClick={this.unmountCounter} disabled={!this.state.mount}>Unmount Counter</button>
      <button onClick={this.ignoreProp}>Ignore Prop</button>
      <button onClick={this.seedGenerator}>Seed Generator</button>
      {this.state.mount ?
        <Counter
          ignoreProp={this.state.ignoreProp}
          seed={this.state.seed} />
        : null}
    </div>
  }
}


