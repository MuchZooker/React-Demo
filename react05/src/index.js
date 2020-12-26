import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import {BrowserRouter as Router ,Redirect,Route, Switch } from 'react-router-dom'

// import Login from './page/login/index'
// import Register from './page/register/index'
// import ToDoListPage from './page/todolist/ToDoListPage'
import App from './redux/App';
ReactDOM.render(
  // <Router>

  //   <Route path='/todo' component={ToDoListPage}></Route>
    
  //   <Switch>
  //     <App>
  //       {/* <Redirect from='/' to='/home' ></Redirect> */}
  //       <Route path='/login' component={Login}></Route>
  //       <Route path='/register' component={Register}></Route>
       
  //   </App>
 
  
  //   </Switch>


  // </Router>
  
  <App></App>
  ,
  document.getElementById('root')
);

