import React, { Component } from 'react';
import { getArticles } from '../../api'
import Loading from '../../utils/Loading/Loading'
import ErrorPage from '../../utils/ErrorPage/ErrorPage'




class Articles extends Component {
    state = {
        articles: [],
        sort_by: 'created_at',
        order: 'asc',
        articleCount: 0,
        isLoading: true,
        err: null
    }

    componentDidMount() {
        this.fetchArticles()
    }

    fetchArticles = () => {
        const { topic } = this.props
        const { sort_by, order } = this.state
        getArticles(topic, sort_by, order, p)
            .then(({ articles, total_count }) => {
                this.setState({
                    articles: articles, articleCount: total_count,
                    isLoading: false,
                    err: null

                })
            }).catch((err) => {
                this.setState({ err, isLoading: false })
            })
    }
    setSort = e => {
        const { value } = e.target
        this.setState({ sort_by: value })
    }

    setOrder = e => {
        const { value } = e.target
        this.setState({ order: value })
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
                <ul >
                    {articles.map(article => {
                        return (
                            <li>
                                {article.body}
                            </li>)
                    })}
                </ul>
            </div >
        );

    }
}

export default Articles;