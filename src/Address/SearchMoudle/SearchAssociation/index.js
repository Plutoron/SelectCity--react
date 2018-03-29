import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.css';
import cityObj from '../getObj.js';

class SearchAssociation extends Component {
	render() {
		const { searhItems } = this.props;
		if(searhItems.length === 0) {
			return <div className={styles.searchAssociation}> <div className={styles.null}>无匹配项</div></div>;
		} 
		return(
			<div className={styles.searchAssociation}>
                {
                	searhItems.map(v => {
					    return <Link to={{
											pathname: '/result',
											state: { city: v }
									    }} className={styles.searchItem}>{v}</Link>} )  
                }   
    		</div>
		)
	}
}

export default SearchAssociation;
 