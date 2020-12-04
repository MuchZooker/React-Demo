import React from 'react'
import NavHeader from '../admin/NavHeader'
import ManagerBox from '../admin/ManagerBox'
import './css/Manager.css'
import Foot from './Foot'

class Manager extends React.Component{
    render(){

        return (
            <div className="container">
                <NavHeader></NavHeader>
                <ManagerBox></ManagerBox>
                <Foot></Foot>

            </div>
        );
    }
}
export default Manager