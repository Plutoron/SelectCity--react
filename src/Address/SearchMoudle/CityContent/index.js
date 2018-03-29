import React, { Component } from 'react';
import AreaItemList from './AreaItemList';
import CityList from './CityList';
import styles from './index.css';

class CityContent extends Component { 
	constructor() {
        super();

        this.state = {
            locateCity: ''
        }
    }

	getLoacation() {
        fetch(`http://restapi.amap.com/v3/ip?key=40cdc9ba2ed97fc91f98cd8701ef98b2`).then(res => {
            return res.json();
        }).then(res => {
            const { city }  = res;
            this.setState({
                locateCity: city
            })
            window.localStorage.setItem('locateHistory',city);
        })
    }

    componentWillMount() {
        const { curCity=undefined } = this.props;
        if(curCity !== undefined) {
            this.setState({
                locateCity: curCity
            })
            return;
        }
        this.getLoacation();
    }

	render() {
        const { locateCity } = this.state;
        const { selectHistory, clearHistory } = this.props;

		return(
		    <div className={styles.cityContent}>
		        <div className={styles.hotarea}>
                    <div className={styles.title}>
                        <div>定位城市</div>
                    </div>
                    <AreaItemList data={[locateCity]}/>
                </div>

		        <div className={styles.hotarea}>
                    <div className={styles.title}>
                        <div>选取历史</div>      
                        <div className={styles.clearHistory} onClick={clearHistory} >清楚历史</div>
                    </div>
                    {
                        selectHistory.length > 0 ? 
                        <AreaItemList data={selectHistory}/>
                        :  <span className={styles.null}>暂无选取历史</span> 
                    }
                </div>
			
		        <CityList />
		    </div>
		)
	}
}

export default CityContent;