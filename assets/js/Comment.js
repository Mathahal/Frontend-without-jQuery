import React from 'react'
import ReactDOM from 'react-dom'

export default class Comment extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="comment">
        {this.props.children}
      </div>
    )
  }
}
