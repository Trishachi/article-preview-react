import React from "react";
import "./ArticlePreview.css";
import articleImage from "../assets/drawers.jpg";
import articleAuthorImage from "../assets/avatar-michelle.jpg";
import shareIcon from "../assets/icon-share.svg";

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
                    <img className="article-share-icon" src={shareIcon} alt="Share" />
                </div>
            </div>
            </div>
        </div>
    );
}

export default ArticlePreview;
