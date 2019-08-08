import React, { Component } from 'react';
import { getArticles } from '../../api'
import Loading from '../../utils/Loading/Loading'
import ErrorPage from '../../utils/ErrorPage/ErrorPage'
import styles from './Articles.module.css'
import ArticleCard from '../ArticleCard/ArticleCard'
import Sorter from '../Sorter/Sorter'




class Articles extends Component {
    state = {
        articles: [],
        sort_by: 'created_at',
        order: 'asc',
        comment_count: 0,
        isLoading: true,
        err: null,
        articlesCount: 0
    }

    componentDidMount() {
        this.fetchArticles()
    }

    fetchArticles = () => {
        const { topic } = this.props
        const { sort_by, order } = this.state
        getArticles(topic, sort_by, order)
            .then(({ articles, total_count }) => {
                this.setState({
                    articles: articles,
                    articleCount: total_count,
                    isLoading: false,
                    err: null

                })
            }).catch((err) => {
                this.setState({ err, isLoading: false })
            })
    }
    setSortOrder = e => {
        const { value, name } = e.target
        this.setState({ [name]: value })
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevProps.topic !== this.props.topic ||
            prevState.sort_by !== this.state.sort_by ||
            prevState.order !== this.state.order) {
            this.fetchArticles()
        }
    }


    render() {
        const { articles, isLoading, err } = this.state
        if (err) return <ErrorPage err={err} />
        if (isLoading) return <Loading text='loading articles...' />
        return (
            <div>
                <Sorter setSortOrder={this.setSortOrder} value={this.state.order} />
                <ul className={styles.articleList}>
                    {articles.map(article => {
                        return (
                            <ArticleCard articles={article} key={article.article_id} />
                        )
                    })}
                </ul>
            </div >
        );

    }
}


export default Articles;