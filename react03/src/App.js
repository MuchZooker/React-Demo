
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './page/Home'
import Mine from './page/Mine'
class App extends React.Component {




  render(){
  return (
    <div className="App">
      <Router>
        <Route path='/home' component={Home}></Route>
        <Route path='/mine' component={Mine}></Route>
      </Router>
    
    </div>
  );
}
}



export default App;
