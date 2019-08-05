import React from 'react';
import { Link } from '@reach/router';
import styles from './Nav.module.css'


const Nav = () => {
    return (
        <nav className={styles.Nav}>
            <Link to='/'><button >Home</button> </Link>
            <Link to='/articles'><button >All Articles</button></Link>
            <Link to='/articles/topic/cooking'><button>Cooking</button></Link>
            <Link to='/articles/topic/football'><button>Football</button></Link>
            <Link to='/articles/topic/coding'><button>Coding</button></Link>
        </nav>
    )
}


export default Nav;