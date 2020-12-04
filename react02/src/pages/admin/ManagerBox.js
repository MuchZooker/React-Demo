import React from 'react'
import './css/ManagerBox.css'
const list = ["最新", "包装设计", "平面模特", "水果生鲜", "山野景色", "城市繁华", "乡野人情", "汽车摄影", "数码电器", "文具文物", "生活", "人文地理", "大自然", "工业风", "简奢风", "自然风", , "汽车摄影", "数码电器", "文具文物", "生活"]
class ManagerBox extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            data: list
        }
    }


    itemSelectClick(index) {
        console.log(index);
        const data1 = this.state.data
        data1.pop()
        this.setState(
            {
                data: data1
            }
        )
    }

    render() {
        return (
            <div className="index-box">


                <div className="box_title">
                    花瓣，陪你做生活的设计师
                </div>
                <div className="box_hint">
                    现在每天超过 100 万专业设计师和生活的设计师们使用花瓣浏览器采集工具从全球网站采集超过 200 万灵感图片，在花瓣上线以来，已有超过 20 亿的采集被数千万花瓣用户采集到花瓣上，他们是花瓣真正的创造者
                </div>

                <div className="box_search">
                    <input type="text" placeholder="每天超过 3000 万人次通过花瓣搜索灵感" />
                    <button>搜索</button>
                </div>

                <div className="explore">
                    <ul>
                        {
                            this.state.data.map((item, index) => {
                                return <li key={index} className="explore-tag" >{item}</li>
                            })
                        }
                    </ul>

                </div>

                <div className="random_changebox">
                    <span className="random_change" onClick={() => this.itemSelectClick(0)}>
                        <img src="https://huaban.com/img/icon_random_light.svg"></img>
                &nbsp;换一批
                </span>

                </div>


            </div>
        );
    }
}
export default ManagerBox