import React from "react";
import "./ArticlePreview.css";
import articleImage from "../assets/drawers.jpg";
import articleAuthorImage from "../assets/avatar-michelle.jpg";
import shareIcon from "../assets/icon-share.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import facebookIcon from "../assets/icon-facebook.svg";
import pinterestIcon from "../assets/icon-pinterest.svg";

const article = {
    title: "Shift the overall look and feel by adding these wonderful touches to furniture in your home",
    content: "Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.",
    author: "Michelle Appleton",
    date: "28 Jun 2020",
}

function ArticlePreview() {
    return (
        <div className="article-preview-wrapper">
            <div className="article-image">
                <img src={articleImage} alt="Article Image" />
            </div>
            <div className="article-content">
            <h2 className="article-title">{article.title}</h2>

            <p className="article-content-text">{article.content}</p>
            <div className="article-footer">
                <div className="article-author">
                    <img className="article-author-image" src={articleAuthorImage} alt="Article Author" />
                    <div className="article-author-info">
                        <h2 className="article-author-name">{article.author}</h2>
                        <p className="article-author-date">{article.date}</p>
                    </div>
                    <div className="article-share tooltip">
                        <img className="article-share-icon" src={shareIcon} alt="Share" />
                        {/* <span className="tooltiptext">
                            SHARE
                            <div className="social-icons">
                                <img src={twitterIcon} alt="Twitter" className="social-icon" />
                                <img src={facebookIcon} alt="Facebook" className="social-icon" />
                                <img src={pinterestIcon} alt="Pinterest" className="social-icon" />
                            </div>
                        </span> */}
                    </div>
                </div>
                <div className="mobile-socials-share">
                    <span className="mobile-socials-share-text">SHARE</span>
                    <div className="social-icons">
                    <img src={facebookIcon} alt="Facebook" className="social-icon" />
                        <img src={twitterIcon} alt="Twitter" className="social-icon" />
                        <img src={pinterestIcon} alt="Pinterest" className="social-icon" />
                    </div>
                    <img className="article-share-icon-mobile-active" src={shareIcon} alt="Share" />
                    
                </div>
            </div>
            </div>
        </div>
    );
}

export default ArticlePreview;
