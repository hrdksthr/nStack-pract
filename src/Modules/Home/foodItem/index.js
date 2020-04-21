import React from "react";

const FoodItem = (props) => {
    const styleImage = {
        background: 'url("' + props.image + '") center center/cover no-repeat',
        backgroundSize: 'contain'
    }
    return (
        <div className="item" key={props.name + Math.random()}>
            <div className="col-xs-12 col-sm-12 col-md-12 food-item">
                <div className="food-item-wrap">
                    <div className="figure-wrap bg-image" style={styleImage}>
                        <div className="treding">
                            <a href="#" className="treding-icon">
                                <i className="ion-android-share-alt group_icon"></i>
                                {props.share}
                            </a>
                            <a href="#" className="treding-icon">
                                <i className="ion-eye group_icon"></i>
                                {props.view}
                            </a>
                            <a href="#" className="treding-icon">
                                <i className="ion-bag group_icon"></i>
                                {props.bag}
                            </a>
                        </div>
                        <div className="review pull-right">
                            <a href="#" className="treding-icon">
                                <i className="ion-ios-star-outline group_icon"></i>
                                {props.ios_star}
                            </a>
                            <a href="#" className="treding-icon">
                                <i className="ion-ios-chatbubble-outline group_icon"></i>
                                {props.ios_chat}
                            </a>
                        </div>
                    </div>
                    <div className="content">
                        <h5>
                            <a href="product_page.html">
                                {props.name}
                            </a>
                        </h5>
                        <div className="product-name">{props.weight} KG </div>
                        <div className="price-btn-block">
                            <span className="price_cut">Rs {props.cut_price}</span>
                            <span className="price">Rs {props.price}</span>
                            <a href="#" className="theme-btn-dash pull-right">
                                <i className="ion-ios-cart-outline"></i> 
                                Add to cart
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodItem;