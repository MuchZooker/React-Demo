import { Button } from 'antd'
import "antd/dist/antd.css"
import React from 'react'
import MainItem from "../main/MainItem"
// function Main(){

//     return (

//         <Button type="primary"> 
//             测试
//         </Button>

//     );
// }
// export default Main


class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            listData: [
                "learn english",
                "learn jpa",
            ],
            inputValue: ""
        }
        this.handlerBtnClick = this.handlerBtnClick.bind(this);
        this.handlerInputChange = this.handlerInputChange.bind(this);
        this.hanlderItemClick = this.hanlderItemClick.bind(this);
    }

    handlerBtnClick() {

        // alert("click")

        this.setState({
            listData: [
                ...this.state.listData,
                this.state.inputValue
            ],
            inputValue: ""
        })
        // this.state.listData.push("data");
    }
    handlerInputChange(e) {
        // console.log(e.target.value);
        this.setState({
            inputValue: e.target.value
        })
    }
    hanlderItemClick(index) {
        const list = [...this.state.listData]

        list.splice(index, 1)
        this.setState({
            listData: list
        })
    }





    render() {
        return (
            <div>

                <div>
                    <input value={this.state.inputValue} onChange={this.handlerInputChange} />
                    <Button onClick={this.handlerBtnClick} type="primary">测试</Button>
                </div>

                <ul>
                    {
                        this.state.listData.map((item, index) => {
                            // return <li key={index} onClick={this.hanlderItemClick.bind(this,index)}>{item}</li>
                            return (
                                <MainItem
                                    delete={this.hanlderItemClick}
                                    key={index}
                                    content={item}
                                    posi={index} />
                            );
                        })
                    }
                </ul>

            </div>
        );
    }
}
export default Main