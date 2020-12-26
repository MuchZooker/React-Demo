
import React from 'react'
import Form from '../../page/todolist/Form';

import store from './store'



class ReduxPage extends React.Component {



  render() {

    return (
      <div>
        <button onClick={()=>{
          store.dispatch({type:'INCREMENT'})
        }}>-</button>
        <span id='count'>{store.getState().count}</span>
        <button onClick={()=>{
          store.dispatch({type:'DECREMENT'})
        }}>+</button>
       
      </div>
    );

    
  }

}

export default ReduxPage;
