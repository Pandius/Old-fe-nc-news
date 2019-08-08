import React, { Component } from 'react';
import ErrorPage from '../../utils/ErrorPage/ErrorPage'
import Loading from '../../utils/Loading/Loading'
import CommentCard from '../ArticleComments/CommentCard/CommentCard'

class ArticleComments extends Component {

    state = {
        comments: [],
        isLoading: true,
        err: null
    }
    render() {
        const { comments, isLoading, err } = this.state
        const { article_id, username } = this.props
        if (err) return <ErrorPage err={err} />
        if (isLoading) return <Loading text='Loading comments...' />
        return (
            <div>
                <ul>
                    {comments.map(comment => {
                        return (
                            <CommentCard key={comment.comment_id} comments={comment} handleDelete={this.handleDelete} username={username} />
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default ArticleComments;