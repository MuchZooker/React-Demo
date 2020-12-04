

import React from "react"
import "../product/ProductItem.css"

class ProductItem extends React.Component {


  render() {
    const { pic, name, bussiness, price } = this.props.data;
    return (
      <div className="productItem">
        <div className="productItem__picContainer">
          <img className="productItem__pic" />
        </div>
        <div className="productItem_content">
          <div className="productItem__name">{name}</div>

          <div className="productItem__businessName">{bussiness}</div>

          <div className="productItem_detail">
            <div className="productItem__price">{price}</div>
            <div >

              <button className="productItem__feedback productItem__feedback--red">
                评价
                </button>
            </div>
          </div>
        </div>
      
      </div>

    );
  }

}
export default ProductItem