import React from "react";

const categoryItemRenderer = (props) => {
    const styleImage = {
        background: 'url("'+props.image+'") center center/cover no-repeat',
        backgroundSize: 'contain',
        width: "65px",
        margin: "15px auto",
        height: "65px"
    }
    return (

        <div className="item" key={props.name}>
            <div className="col-xs-12 col-sm-12 col-md-12 food-item">
                <div className="food-item-wrap">
                    <div className="figure-wrap-brand bg-image" style={styleImage}>
                    </div>
                    <div className="content">
                        {props.name}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default categoryItemRenderer;