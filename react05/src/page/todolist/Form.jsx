

import React from 'react'
class Form extends React.Component{


    state={
        inputValue:''
    }


    handleInputEditChange=()=>{
        return (e)=>{
                this.setState({
                    inputValue:e.target.value
                })
             
        }
    }

    handleInputOnKeyUp=()=>{
        return (e)=>{
            if(e.keyCode==13){
                this.props.formHandleChange(this.state.inputValue)
                this.setState({
                    inputValue:''
                })
            }
        }
    }

    render(){
        return(
            <div>
                <input type='text' value={this.state.inputValue} onChange={this.handleInputEditChange()} onKeyUp={this.handleInputOnKeyUp()}></input>
            </div>
        )
    }
}
export default Form