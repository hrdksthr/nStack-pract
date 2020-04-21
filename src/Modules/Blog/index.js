/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import ContainerLayout from "Globals/ContainerLayout/index";
import ContainerHeader from "Globals/ContainerHeader/index";
import ContainerFooter from "Globals/ContainerFooter/index";
import gift_card_bg from "assets/images/gift_card_bg.png";
import blog1 from "assets/images/blog1.png";
import blog2 from "assets/images/blog2.png";
import blog4 from "assets/images/blog4.png";
import blog3 from "assets/images/blog3.png";
import { inject, observer } from "mobx-react";
import BlogItem from "./BlogPost/index";

@observer
class Blog extends Component {
    render() {
        const {
            blog: {
                blogItems
            }
        } = this.props
        return (
            <div style={{ marginTop: "-20px" }}>
                <ContainerHeader />
                <ContainerLayout>
                    <div className="inner-page-hero bg-image"
                        style={{
                            background: `url(${gift_card_bg})`,
                            backgroundPosition: "center center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat"
                        }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-12 aboutus_desc">
                                    <div className="text-center white-txt">
                                        <h6>
                                            <a href="#">Blog</a>
                                        </h6>
                                        <p className="info_sub_text">Grocery to eatery </p>
                                        <br />
                                        <p className="info_sub_text">Top 20 Festival Foods In India</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="blog_bg">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-9">
                                    {blogItems.map(item => BlogItem(item))}
                                </div>
                                <div className="col-sm-3">
                                    <div className="blog_right">
                                        <div className="date_new_update">
                                            <h1 className="b_t_date">March 15, 2020</h1>
                                            <h3 className="b_d_text">Sunday</h3>
                                        </div>

                                    </div>

                                    <div className="blog_right">
                                        <div className="c_header">
                                            Popular Categories
                                </div>
                                        <div className="c_body">
                                            <ul className="blog_categories">
                                                <li> <a href="#"> Food  (12) </a></li>
                                                <li> <a href="#"> India  (12) </a></li>
                                                <li> <a href="#"> Most Popular  (12) </a></li>
                                                <li> <a href="#"> Best Places To Eat At (12) </a></li>
                                                <li> <a href="#"> Quick Snacks  (12) </a></li>
                                                <li> <a href="#"> Recipes  (12) </a></li>
                                                <li> <a href="#"> Yummy Recipes (12) </a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="blog_right">
                                        <div className="c_header">
                                            Most Popular
                                </div>
                                        <div className="c_body">
                                            <div className="blog_small_item">
                                                <div className="row">
                                                    <div className="col-sm-4">
                                                        <div className=" pull-left">
                                                            <a className="pull-left" href="#">
                                                                <img className="blog_small_img" src={blog1} alt="" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-8">
                                                        <div className="blog_small_descr">
                                                            <h6>
                                                                <a href="#">Diwali</a>
                                                            </h6>
                                                            <p> Diwali is one such festival where a wife allows her husband who has diabetes to eat his heart...</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="blog_small_item">
                                                <div className="row">
                                                    <div className="col-sm-4">
                                                        <div className=" pull-left">
                                                            <a className="pull-left" href="#">
                                                                <img className="blog_small_img" src={blog2} alt="" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-8">
                                                        <div className="blog_small_descr">
                                                            <h6>
                                                                <a href="#">Durga Puja</a>
                                                            </h6>
                                                            <p> Diwali is one such festival where a wife allows her husband who has diabetes to eat his heart...</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="blog_small_item">
                                                <div className="row">
                                                    <div className="col-sm-4">
                                                        <div className=" pull-left">
                                                            <a className="pull-left" href="#">
                                                                <img className="blog_small_img" src={blog3} alt="" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-8">
                                                        <div className="blog_small_descr">
                                                            <h6>
                                                                <a href="#">Janmashtami</a>
                                                            </h6>
                                                            <p> Diwali is one such festival where a wife allows her husband who has diabetes to eat his heart...</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="blog_small_item">
                                                <div className="row">
                                                    <div className="col-sm-4">
                                                        <div className=" pull-left">
                                                            <a className="pull-left" href="#">
                                                                <img className="blog_small_img" src={blog4} alt="" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-8">
                                                        <div className="blog_small_descr">
                                                            <h6>
                                                                <a href="#">Diwali</a>
                                                            </h6>
                                                            <p> Diwali is one such festival where a wife allows her husband who has diabetes to eat his heart...</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog_right">
                                        <div className="c_header">
                                            Stay Connected
                                </div>
                                        <div className="c_body">
                                            <div className="td_social_type td-pb-margin-side td_social_facebook">
                                                <div className="td-social-box">
                                                    <div className="td-sp td-sp-facebook td-sp-fb"></div>
                                                    <span className="td_social_info">34,042</span>
                                                    <span className="td_social_info td_social_info_name">Fans</span>
                                                    <span className="td_social_button">
                                                        <a href="https://www.facebook.com/Crazymasalafood" target="_blank">Like</a>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="td_social_type td-pb-margin-side td_social_twitter">
                                                <div className="td-social-box">
                                                    <div className="td-sp td-sp-facebook td-sp-tw"></div>
                                                    <span className="td_social_info">34,042</span>
                                                    <span className="td_social_info td_social_info_name">Fans</span>
                                                    <span className="td_social_button">
                                                        <a href="https://www.facebook.com/Crazymasalafood" target="_blank">Follow</a>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="td_social_type td-pb-margin-side td_social_youtube">
                                                <div className="td-social-box">
                                                    <div className="td-sp td-sp-facebook td-sp-ytube"></div>
                                                    <span className="td_social_info">34,042</span>
                                                    <span className="td_social_info td_social_info_name">Fans</span>
                                                    <span className="td_social_button">
                                                        <a href="https://www.facebook.com/Crazymasalafood" target="_blank">Subscribe</a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ContainerLayout >
                <ContainerFooter />
            </div >
        )
    }
}

export default inject("blog")(Blog);