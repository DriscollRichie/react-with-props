import React, { Component } from 'react'

export default class DisplayString extends Component {
   render () {
      return (
         <div id="DisplayString__parent">
            {
               this.props.string
               ?
                  <span>{ this.props.string }</span>
               :
                  <span><b>String has not be assigned yet</b></span>
            }
         </div>
      )
   }
}