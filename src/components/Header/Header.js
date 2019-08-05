import React from 'react';
import styles from './Header.module.css'
import { Link } from '@reach/router'

const Header = (props) => {
    return (
        <div className={styles.header}>
            <Link className={styles.link} to='/'>
                <h1 >The Nc News</h1></Link>
            <h3 >Logged In: {props.userLoggedIn}</h3>
        </div>

    )
}

export default Header;