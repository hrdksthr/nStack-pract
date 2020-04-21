import React from "react";

const TrendingFood = (props) => {
    const { food: {
        foodId,
        image
    } } = props;
        const styleImage = {
            background: 'url("'+ image+'") center center/cover no-repeat',
            backgroundSize: 'contain'
        }
    
    return (
        <div className="item" key={foodId}>
            <div className="col-xs-12 col-sm-12 col-md-12 food-item">
                <div className="food-item-wrap">
                    <a href="search_list_new_foods.html">
                        <div className="figure-wrap bg-image" style={styleImage} >
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default TrendingFood;