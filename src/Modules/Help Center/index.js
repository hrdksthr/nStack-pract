import React, { Component } from "react";
import ContainerLayout from "Globals/ContainerLayout/index";
import ContainerHeader from "Globals/ContainerHeader/index";
import ContainerFooter from "Globals/ContainerFooter/index";
import titile_faqs from "assets/images/titile_faqs.png";
import gift_card_bg from "assets/images/gift_card_bg.png";

class AboutUs extends Component {
    render() {
        return (
            <div style={{ marginTop: "-20px" }}>
                <ContainerHeader />
                <ContainerLayout>
                    
            <div className="inner-page-hero bg-image" 
            style={{
                background: `url(${gift_card_bg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 aboutus_desc">
                            <div className="text-center white-txt">
                                <h6>
                                    <a href="#">FAQ</a>
                                </h6>
                                <p className="info_sub_text">We would love to hear from you! </p>
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
                                    <strong>Home / FAQ</strong>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>



            <div className="fa-point-work how-it-works bg-faqs-details">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-sm-8 col-sm-offset-2">
                            <div className="points-intro text-center">
                                <h1 className="wow fadeInDown">
                                    <img className="title_img" src={titile_faqs} alt="FAQ"/>
                                </h1>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-8  how-it-works-steps white-txt col-md-offset-2">
                            <div className="about_us">
                                <div className="about_details">
                                    <p>Indexfing and U Connect (we) provides this website under the following terms and conditions.
                                        By using Indexfing you must adhere to all guidelines, policies, terms, and conditions
                                        that apply to that service. This is a legally binding agreement, even if you are
                                        a visitor or aggregator. If you do not agree, promptly exit this site. You must adhere
                                        to all governing state and federal laws. Indexfing reserves the right to cancel orders
                                        or terminate accounts at its discretion.
                                    </p>

                                    <div className="faq_details">
                                        <div className="bd-example" data-example-id="">
                                            <div id="accordion" role="tablist" aria-multiselectable="true">
                                                <div className="card">
                                                    <div className="card-header" role="tab" id="headingOne">
                                                        <div className="mb-0">
                                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne" className="">
                                                                
                                                                <h3>Orders:</h3>
                                                                <i className="ion-ios-arrow-down f_arrow" aria-hidden="true"></i>
                                                            </a>

                                                        </div>
                                                    </div>

                                                    <div id="collapseOne" className="collapse in" role="tabpanel" aria-labelledby="headingOne"
                                                     aria-expanded="false" style={{}}>
                                                        <div className="card-block">
                                                            You agree to pay all prices/fees/taxes incurred by using Indexfing. We do not assume any liability for the actions or products
                                                            of any third party taking part in the production or delivery
                                                            of your order. If you choose cash as your method of payment,
                                                            you are agreeing to pay the restaurant in the form of U.S. dollars
                                                            at the time of delivery. By choosing the credit card option,
                                                            you are agreeing that you are authorized to use the credit card
                                                            being used in the purchase. You must include all information
                                                            we request, and it must be valid and must enable us to obtain
                                                            payment from you (e.g. valid credit card information). If Indexfing
                                                            does not receive payment from your credit card company, you agree
                                                            to pay the amount due when Indexfing requests it. The charges
                                                            listed on the website may be different than the final purchase
                                                            charges.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" role="tab" id="headingTwo">
                                                        <div className="mb-0">
                                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseOne" className="">
                                                                
                                                                <h3>Return and Delivery Policy
                                                                </h3>

                                                                <i className="ion-ios-arrow-down f_arrow" aria-hidden="true"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div id="collapseTwo" className="collapse in" role="tabpanel" aria-labelledby="headingTwo" aria-expanded="false">
                                                        <div className="card-block">
                                                            All pages within this Site and any material made available for download are the property of Company. The Site is protected
                                                            by United States and international copyright and trademark laws.
                                                            The contents of the Site, including without limitation the files,
                                                            documents, text, photographs, images, audio, and video, and any
                                                            materials accessed through or made available for use or download
                                                            through this Site ("Content") may not be copied, distributed,
                                                            modified, reproduced, published or used, in whole or in part,
                                                            except for purposes authorized or approved by Company, including
                                                            the provision of services or products to Company, or in connection
                                                            with a business relationship with Company. You may not frame
                                                            or utilize framing techniques to enclose, or deep linking to,
                                                            any name, trademarks, service marks, logo, Content or other proprietary
                                                            information (including; images, text, page layout, or form) of
                                                            Company without our express written consent.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" role="tab" id="headingThree">
                                                        <div className="mb-0">
                                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseOne" className="">
                                                                
                                                                <h3>U Connect Gift Cards Terms</h3>

                                                                <i className="ion-ios-arrow-down f_arrow" aria-hidden="true"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div id="collapseThree" className="collapse in" role="tabpanel" aria-labelledby="headingThree" aria-expanded="false">
                                                        <div className="card-block">
                                                            Gift Cards are not redeemable for cash. Gift Cards cannot be combined with cash. If your Gift Card does not cover the full
                                                            amount of the order, the remaining balance must be paid using
                                                            a credit or debit card. Gift Cards can only be used for restaurants
                                                            that accept credit and debit card orders. Gift Cards can be redeemed
                                                            on the Account Page and during the checkout process. Your Gift
                                                            Card Balance can be checked on the Account Page We reserve the
                                                            right to issue expiration dates on promotional Gift Card Codes
                                                            that are not directly purchased by you. Lost Gift Card Codes
                                                            may be replaced only with a valid proof of purchase. U Connect
                                                            shall have no responsibility or liability for Unauthorized use
                                                            of a Gift Card. Gift Card Balances may be transferred to a different
                                                            account only with valid proof of purchase. The balance will reflect
                                                            the balance shown in our records. Balance transfers will be processed
                                                            within 72 hours of valid proof of purchase.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" role="tab" id="headingOne">
                                                        <div className="mb-0">
                                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseOne" className="">
                                                                
                                                                <h3>Collapsible Group Item</h3>

                                                                <i className="ion-ios-arrow-down f_arrow" aria-hidden="true"></i>
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div id="collapseFour" className="collapse in" role="tabpanel" aria-labelledby="headingOne" aria-expanded="false" style={{}}>
                                                        <div className="card-block">
                                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                                            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                                                            laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a
                                                            bird on it squid single-origin coffee nulla assumenda shoreditch
                                                            et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                                                            cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                                                            vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                                            aesthetic synth nesciunt you probably haven't heard of them accusamus
                                                            labore sustainable VHS.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" role="tab" id="headingTwo">
                                                        <div className="mb-0">
                                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseOne" className="">
                                                                
                                                                <h3>Confidential Information</h3>

                                                                <i className="ion-ios-arrow-down f_arrow" aria-hidden="true"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div id="collapseFive" className="collapse in" role="tabpanel" aria-labelledby="headingTwo" aria-expanded="false">
                                                        <div className="card-block">
                                                            You acknowledge that the Site and the Content includes information which is confidential and proprietary to Company ("Confidential
                                                            Information"). Confidential Information includes Content or other
                                                            information marked as "Confidential" or similar label, as well
                                                            as any other Content or other information which you know or reasonably
                                                            should know is confidential or proprietary to Company. If you
                                                            are not sure whether Content is Confidential Information, please
                                                            contact an authorized Company employee for clarification and
                                                            do not disclose such Content to any third party until you receive
                                                            such clarification. You agree to keep all such Confidential Information
                                                            strictly confidential and to not disclose any such Confidential
                                                            Information to any third party without the advance written consent
                                                            of Company.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" role="tab" id="headingThree">
                                                        <div className="mb-0">
                                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseSix" aria-expanded="false" aria-controls="collapseOne" className="">
                                                                
                                                                <h3>Accuracy and Integrity of Information</h3>

                                                                <i className="ion-ios-arrow-down f_arrow" aria-hidden="true"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div id="collapseSix" className="collapse in" role="tabpanel" aria-labelledby="headingThree" aria-expanded="false">
                                                        <div className="card-block">
                                                            Although Company attempts to ensure the integrity and accurateness of the Site, it makes no representations, warranties or
                                                            guarantees whatsoever as to the correctness or accuracy of the
                                                            Site and Content thereon. It is possible that the Site could
                                                            include typographical errors, inaccuracies or other errors, and
                                                            that unauthorized additions, deletions and alterations could
                                                            be made to the Site by third parties. In the event that an inaccuracy
                                                            arises, please inform Company so that it can be corrected. Information
                                                            contained on the Site may be changed or updated without notice.
                                                            Additionally, Company shall have no responsibility or liability
                                                            for information or Content posted to the Site from any non-Company
                                                            affiliated third party.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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

export default AboutUs;