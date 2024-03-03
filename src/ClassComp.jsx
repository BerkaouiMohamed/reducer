import React, { Component } from 'react'

export default class ClassComp extends Component {
    constructor() {
        super()
        this.state = {
            todos:[]
        }
    }
  componentDidMount(){ }
  componentDidUpdate(){}
  componentWillUnmount(){}
  render() {
    
    console.log(this.state.todos);
    return (
      <div>
        <button  >addTodo</button>
        
      </div>
    )
  }
}
