
import React from 'react'
import List from './List'
import Form from './Form'
export default class ReduxToDoListPage extends React.Component{





    render(){
        return(
            <div>
                <Form></Form>
                <List></List>
            </div>
        )
    }
}