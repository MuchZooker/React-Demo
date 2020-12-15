import React from 'react'
import '../widget/hometoolbar.css'
import toolbarserchicon from '../resource/toolbar_search.png'
import toolbar_menuicon from '../resource/toolbar_menu.png'
export default class HomeToolBar extends React.Component {
    render() {
        return (
            <div className='toolbar'>
                <div className='toolbar_container'>
                    <span className='icon_logo'>Scode</span>
                    {/* <div className='toolbar_right_model'> */}
                    <span className='title_model'>Blog</span>
                    <span className='title_model'>Docs</span>
                    <span className='title_model'>DownLoad</span>
                    <span className='title_model'>About</span>
                    {/* </div> */}


                    <div className='toolbar_model_menu'>
                        <span className='toolbar_model_menu_item'>EN</span>
                        <img className='toolbar_model_menu_item' src={toolbarserchicon}></img>
                        <img className='toolbar_model_menu_item' src={toolbar_menuicon}></img>
                    </div>
                </div>
            </div>
        )
    }
}


