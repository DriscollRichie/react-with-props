import React, { Component } from 'react'

export default class CaptureString extends Component {
   constructor () {
      super()
      this.state = {
         string: ''
      }

      this.updateString = this.updateString.bind(this)
   }

   updateString (e) {
      this.setState({ string: e.target.value })
   }

   render () {
      console.log(this.props)
      return (
         <div id="CaptureString__parent">
            <input placeholder="Enter a string here" onChange={ this.updateString } value={ this.state.string } />
            <button onClick={ () => this.props.updateString( this.state.string ) }>
               Submit String
            </button>
         </div>
      )
   }
}