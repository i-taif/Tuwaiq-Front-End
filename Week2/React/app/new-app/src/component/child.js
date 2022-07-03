import React, { Component } from 'react'

export default class child extends Component {
    componentWillUnmount(){
        console.log('bye bye child')
    }
    componentDidMount(){
        console.log('hello from child')
    }
  render() {
    return (
      <div>child</div>
    )
  }
}
