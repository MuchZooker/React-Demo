
import React from 'react'
import Head from './head/Head';
import HeadHint from './headhint/HeadHint'
import BannerTitle from './banner/BannerTitle'
import Banner from './banner/Banner'
import '../admin/Index.css'

class Index extends React.Component{



    render(){
        return (
            <div className="index_main_back">
                <Head></Head>
                <div className="div_line"></div>
                <HeadHint></HeadHint>
                <BannerTitle></BannerTitle>
                <Banner></Banner>
            </div>
        );
    }

}

export default Index

