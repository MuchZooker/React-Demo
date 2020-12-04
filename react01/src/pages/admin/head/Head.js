import '../head/Head.css'
import logo from '../../../res/open.svg';
import logoicon from '../../../res/logo.svg';
import React from 'react'
export default class Head extends React.Component {


    render() {
        return (
            <div className="head">
                <div className="head_left">
                    <div>

                        IT<span>-精品学习网</span>

                    </div>
                    <div>


                        <img src={logoicon}/>
                        <a>
                            核心产品
                         </a>
                         <img src={logo}/>
                    </div>
                </div>

                <div className="head_right">

                        <ul>
                            <li>
                                <img src={logoicon}/>
                                <a>登陆</a>
                            </li>
                            <li>
                                <a>注册</a>
                            </li>
                        </ul>
                </div>
            </div>
        );
    }
}