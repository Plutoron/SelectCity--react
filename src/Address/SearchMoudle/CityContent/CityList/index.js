import React, { Component } from 'react';
import CityItem from './CityItem';
import styles from './index.css';
import cityObj from '../../getObj.js';

const keys = Object.keys(cityObj).sort();

class CityList extends Component {
    constructor() {
        super();

        this.state = {
            city: '',
            searchMode: false,
            curCity: '',
            top: 0
        }

        this.letterBind = this.letterBind.bind(this);
    }

    componentWillMount() {
        const width = document.body.clientWidth;
        let top = 0;

        if(width < 750){
            top = document.body.clientWidth /10 * 6.5;
        }else{
            top = 54 * 6.5
        }

        this.setState({
            top
        })
    }

    letterBind(e) {
        const { cur } = e.currentTarget.dataset;
        const that = this;
        this.setState({
            curCity: cur
        })
        setTimeout(() => {
            that.setState({
                curCity: ''
            })
        }, 1000)
    }

    render() {
        const { curCity, top } = this.state;
        
		return(
		    <div className={styles.cityList}>
                {
                    keys.map( v => {
                        const obj = {
                            letter: v,
                            cities: cityObj[v]
                        }
                        return <CityItem {...obj}/>
                    })
                }
                <div className={styles.fixedLeft} style={{"top": top}}>
                {
                    keys.map( v => {
                        return <a href={`#${v}`} data-cur={v} onClick={this.letterBind}>{v}</a>
                    })
                }
                </div>

                { curCity !== '' ? <LetterModal letter={curCity} /> : '' }
            </div>
		)
	}
}

export default CityList;

const LetterModal = ({letter}) =>
    <div className={styles.prevent}>
        <div className={styles.modal}>
            <span>{letter}</span>
        </div>
    </div>
 