import React from "react";
import index_css from '../timeaxis/index.css'
import TimeAxisItem from "../blogitem/index";
class TimeAxis extends React.Component{



    render(){

        const data=['1','1','1','1','1','1','1','1']
        return(
            <div className='timeaxis_layout'>
                {
                    data.map((item,index)=>{

                      return  <TimeAxisItem position={index}></TimeAxisItem>
                    })
                }
            </div>
        )
    }
}
export default TimeAxis

