import React from 'react';
import error from '../../pictures/error.jpg'
import styles from '../ErrorPage/ErrorPage.module.css'

const ErrorPage = ({ text, err }) => {
    if (err === undefined) {

        return (
            <div className={styles.errorPage}>
                <h1>{text || 'Something went wrong...'}</h1>
                {!!err && <p>{err.message}</p>}
                <img src={error} alt={'error'} />
            </div>
        )
    } else if (err.response.status === 404) {
        return (
            <div className={styles.errorPage}>
                <h1>{'Something went wrong...'}</h1>
                <h2>{'404 Not Found'}</h2>
                <img src={error} alt={'error'} />
            </div>
        )
    } else if (err.response.status === 400) {
        return (
            <div className={styles.errorPage}>
                <h1>{'Something went wrong...'}</h1>
                <h2>{'400 Invalid Request'}</h2>
                <img src={error} alt={'error'} />
            </div>
        )
    }
}

export default ErrorPage;