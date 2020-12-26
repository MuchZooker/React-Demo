import React from "react";

import conten_css from "./index.css";
export default  class LeftTimeAxisItemContent extends React.Component {





    render() {
        return (
            <div className='left_content_layout'>
                        {
                             new Date().toLocaleDateString()
                        }
                        <h4>Dali's Blog Dali's Blog Dali's Blog Dali's Blog Dali's Blog Dali's Blog Dali's Blog Dali's BlogDali's Blog </h4>

                        <a>Learn more</a>
            </div>
        )
    }

}
