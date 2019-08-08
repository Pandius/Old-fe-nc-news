import React, { Component } from 'react';
import { getArticleById } from '../../api'
import Loading from '../../utils/Loading/Loading';
import ErrorPage from '../../utils/ErrorPage/ErrorPage';
import dateFormat from '../../utils/DateFormat'
import styles from '../Article/Article.module.css'
import Voter from '../Voter/Voter'
import ArticleComments from '../ArticleComments/ArticleComments'

class Article extends Component {
    state = {
        article: {},
        isLoading: true,
        err: null
    }

    componentDidMount() {
        this.fetchArticleById()
    }

    fetchArticleById = () => {
        const { article_id } = this.props
        getArticleById(article_id).then(article => {
            this.setState({ article: article, isLoading: false })
        }).catch(err => {
            this.setState({ err, isLoading: false })
        })
    }

    render() {
        const { article, isLoading, err } = this.state
        const { loggedInAs, article_id } = this.props

        if (err) return <ErrorPage err={err} />
        if (isLoading) return <Loading text='Loading article...' />

        return (
            <div className={styles.singleArticle}>
                <h2>{article.title}</h2>
                <p>{article.body}</p>
                <h4>Author:{article.author}</h4>
                <h4>Topic: {article.topic}</h4>
                <h4>Comments: {article.comment_count}</h4>
                <h4>Submitted on: {dateFormat(article.created_at)}</h4>
                <Voter className={styles.ArticleVoter} votes={article.votes} id={article.article_id} type='articles' />
                <ArticleComments article_id={article_id} username={loggedInAs} />

            </div>
        );
    }
}

export default Article;