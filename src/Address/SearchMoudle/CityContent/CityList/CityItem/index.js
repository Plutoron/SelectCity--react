import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.css';

const CityItem = ({letter,cities}) => 
    <div className={styles.listContent}>
        <div id={letter} className={styles.title}>{letter}</div>
        <div className={styles.detail}>
            { 
                cities.map(v => {
                   return <Link to={{
                                    pathname: '/result',
                                    state: { city: v }
                                }} className={styles.line}>{v}</Link>
                })
            }
        </div>
    </div>;

export default CityItem;
 