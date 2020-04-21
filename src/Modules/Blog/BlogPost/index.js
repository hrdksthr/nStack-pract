import React from "react";

const BlogItem = props => (
    <div className="col-sm-4 col-md-4" key={props.title + Math.random()}>
        <div className="blog">
            <div className="blog-img-content big_blog">
                <img src={props.image} alt="" />
                <span className="blog-title">
                    <b>{props.title} </b>
                    <br />
                    <b>{props.desc}</b>
                </span>
            </div>
            <div className="content">
                <h2 className="blog_title">{props.name}</h2>
                <div className="author">
                    By
                                            <b>{props.writer}</b> |
                    <time dateTime="2014-01-20">{props.date}</time>
                </div>
                <div className="blog_text">
                    {props.info}
                </div>
                <br />
                <div className="text-left">
                    <a className="btn btn-action btn-gplus wow fadeInDown nomargin" data-wow-delay="0.3s"
                        style={{
                            visibility: "visible",
                            animationDelay: "0.3s",
                            animationName: "fadeInDown"
                        }}>
                        <span>
                            <i className="ion-ios-box"></i>
                        </span>
                        <span href="#">Read More</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
)

export default BlogItem;