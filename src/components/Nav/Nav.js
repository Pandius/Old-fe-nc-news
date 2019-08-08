import React from 'react';
import { Link } from '@reach/router';
import styles from './Nav.module.css'


const Nav = () => {
    return (
        <nav className={styles.Nav}>
            <Link to='/'><button className={styles.Button} >Home</button></Link>
            <Link to='/articles'><button className={styles.Button} >All Articles</button></Link>
            <Link to='/articles/topic/cooking'><button className={styles.Button}  >Cooking</button></Link>
            <Link to='/articles/topic/football'><button className={styles.Button}>Football</button></Link>
            <Link to='/articles/topic/coding'><button className={styles.Button}>Coding</button></Link>
        </nav>
    )
}


export default Nav;