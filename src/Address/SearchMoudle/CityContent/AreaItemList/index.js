import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.css';
import { setHistory } from '../../../../business';

const AreaItemList = ({data}) =>  {
    return (
        <div className={styles.areaList}>
        {
            data.map(v => {
                return <Link to={{
                                pathname: '/result',
                                state: { city: v }
                            }} 
                            className={styles.areaItem}
                        >{v}</Link> 
            })
        }
        </div>
    )
}
    
export default AreaItemList;
 