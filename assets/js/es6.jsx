import request from 'superagent'
import React from 'react'
import ReactDOM from 'react-dom'
import Remarkable from 'remarkable'

const data = {
  "test": [
    { "id": 1, "name": "sozan", "message": "sozaaaaaaaaaaaaa"},
    { "id": 3, "name": "kururi", "message": "chickshooooooooo"},
    { "id": 2, "name": "griko", "message": "korueaaaaaaa"}
  ]
}

class CommentBox extends React.Component{
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

class CommentList extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    const commentNodes = this.props.data.map( single => {
      return ( 
        <Comment author={single.name} key={single.id}>
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

class Comment extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    )
  }
}


// const CommentBox = React.createClass({
//   getInitialState: function() {
//     return {data: []};
//   },
//   componentDidMount: function() {
//     request
//       .get(this.props.url)
//       .set('Accept', 'application/json')
//       .end(( err, res ) => {
//         var data = JSON.parse(res.text)
//         this.setState({data: data.test})
//       })
//   },
//   render: function() {
//     return (
//       <div className="commentBox">
//         <h1>Comments</h1>
//         <CommentList data={this.state.data} />
//         <CommentForm />
//       </div>
//     );
//   }
// });
// 
// const CommentList = props => {
//   const commentNodes = props.data.map( single => {
//     return ( 
//       <Comment author={single.name} key={single.id}>
//         {single.message} 
//       </Comment> 
//     )
//   })
//   return ( 
//     <div className="commentList">
//       {commentNodes}
//     </div> 
//   )
// }
// 
// const CommentForm = props => <div className="commentForm"> Hello, world! I am a CommentForm. </div>
// 
// const Comment = props => {
//   return (
//     <div className="comment">
//       <h2 className="commentAuthor">
//         {props.author}
//       </h2>
//       {props.children}
//     </div>
//   )
// }

ReactDOM.render( <CommentBox url="/test.php" />, document.getElementById('content') )
