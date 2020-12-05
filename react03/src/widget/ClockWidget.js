import React from 'react'

class ClockWidget extends React.Component{

    
     

    constructor(props){
   
        super(props)
        this.state={
            data:new Date()
        }
    }
 
    componentDidMount(){
           this.taskId=setInterval(()=>{

                this.setState({
                    data:new Date()
                })
            },1000)
    }
    componentWillUnmount(){
        clearInterval(  this.taskId)
    }
    render(){
        return(
            <di>
                <h1>{this.state.data.toLocaleTimeString()}</h1>
            </di>
        );
    }
}
export default ClockWidget