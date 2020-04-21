import React, { Component } from "react";
import ContainerLayout from "Globals/ContainerLayout/index";
import ContainerHeader from "Globals/ContainerHeader/index";
import ContainerFooter from "Globals/ContainerFooter/index";
import { observer, inject } from "mobx-react";
import categoryItemRenderer from "./caterogyItem/index";
import FoodItem from "./foodItem/index";
import OwlCarousel from 'react-owl-carousel';
import TrendingFood from "./trendingFood/index";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

@observer
class Home extends Component {
    componentDidMount() {
        const {
            food: {
                getFoodList
            }
        } = this.props;
        getFoodList("apple")
    }
    render() {
        const {
            food: {
                categories,
                fooditems,
                trendingFoods
            }
        } = this.props;
        return (
            <div style={{ marginTop: "-20px" }}>
                <ContainerHeader />
                <ContainerLayout>
                    <div className="hero">
                        <div className="container text-center hero-text font-white s_box">
                            <div className="row">
                                <h5 className="header_white">Discover
                            <span className="clr_green">food</span> or
                            <span className="clr_orange">grocery</span>
                                    <br />near by you</h5>
                                <div className="banner-form">
                                    <form className="form-inline" style={{ marginLeft: "230px" }}>
                                        <div className="form-group" style={{ width: "80%" }}>
                                            <div className="home-bg-icon"></div>
                                            <i className="ion-ios-search-strong icon-search"></i>
                                            <input type="text" className="form-control form-control-lg input_box" id="exampleInputAmount" placeholder="Enter food or grocery" />
                                            <div className="can-toggle demo-rebrand-1">
                                                <input id="d" type="checkbox" />
                                                <label htmlFor="d">
                                                    <div className="can-toggle__switch" data-checked="Grocery" data-unchecked="Food">
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        <div className="home-header-text">
                            <h1 className="wow fadeInDown">
                                Categories
                            </h1>
                        </div>

                        <OwlCarousel
                            className="owl-theme"
                            items={7}
                            itemsDesktop={[1199, 3]}
                            itemsDesktopSmall={[979, 3]}
                            nav
                            navText={["<i class='ion-ios-arrow-back icon_arrow'></i>", "<i class='ion-ios-arrow-forward icon_arrow'></i>"]}
                            rewind
                            pagination={false}
                            scrollPerPage={false}
                            autoPlay
                            autoplayTimeout={30000}
                        >
                            {categories.map(item => categoryItemRenderer(item))}
                        </OwlCarousel>


                        <div className="home-header-text">
                            <h1 className="wow fadeInDown title-top-space">
                                Trending Grocery
                            </h1>
                        </div>
                        <OwlCarousel
                            className="owl-theme"
                            items={6}
                            itemsDesktop={[1199, 3]}
                            itemsDesktopSmall={[979, 3]}
                            nav
                            navText={["<i class='ion-ios-arrow-back icon_arrow'></i>", "<i class='ion-ios-arrow-forward icon_arrow'></i>"]}
                            rewind
                            pagination={false}
                            scrollPerPage={false}
                            autoPlay
                            autoplayTimeout={30000}
                        >
                            {fooditems.map(item => FoodItem(item))}
                        </OwlCarousel>
                        {trendingFoods && trendingFoods.length ? (
                            <div>
                                <div className="home-header-text">
                                    <h1 className="wow fadeInDown title-top-space">
                                        Trending Foods
                            </h1>
                                </div>
                                <OwlCarousel
                                    className="owl-theme"
                                    items={6}
                                    itemsDesktop={[1199, 3]}
                                    itemsDesktopSmall={[979, 3]}
                                    nav
                                    navText={["<i class='ion-ios-arrow-back icon_arrow'></i>", "<i class='ion-ios-arrow-forward icon_arrow'></i>"]}
                                    rewind
                                    pagination={true}
                                    scrollPerPage={false}
                                    autoPlay
                                    lazyLoad={true}
                                    autoplayTimeout={30000}
                                >
                                    {trendingFoods.map(item => TrendingFood(item))}
                                </OwlCarousel>
                            </div>
                        ): null}

                    </div >
                </ContainerLayout >
                <ContainerFooter />
            </div >
        )
    }
}

export default inject("food")(Home)