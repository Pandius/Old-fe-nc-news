import React from 'react';
import styles from './Home.module.css';
import { Link } from '@reach/router';
import coding from '../../pictures/coding.gif'
import cooking from '../../pictures/cooking.gif'
import football from '../../pictures/football.gif'

const Home = () => {
    return (
        <div className={styles.homepage}>
            <h1>TOPICS</h1>
            <p> Coding:</p>
            <Link to='/articles/topic/coding'><img className={styles.img} src={coding} alt={'coding'} /></Link>
            <p> Cooking:</p>
            <Link to='/articles/topic/cooking'><img className={styles.img} src={cooking} alt={'cooking'} /></Link>
            <p> Football:</p>
            <Link to='/articles/topic/football'><img className={styles.img} src={football} alt={'football'} /></Link>
        </div>
    );
};

export default Home;