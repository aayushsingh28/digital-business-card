import React from "react";
import fbImg from "../images/Facebook-logo.png"
import instaImg from "../images/Instagram-logo.webp"
import githubImg from "../images/Github-logo.png"
import twtImg from "../images/Twitter-logo.jpeg"

export default function Footer() {
    return (
        <div className="footer-section">
            <a href="https://twitter.com/aayush_singhh" className="twitter footer-btn" target='_blank'>
                <img src={twtImg} alt="" className="socials-logo" />
            </a>
            <a href="https://www.facebook.com/aayush.2806/" className="facebook footer-btn" target='_blank'>
                <img src={fbImg} alt="" className="socials-logo"/>
            </a>
            <a href="https://www.instagram.com/aayush.singhhh/" className="instagram footer-btn" target='_blank'>
                <img src={instaImg} alt="" className="socials-logo" />
            </a>
            <a href="https://github.com/aayushsingh28" className="github footer-btn" target='_blank'>
                <img src={githubImg} alt="" className="socials-logo" />
            </a>
        </div>
    )
}