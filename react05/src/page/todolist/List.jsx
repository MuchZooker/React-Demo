
import React from 'react'
import PropTypes from 'prop-types'

export default function List(props){
   
        return(
            <ul>
                {
                    props.data.map(value=> <li key={value.id}>{value.taskname}</li>)
                }
            </ul>

        )
    
}



List.propTypes={
    data:PropTypes.array
}