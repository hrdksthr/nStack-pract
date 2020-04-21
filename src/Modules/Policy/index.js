import React, { Component } from "react";
import ContainerLayout from "Globals/ContainerLayout/index";
import ContainerHeader from "Globals/ContainerHeader/index";
import ContainerFooter from "Globals/ContainerFooter/index";
import gift_card_bg from "assets/images/gift_card_bg.png";
import ic_title_policy from "assets/images/ic_title_policy.png";

class Policy extends Component {
    render() {
        return (
            <div style={{ marginTop: "-20px" }}>
                <ContainerHeader />
                <ContainerLayout>
                <div className="inner-page-hero bg-image" style={{
                    background: `url(${gift_card_bg})`,
                    backgroundPosition: "center center",
                    backgroundSize: "contain"
                }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 aboutus_desc">
                            <div className="text-center white-txt">
                                <h6>
                                    <a href="#">Policy</a>
                                </h6>
                                <p className="info_sub_text">We're committed to protecting the privacy of our users. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="result-show m-0">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3">
                            <p>
                                <span className="">
                                    <strong>Home / Policy</strong>
                                </span>
                            </p>
                        </div>
                        <div className="col-sm-9 text-right">
                            <a className="btn btn-action btn-gplus wow fadeInDown nomargin" data-wow-delay="0.3s"
                             style={{ 
                                 visibility: "visible", animationDelay: "0.3s", animationName: "fadeInDown"}}>
                                <span>
                                    <i className="ion-ios-box"></i>
                                </span>
                                <span href="#">Contact Us</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>



            <div className="fa-point-work how-it-works bg-aboutus">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-sm-8 col-sm-offset-2">
                            <div className="points-intro text-center">
                                <h1 className="wow fadeInDown">
                                    <img className="title_img" src={ic_title_policy} alt="title" />
                                </h1>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-8  how-it-works-steps white-txt col-md-offset-2">
                            <div className="about_us">
                                <div className="about_details">
                                    <p>Indexfing and U Connect ("we") are committed to protecting the privacy of their users.
                                        This privacy policy describes how we will protect your personal information.
                                    </p>
                                    <p className="p_title">Security:</p>
                                    <p>We are committed to the security of our users and use standard encryptions to protect
                                        all data being sent and received on our site. Our servers help protect all information
                                        being collected on our website.</p>

                                    <p className="p_title">Information we collect::</p>
                                    <p>Indexfing collects personal and ordering information provided by the user when they place
                                        an order or register with our website. This information includes (without limitation)
                                        names, addresses, email addresses, telephone numbers, age, date of birth, restaurant
                                        preferences and credit card information. We use such information to provide services
                                        on our website that is convenient to our users. If requested, we may provide you
                                        your account's contact information and transaction history.</p>

                                    <p className="p_title">Information Sharing::</p>
                                    <p>Indexfing will not share your personal information such as your telephone numbers and
                                        email addresses with third parties for their own use.</p>

                                    <p>When you place an order on Indexfing, we give the restaurant and delivery service all
                                        information relevant information. This likely includes (without limitation) the food
                                        order, your name, delivery address, telephone numbers, email addresses, and credit
                                        card information (if a credit card is used).
                                    </p>
                                    <p>Our customer service center may contact you using your telephone numbers or email addresses
                                        for customer service issues.</p>

                                    <p className="p_title">Cookies:</p>
                                    <p>Our website uses "cookies", which store many types of data, to make your experience easier
                                        and more enjoyable. Indexfing uses cookies to store information such as your order
                                        information, location, and personal preferences. You may set your browser to refuse
                                        these cookies by seeing the help section of your browser.

                                    </p>

                                    <p className="p_title">Children Privacy:</p>
                                    <p>Indexfing does not direct or target any piece of its website or services to children
                                        under the age of 13. If you believe a child has provided us with personal information
                                        other than an email address, please contact us at customer.service@Indexfing.com.
                                        We will make reasonable efforts to remove such information from our databases.

                                    </p>

                                    <p className="p_title">Consent; Changes; Applicability:</p>
                                    <p>Because the methods used to protect your private information and the services we provide
                                        are continually evolving, our privacy policy may change at any time. If changes are
                                        made to our privacy policy we will make it known on Indexfing. We recommend that
                                        users look at the privacy policy from time to time to review such changes. If you
                                        do not agree with this privacy policy, please do not disclose any personal information
                                        to Indexfing.
                                    </p>
                                    <p>This privacy policy applies only to Indexfing, not to any advertisers, vendors, or third
                                        parties that are shown or linked with Indexfing. If you provide personal information
                                        to these third parties you are doing so at your own risk.
                                    </p>

                                    <span className="big_text">See our Terms of Use</span>

                                    <p>Questions or Comments should be directed to indexfing
                                        <br /> customer.service@indexfing.com
                                        <br /> 316 W. Washington Ave. Suite 725
                                        <br /> Madison, WI 53703
                                        <br /> (866) 654-8777
                                        <br /> March 1 2018 © 2018 indexfing, Inc</p>
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

export default Policy;