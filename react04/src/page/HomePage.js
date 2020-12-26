import React from 'react'
import HomeToolBar from '../widget/HomeToolBar'
import BannerMenu from '../widget/BannerMenu'
import HomeShowMore from '../widget/HomeShowMore'

export default class HomePage extends React.Component{
    render(){
        return(
            <div>
                <HomeToolBar>
                </HomeToolBar>

                <BannerMenu>

                </BannerMenu>
                <HomeShowMore>

                </HomeShowMore>
                
            </div>
        )
    }
}
