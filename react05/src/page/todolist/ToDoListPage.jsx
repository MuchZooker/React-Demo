

import React from 'react'

import List from './List'
import Form from './Form'


class ToDoListPage extends React.Component{


    state={
        list:[]
    }

    todoInputHandleChange=()=>{
        return (value)=>{
           

            let listData={id:new Date().getTime(),taskname:value}
            this.state.list.push(listData)
            this.setState({})
        }
    }



    render(){
        return(
            <>
                    <Form formHandleChange={this.todoInputHandleChange()} ></Form>
                    <List data={this.state.list}></List>
            </>
        )
    }

}

export default ToDoListPage