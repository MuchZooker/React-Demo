
// const {createStore}=require('redux')
// const reducer = require('./reducer')

// const store=createStore(reducer)


// // 执行一次dispatch   reducer负责处理一次数据
// // store.dispatch({
// //     type:'INCREMENT'
// // })

// // store.dispatch({
// //     type:'INCREMENT'
// // })

// // store.dispatch({
// //     type:'INCREMENT'
// // })


// // console.log(store.getState().count);

// // 订阅者模式  数据有变化  对应的监听得到数据变化 也会相应修改
// store.subscribe(()=>{
//     console.log(store.getState().count);
// })

// store.dispatch({
//     type:'INCREMENT'
// })




import {createStore} from 'redux'
import reducer from './reducer'

const store =createStore(reducer)



export default store









