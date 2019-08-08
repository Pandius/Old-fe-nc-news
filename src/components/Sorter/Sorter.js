import React from 'react';
import styles from '../Sorter/Sorter.module.css'
const Sorter = (props) => {
    return (
        <>
            <div className={styles.sort}>
                <select name="sort_by" onChange={props.setSortOrder}>
                    <option value="created_at">Sort by Date</option>
                    <option value="comment_count">Sort by Comments</option>
                    <option value="votes">Sort by Votes</option>
                </select>
            </div>
            <div className={styles.order}>
                <select name="order" onChange={props.setSortOrder}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
        </>
    );
};

export default Sorter;