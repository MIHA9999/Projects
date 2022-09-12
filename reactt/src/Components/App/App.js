import './App.css';
import React from 'react';
import Register from '../register/register.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 'Nabijem te na kurac'
    };
    
    this.kurac = this.kurac.bind(this);
  }
  kurac() {
    this.setState({ data: 'MAJMUNSKA GUZICA!' });
  }
  render() {
    return (
      <div className='App'>
        <div className='div'>{this.state.data}</div>

        <Register caller={this.kurac} />
      </div>

    );
  }
}
export default App;
