import React, { Component } from 'react'

export default class CaptureString extends Component {
   constructor () {
      super()
      this.state = {
         string: ''
      }

      this.updateString = this.updateString.bind(this)
      this.submitString = this.submitString.bind(this)
   }

   updateString (e) {
      this.setState({ string: e.target.value })
   }

   submitString () {
      this.props.updateString(this.state.string)
      this.setState({ string: '' })
   }

   render () {
      return (
         <div id="CaptureString__parent">
            <input placeholder="Enter a string here" onChange={ this.updateString } value={ this.state.string } />
            <button onClick={ this.submitString }>
               Submit String
            </button>
         </div>
      )
   }
}