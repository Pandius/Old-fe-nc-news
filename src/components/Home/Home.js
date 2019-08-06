import React from 'react';
import styles from './Home.module.css';
import { Link } from '@reach/router';
import coding from '../../pictures/coding.jpg'
import cooking from '../../pictures/cooking.jpg'
import football from '../../pictures/football.jpg'

const Home = () => {
    return (
        <div className={styles.homepage}>
            <h1>TOPICS</h1>
            <Link to='/articles/topic/coding'><img className={styles.img} src={coding} alt={'coding'} /></Link>
            <Link to='/articles/topic/cooking'><img classNAme={styles.img} src={cooking} alt={'cooking'} /></Link>
            <Link to='/articles/topic/football'><img classNAme={styles.img} src={football} alt={'football'} /></Link>




        </div>
    );
};

export default Home;