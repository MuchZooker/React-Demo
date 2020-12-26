
import React from 'react'
import { Link } from 'react-router-dom'

class App extends React.Component {
  render() {

    return (
      <div className="App">
        <Link to='/login'>登陆</Link><br/>
        <Link to='/register'>注册</Link><br/>
        <span>hello </span>
        <div style={{display:"inline-block",marginLeft:10}}>
            {this.props.children}
        </div>
        

        {/* <Link to='/todo'>TodoList</Link><br/>
     
        <div style={{display:"inline-block",marginLeft:10}}>
            {this.props.children}
        </div>
         */}
      </div>
    );

  }
}

export default App;
