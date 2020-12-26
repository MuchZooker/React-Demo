
import React from 'react'
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'

import ToDoListPage from '../page/todolist/ToDoListPage'
import MySelfReduxPage from './01-self-redux/MySelfReduxPage';
import ReduxPage from './02-redux/ReduxPage';
import ReduxToDoListPage from './03-todolist/ReduxToDoListPage';
import Hook from './04-hook/Hook';
class App extends React.Component {
  render() {

    return (
      <Router>
          <Route path='/todo' component={ToDoListPage}></Route>
          <Route path='/reduxmyself' component={MySelfReduxPage}></Route>

          <Route path='/redux' component={ReduxPage}></Route>
          <Route path='/reduxtodo' component={ReduxToDoListPage}></Route>
          <Route path='/hook' component={Hook}></Route>
      </Router>
    );

  }
}

export default App;
