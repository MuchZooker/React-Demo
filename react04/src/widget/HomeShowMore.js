import React from 'react'
import '../widget/homeshowmore.css'
export default class HomeShowMore extends React.Component {

        constructor(props){
            super(props)
         
        }
        


    render() {
        return (
            <div className='more_out'>
               <div className='more_left'>
                    <div className='more_left_splash'>
                        <img src='https://c-ssl.duitang.com/uploads/item/202007/06/20200706172718_wxTVC.thumb.1000_0.jpeg'></img>
                    </div>
                    <div className='more_left_start'>
                        Learn More
                    </div>
               </div>
               <div className='more_content'>
                   
               </div>
            </div>
        )
    }
}