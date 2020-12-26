
import React from 'react'
import {dispach} from './store'
class MySelfReduxPage extends React.Component {
  render() {

    return (
      <div>
        <span id='count'></span>
        <button onClick={dispach.bind(this,{type:'COUNT_INCREMENt'})}>Increment</button>
        <button onClick={dispach.bind(this,{type:'COUNT_DECREMENT'})}>Decrement</button>
      </div>
    );

    
  }
  componentDidMount(){
      dispach()
  }
}

export default MySelfReduxPage;
