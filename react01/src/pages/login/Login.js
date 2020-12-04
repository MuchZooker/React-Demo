import {Input} from 'antd'
import"antd/dist/antd.css"
import "../login/Login.css"
import React from "react"


class Login extends React.Component{


  render(){
    return(
      <div className="back_login">
              <div className="back_edit_login_input">

                <Input className="edit_login_username" size="large" placeholder="输入用户名"></Input>
                <Input className="edit_login_password" type="password" size="large" placeholder="输入密码"></Input>
              </div>
      </div>
  );
  }

}

// function Login(){
//     return(
//         <div className="back_login">
//                 <div className="back_edit_login_input">

//                   <Input className="edit_login_username" size="large" placeholder="输入用户名"></Input>
//                   <Input className="edit_login_password" type="password" size="large" placeholder="输入密码"></Input>
//                 </div>


//         </div>
//     );
// }
export default Login