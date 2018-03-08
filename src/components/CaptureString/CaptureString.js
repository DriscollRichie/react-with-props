import React, { Component } from 'react'

export default class CaptureString extends Component {
   constructor () {
      super()
      this.state = {
         string: ''
      }
   }

   updateString (e) {
      this.setState({ string: e.target.value })
   }

   render () {
      return (
         <div id="CaptureString__parent">
            <input placeholder="Enter a string here" />
            <button></button>
         </div>
      )
   }
}