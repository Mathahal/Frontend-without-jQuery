import request from 'superagent'
import React from 'react'
import ReactDOM from 'react-dom'

export default class CommentForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = {param: []}
  }
  handleParamChange(e) {
    console.log(e)
    this.setState({param: e.target.value})
  }
  gettingDataByParams(e){
    request
      .get(this.props.url)
      .query({param:this.state.param})
      .end(( err, res ) => {
        let data = JSON.parse(res.text)
        this.props.onEventCallBack(data);
      })
    e.preventDefault()
  }
  render() {
    return ( 
      <form className="commentForm" onSubmit={this.gettingDataByParams.bind(this)} >
        <input type="text" value={this.state.param} onChange={this.handleParamChange.bind(this)} />
        <input type="submit" value="Post" />
      </form> 
    )
  }
}