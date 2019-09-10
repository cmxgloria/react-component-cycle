import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter';
import CSS from './app.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mount: true
    }
    this.mount = () => this.setState({ mount: true })
    this.unmount = () => this.setState({ mount: false })
  }
  render() {
    return <div>
      <Counter />
    </div>
  }
}
ReactDOM.render(<App />, getElementById('root'));