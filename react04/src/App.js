import {Route,BrowserRouter as Router} from 'react-router-dom'
import HomePage from './page/HomePage'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/home" component={HomePage}></Route>
      </Router>
        
    </div>
  );
}

export default App;
