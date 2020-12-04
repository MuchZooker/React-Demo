import React from 'react'
import './css/Foot.css'

class Foot extends React.Component{
    render(){

        return (
            <div className="foot">
                {/* <div className="foot_container"> */}
                    <ul>
                        <li><a>© Huaban 计师们使用花瓣浏</a></li>
                        <li><a>浙公网安备 1111111111111111111号</a></li>
                        <li><a>备案信息: 浙111111111111111111 </a></li>
                        <li><a>网络信息服务信用承诺书 </a></li>
                    </ul>
                {/* </div> */}
            </div>
        );
    }
}
export default Foot