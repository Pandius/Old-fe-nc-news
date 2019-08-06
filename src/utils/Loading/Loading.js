
import React from 'react';
import styles from './Loading.module.css'
import LoadingGif from '../../pictures/LoadingGif.gif'

const Loading = ({ text }) => {
    return (
        <div>
            <div className={styles.loading}>
                <h2>{text || 'loading...'}</h2>
                <img src={LoadingGif} alt={'LoadingGif'} />
            </div>
        </div>
    )
}

export default Loading