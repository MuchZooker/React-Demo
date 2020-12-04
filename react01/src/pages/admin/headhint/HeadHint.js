
import React from 'react'
import '../headhint/HeadHint.css'
class HeadHint extends React.Component{

    render(){
        return (
            <div className="head_logo">
                <div className="head_logo_left">
                    <img src="https://cdn2.lmonkey.com/94f152aaa94d937ccf5de78f3fcac59f/3b6e32e7bc8145a283431f260c3c1d1a.png">
                    </img>
                </div>
                
                <div className="head_logo_right">
                    <img src="https://www.lmonkey.com/assets/img/brand/slogen.png">
                    </img>
                </div>
            </div>
        );
    }
}

export default HeadHint