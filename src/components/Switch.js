import React, { Component } from 'react'

class Switch extends Component {
  render() {
    switch (this.props.value) {
      case 'loading': 
        return <h3>loading</h3>
      default: 
        return <h3>loaded</h3>
    }
  }
}
export default  Switch;