import React from "react"
import ProductHeader from "./ProdoctHeader";
import ProductItem from "./ProductItem";
import "../product/Product.css"


class Product extends React.Component{



  constructor(props){
    super(props);
    this.state={
      listData:[
        {pic:"",name:"米饭",bussiness:"肯德基",price:2},
        {pic:"",name:"白米饭",bussiness:"麦当劳",price:3}
      ]
    }
  }



  render(){
    return(
      <div>
            <ProductHeader></ProductHeader>
        
            {
              this.state.listData.map((item)=>{
              return  (<ProductItem data={item}></ProductItem>);
              })
            }
         
           
          
      </div>
  );
  }

}
export default Product