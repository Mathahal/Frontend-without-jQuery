import request from 'superagent'
import React from 'react'
import ReactDOM from 'react-dom'
import CommentList from './CommentList'
import CommentForm from './CommentForm'

export default class CommentBox extends React.Component{
  constructor(props) {
    super(props)
    this.state = {data: []}
  }
  loadCommentsFromServer(data){
    console.log(data)
    this.setState({data: data.param})
  }
  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm url={this.props.url} onEventCallBack={this.loadCommentsFromServer.bind(this)} />
      </div>
    )
  }
}