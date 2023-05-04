import React, { useState, useEffect } from 'react';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);

  useEffect(() => {
    const apiKey = '66f9a8345411485e9f78c90e3a635879';
    const url = `https://newsapi.org/v2/everything?q=cpr%20certification%20OR%20health%20AND%20safety%20cpr&apiKey=${apiKey}`;

    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.articles))
      .catch(error => console.log(error));
  }, []);

  const nextArticle = () => {
    if (currentArticleIndex < articles.length - 1) {
      setCurrentArticleIndex(currentArticleIndex + 1);
    }
  };

  const previousArticle = () => {
    if (currentArticleIndex > 0) {
      setCurrentArticleIndex(currentArticleIndex - 1);
    }
  };

  return (
    <div className="news-container">
      <h2>Latest News</h2>
      {articles.length > 0 && (
        <div className="article-container">
          <h3 className="article-title">{articles[currentArticleIndex].title}</h3>
          <p className="article-description">{articles[currentArticleIndex].description}</p>
          <div className="button-container">
            <button className="previous-button" onClick={previousArticle} disabled={currentArticleIndex === 0}>Previous Article</button>
            <button className="next-button" onClick={nextArticle} disabled={currentArticleIndex === articles.length - 1}>Next Article</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;

