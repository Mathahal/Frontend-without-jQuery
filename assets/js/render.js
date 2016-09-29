import request from 'superagent'
import React from 'react'
import ReactDOM from 'react-dom'
import CommentBox from './CommentBox'

ReactDOM.render( <CommentBox url="/test.php" />, document.getElementById('content') )