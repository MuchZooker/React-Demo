import React from 'react'
import '../widget/bannermenu.css'
import toolbar_bannericon from '../resource/index_banner_def.png'
import banner_page_last from '../resource/banner_page_last.png'
import banner_page_next from '../resource/banner_page_next.png'
export default class BannerMenu extends React.Component {

        constructor(props){
            super(props)
            this.state={
                newPageCurrentPage:0,//当前new划到第几页
                newPageData:[
                    {title:'learn English',content:'img elements must have an alt prop, either with meaningful text'},
                     {title:'learn React',content:'React makes it painless to create interactive UIs. Design simple '},
                     {title:'learn Vue',content:'An incrementally adoptable ecosystem that scales between a library and a full-featured framework'}
                ]
            }
        }
        

        componentDidMount(){
          this.intervalTime= setInterval(()=>{
                 var page=this.state.newPageCurrentPage+1
                 if (page>this.state.newPageData.length-1) {
                     page=0
                 }
                this.setState({
                    newPageCurrentPage:page
                })
            },3000)
        }
        componentWillUnmount(){
            clearInterval(this.intervalTime)
        }




    render() {
        return (
            <div className='banner_out'>
                <div className='banner_left_menu'>

                    <div className='banner_left_news_container'>
                        <h2>{(this.state.newPageCurrentPage+1)+'.'}</h2>
                        <hr/>
                        <div className='banner_left_news_container_title'>{this.state.newPageData[this.state.newPageCurrentPage].title}</div>
                        <span>{this.state.newPageData[this.state.newPageCurrentPage].content}</span>
                    </div>                  
                    <div className='banner_left_new_page'>
                        {
                            this.state.newPageData.map((item,index)=>{       
                                    return <input readOnly={true} key={index} type='checkbox' checked={index==this.state.newPageCurrentPage}/>
                            })
                        }
                    </div>
                </div>
                <div className='banner_imgs'>
                    <img src="https://c-ssl.duitang.com/uploads/item/202004/11/20200411172442_rmcmj.thumb.1000_0.jpg"></img>
                </div>
                <div className='banner_right_menu'>
                    <div className='banner_right_menu_item'>
                        <h1>Image Hint</h1>
                        <p>img elements must have an alt prop, either with meaning</p>
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