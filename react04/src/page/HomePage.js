import React from 'react'
import HomeToolBar from '../widget/HomeToolBar'
import BannerMenu from '../widget/BannerMenu'

export default class HomePage extends React.Component{
    render(){
        return(
            <div>
                <HomeToolBar>
                </HomeToolBar>

                <BannerMenu>

                </BannerMenu>
            </div>
        )
    }
}
