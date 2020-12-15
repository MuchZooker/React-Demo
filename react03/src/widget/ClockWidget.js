import React from 'react'
import api from '../api/index'

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

        api.fetchProducts().then(res=>res.json()).then(data=>{
            console.log(data);
        })

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