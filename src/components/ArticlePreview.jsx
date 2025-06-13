import React from "react";
import "./ArticlePreview.css";
import articleImage from "../assets/drawers.jpg";

function ArticlePreview() {
    return (
        <div className="article-preview-wrapper">
            <div className="article-image">
                <img src={articleImage} alt="Article Image" />
            </div>
            <div className="article-content">
            <h2 className="article-title">Shift the overall look and feel by adding these wonderful 
  touches to furniture in your home</h2>

  <p className="article-content-text">Ever been in a room and felt like something was missing? Perhaps 
  it felt slightly bare and uninviting. I’ve got some simple tips 
  to help you make any room feel complete.</p>

            </div>
            <div className="article-footer">
                <div className="article-author">
                    <img src="" alt="" />
                    <div className="article-author-info">
                        <h2>Michelle Appleton</h2>
                        <p>28 Jun 2020</p>
                    </div>
                </div>
                <button>Share</button>
            </div>
        </div>
    );
}

export default ArticlePreview;
