import React from "react";
import item_css from "../blogitem/index.css";
import LeftTimeAxisItemContent from "./leftcontent/index";
import RightTimeAxisItemContent from './rightcontent/index'

class TimeAxisItem extends React.Component {





    render() {
        return (
            <div className='axis_container'>

                <div className='left_boxcontainer'>

                    {this.props.position % 2 == 0 ?
                            <LeftTimeAxisItemContent></LeftTimeAxisItemContent> : null
                    }
                </div>
                <div className='center_linecontainer'>
                    <div>
                        <div>

                        </div>
                    </div>

                </div>
                <div className='right_boxcontainer'>
                    {this.props.position % 2 != 0 ?
                            <RightTimeAxisItemContent></RightTimeAxisItemContent>
                      
                        : null
                    }

                </div>
            </div>
        )
    }

}
export default TimeAxisItem