import React, { Component } from 'react'


//header that I created as its own component so it can be reused. I render it in app.js
export default class Header extends Component {
    constructor(){
        super();
        this.state={
            filter:'Filter'
        }
    }
  render() {
    return (
      <div className='header-container'>
      <div><h2>Comments R US</h2></div>
        
        
      </div>
    )
  }
}
