import React from "react";
import {BrowserRouter as Router,Redirect,Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import Demo from "./pages/demo/index";
class App extends React.Component {
  render() {
    return (
      <Router>
        
        {/* <Redirect from='/' to='/home'></Redirect> */}
        <Route path='/home' component={HomePage}></Route>
        <Route path='/demo' component={Demo}></Route>
      </Router>
    );
  }
}

export default App;
