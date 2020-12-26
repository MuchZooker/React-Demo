import React from 'react'
import {Prompt} from 'react-router-dom'
export default class Register extends React.Component{

    state={
        name:''
    }


    render(){
        return(
            <div>
                注册

                <Prompt 
                    when={!!this.state.name}
                    message={'确认要离开么'}
                />
                
            <input onChange={(e)=>{
                    this.setState({
                        name:e.target.value
                    })
            }}></input>
            </div>
        );
    }
}