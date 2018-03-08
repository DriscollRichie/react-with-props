import React, { Component } from 'react';
import './App.css';

import DisplayString from './DisplayString/DisplayString'
import CaptureString from './CaptureString/CaptureString'

class App extends Component {
   constructor () {
      super()
      this.state = {
         string: ''
      }
   }

   updateString (val) {
      this.setState({ string: val })
   }

   render() {
      return (
         <div className="App">
            <DisplayString string={ this.state.string } />
            <CaptureString />
         </div>
      );
   }
}

export default App;
