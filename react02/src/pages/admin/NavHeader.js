import React from 'react'
import './css/NavHeader.css'




class NavHeader extends React.Component {

    render() {
        return (
           <div className="nav_top_bar">
               <div className="nav_top_bar_left_menu">
                  
                       <img src="https://huaban.com/img/logo.svg"></img>
                   
                   <a>
                       首页
                   </a>
                   <a>
                       发现
                   </a>
                   
               </div>
               <div className="nav_top_bar_right_menu">
                    <button className="nav_top_bar_right_menu-loginhint">
                        登陆/注册
                    </button>
                   <div className="nav_top_bar_right_menu_newclass">
                   <a>NEW</a>
                       <a>花瓣好课</a>
                      
                   </div>

               </div>
           </div>
        );
    }
}



export default NavHeader