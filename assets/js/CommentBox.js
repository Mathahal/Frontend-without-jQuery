import request from 'superagent'
import React from 'react'
import ReactDOM from 'react-dom'
import CommentList from './CommentList'

export default class CommentBox extends React.Component{
  constructor(props) {
    super(props)
    this.state = {data: []}
  }
  componentDidMount() {
    request
      .get(this.props.url)
      .set('Accept', 'application/json')
      .end(( err, res ) => {
        let data = JSON.parse(res.text)
        this.setState({data: data.test})
      })
  }
  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
      </div>
    )
  }
}