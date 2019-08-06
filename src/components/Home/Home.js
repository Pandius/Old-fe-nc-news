import React from 'react';
import styles from './Home.module.css';
import { Link } from '@reach/router';
import coding from '../../pictures/coding.jpg'

const Home = () => {
    return (
        <div className={styles.homepage}>
            <h1>TOPICS</h1>
            <Link to='/articles/topic/coding'><img className={styles.img} src={coding} alt={'coding'} /></Link>


        </div>
    );
};

export default Home;