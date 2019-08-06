import React from "react";
import { Link } from "@reach/router";
import styles from './ArticleCard.module.css'

const ArticleCard = ({ articles }) => {
    const body = articles.body.slice(0, 100)
    return (
        <div>
            <li key={articles.article_id} className={styles.articlaCard}>
                <Link to={`/articles/${articles.article_id}`}>
                    <h2>{articles.title}</h2> </Link>
                <h5>{body}...</h5>
                <Link to={`/articles/topic/${articles.topic}`}>
                    <h5>Topic: {articles.topic}</h5></Link>
                <h4>Author: {articles.author}</h4>
                <h4>Submitted on: {articles.created_at}</h4>
                <h4>Comments:{articles.comment_count}</h4>
            </li>
        </div>
    )
}

export default ArticleCard