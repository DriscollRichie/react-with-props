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

   render() {
      return (
         <div className="App">
            <DisplayString />
            <CaptureString />
         </div>
      );
   }
}

export default App;
