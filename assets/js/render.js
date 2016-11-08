import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

/* Viewの実装 */
// View (Container Components)
class FormApp extends React.Component {
  render() {
    return (
      <div>
        <FormInput handleClick={this.props.onClick} />
        <FormDisplay data={this.props.value} />
      </div>
    );
  }
}

// View (Presentational Components)
class FormInput extends React.Component {
  send(e) {
    e.preventDefault();
    this.props.handleClick(this.myInput.value.trim());
    this.myInput.value = '';
    return;
  }
  render() {
    return (
      <form>
        <input type="text" ref={(ref) => (this.myInput = ref)} defaultValue="" />
        <button onClick={(event) => this.send(event)}>Send</button>
      </form>
    );
  }
}

// Veiw (Presentational Components)
class FormDisplay extends React.Component {
  render() {
    return (
      <div>{this.props.data}</div>
    );
  }
}

/* Actionsの実装 */
// Action名の定義
const SEND = 'SEND';

// Action Creators
function send(value) {
  // Action
  return {
    type: SEND, value,
  };
}

/* Reducersの実装 */
function formReducer(state, action) {
  switch (action.type) {
    case 'SEND':
      return Object.assign({}, state, {
        value: action.value,
      });
    default:
      return state;
  }
}

/* Storeの実装 */
const initialState = {
  value: null,
};
const store = createStore(formReducer, initialState);

// Connect to Redux
function mapStateToProps(state) {
  window.console.log(state);
  return {
    value: state.value,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onClick(value) {
      console.log(dispatch)
      dispatch(send(value));
    },
  };
}
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormApp);

// Rendering
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.querySelector('.content')
);













// import request from 'superagent'
// import React, { Component } from 'react'
// import { render } from 'react-dom'
// import { createStore } from 'redux'
// import { Provider, connect } from 'react-redux'
// // import CommentBox from './CommentBox'
// 
// 
// 
// // React Component
// class Container extends Component {
//     render() {
//         return (
//             <div>
//               <button onClick={ e => {
//                     this.props.dispatch (
//                         // ReducerにActionをディスパッチする
//                         { type: "INCREMENT" }
//                     );
//                     console.log("pushed button");
//                 }}>
//                     button
//                 </button>
//                 <div>
//                     { this.props.value }
//                 </div>
//             </div>
//         );
//     }
// }
// // NewComponent = connect(Componentからdispatchされたアクション) (Component)
// const App = connect(
//     state => state
// )(Container);
// 
// 
// // Reducer
// const reducer = (state = { value: 0 }, action) => {
//     // Componentの中でディスパッチされたActionがaction変数に入ってくる
//     // action = { type: "INCREMENT" }
//     switch (action.type) {
//         case "INCREMENT":
//             // valueに+1して返す
//             return Object.assign({}, { value: state.value + 1 });
//         default:
//             return state;
//     }
// }
// 
// 
// // Reducerの戻り値を新しい状態（State）としてStoreで管理する
// const store = createStore(reducer);
// 
// 
// // Root Render
// // ReduxのProviderコンポーネントで、Appコンポーネント
// // （connect関数にComponentを渡して作成したNewComponent）をラップし、Storeを渡す
// // （簡単に言えば）propsにStateが入る
// render (
//     <Provider store={ store }>
//         <App />
//     </Provider>,
//     document.getElementById("content")
// );
// 
// // class CommentBox extends React.Component{
// //   constructor(props) {
// //     super(props)
// //     this.state = {data: []}
// //   }
// //   loadCommentsFromServer(data){
// //     console.log(data)
// //     this.setState({data: data.param})
// //   }
// //   render() {
// //     return (
// //       <div className="commentBox">
// //         <h1>Comments</h1>
// //         <CommentList data={this.state.data} />
// //         <CommentForm url={this.props.url} onEventCallBack={this.loadCommentsFromServer.bind(this)} />
// //       </div>
// //     )
// //   }
// // }
// // 
// // class CommentForm extends React.Component{
// //   constructor(props) {
// //     super(props)
// //     this.state = {param: []}
// //   }
// //   handleParamChange(e) {
// //     console.log(e)
// //     this.setState({param: e.target.value})
// //   }
// //   gettingDataByParams(e){
// //     request
// //       .get(this.props.url)
// //       .query({param:this.state.param})
// //       .end(( err, res ) => {
// //         let data = JSON.parse(res.text)
// //         this.props.onEventCallBack(data);
// //       })
// //     e.preventDefault()
// //   }
// //   render() {
// //     return ( 
// //       <form className="commentForm" onSubmit={this.gettingDataByParams.bind(this)} >
// //         <input type="text" value={this.state.param} onChange={this.handleParamChange.bind(this)} />
// //         <input type="submit" value="Post" />
// //       </form> 
// //     )
// //   }
// // }
// // 
// // class CommentList extends React.Component{
// //   constructor(props) {
// //     super(props)
// //   }
// //   render() {
// //     const commentNodes = this.props.data.map( single => {
// //       return ( 
// //         <Comment key={single.id}>
// //           {single.message} 
// //         </Comment> 
// //       )
// //     })
// //     return ( 
// //       <div className="commentList">
// //         {commentNodes}
// //       </div> 
// //     )
// //   }
// // }
// // 
// // class Comment extends React.Component{
// //   constructor(props) {
// //     super(props)
// //   }
// //   render() {
// //     return (
// //       <div className="comment">
// //         {this.props.children}
// //       </div>
// //     )
// //   }
// // }
// // 
// // const reducer = ( state,  ) => {
// //   switch (expression) {
// //     case expression:
// //       
// //       break;
// //     default:
// //       
// //   }
// // }
// // 
// // ReactDOM.render( <CommentBox url="/test.php" />, document.getElementById('content') )