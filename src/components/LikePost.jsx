import React, { Component } from 'react'
import Upgrade from './Upgrade'

class LikePost extends Component {
  render() {
    const{count,increment}=this.props
    return (
      <div>
        <button onClick={increment}>Like Post {count}</button>
      </div>
    )
  }
}

export default Upgrade(LikePost)