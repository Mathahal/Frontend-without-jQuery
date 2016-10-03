import React from 'react'
import ReactDOM from 'react-dom'
import Comment from './Comment'

export default class CommentList extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    const commentNodes = this.props.data.map( single => {
      return ( 
        <Comment key={single.id}>
          {single.message} 
        </Comment> 
      )
    })
    return ( 
      <div className="commentList">
        {commentNodes}
      </div> 
    )
  }
}