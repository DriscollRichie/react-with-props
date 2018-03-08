import React, { Component } from 'react'

export default class CaptureString extends Component {
   constructor () {
      super()
      this.state = {
         string: ''
      }
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