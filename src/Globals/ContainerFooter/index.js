import React from "react";
import { Layout, Button } from "antd";
import { Link } from "react-router-dom"

const ContainerFooter = (props) => (
    <Layout.Footer>
        <Link to="/about-us">
            <Button type="link" style={{ margin: "2px 7px", color: "#646464" }}> About Us</Button>
        </Link>
        <Link to="/help">
            <Button type="link" style={{ margin: "2px 7px", color: "#646464" }}> Help Center</Button>
        </Link>
        <Link to="/contact-us">
            <Button type="link" style={{ margin: "2px 7px", color: "#646464" }}> Contact Us</Button>
        </Link>
        <Link to="/policy">
            <Button type="link" style={{ margin: "2px 7px", color: "#646464" }}> Privacy Policy</Button>
        </Link>
        <Link to="/blog">
            <Button type="link" style={{ margin: "2px 7px", color: "#646464" }}> Blog</Button>
        </Link>
        <Link to="/retail-login">
            <Button type="link" style={{ margin: "2px 7px", color: "#646464" }}> Retailer Login</Button>
        </Link>
        <ul className="social-link" style={{ display: "inline-block", listStyleType: "none", float: "right", fontSize: "20px" }}>
            <li style={{ float: "left", padding: "10px 5px" }}><i className="ion-social-facebook social-icon"></i></li>
            <li style={{ float: "left", padding: "10px 5px" }}><i className="ion-social-linkedin social-icon"></i></li>
            <li style={{ float: "left", padding: "10px 5px" }}><i className="ion-social-twitter social-icon"></i></li>
            <li style={{ float: "left", padding: "10px 5px" }}><i className="ion-social-skype social-icon"></i></li>
        </ul>
    </Layout.Footer>
)

export default ContainerFooter;