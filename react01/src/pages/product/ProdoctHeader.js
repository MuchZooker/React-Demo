import React from "react"
import '../product/ProductHeader.css'

class ProductHeader extends React.Component {


  render() {
    return (
      <div className="back_product_title">
        <div className="product_back">
         返回
        </div>
     
     <div className="product_title">
     <h1>标题</h1>
     </div>
        <div className="product_menu">
         菜单
          </div>

      </div>
    );
  }

}
export default ProductHeader