import React from 'react'
import '../widget/bannermenu.css'
import toolbar_bannericon from '../resource/index_banner_def.png'
import banner_page_last from '../resource/banner_page_last.png'
import banner_page_next from '../resource/banner_page_next.png'
export default class BannerMenu extends React.Component {
    render() {
        return (
            <div className='banner_out'>
                <div className='banner_left_menu'>
                  

                </div>
                <div className='banner_imgs'>
                    {/* <img src={toolbar_bannericon}></img> */}
                </div>
                <div className='banner_right_menu'>
                    <div className='banner_right_menu_item'>
                        
                    </div>
                    <div className='banner_right_page_bor'>
                           <div className='page_last'>
                                <img src={banner_page_last}></img>
                           </div>
                           <div className='page_next'>
                                <img src={banner_page_next}></img>
                           </div>

                    </div>
                </div>
            </div>
        )
    }
}