import React from "react";

import "./index.css";
export default  class RightTimeAxisItemContent extends React.Component {





    render() {
        return (
            <div className='right_content_layout'>
                        {
                             new Date().toLocaleDateString()
                        }
                        <h4>Dali's Blog Dali's Blog Dali's Blog Dali's Blog Dali's Blog Dali's Blog Dali's Blog Dali's BlogDali's Blog</h4>

                        <a>Learn more</a>
            </div>
        )
    }

}
