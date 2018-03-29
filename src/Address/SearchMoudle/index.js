import React, { Component } from 'react';
import styles from './index.css';
import cityObj from './getObj.js';
import { getPinyin } from './getPinyin.js';
import CityContent from './CityContent';
import SearchAssociation from './SearchAssociation';
import 'whatwg-fetch';

class SearchMoudle extends Component {
    constructor() {
        super();

        this.state = {
            city: '',
            curCity: undefined,
            searchMode: false,
            searhItems: [],
            selectHistory: []
        }
        this.inputBind = this.inputBind.bind(this);
        this.clearHistory = this.clearHistory.bind(this);
    }

    inputBind(e) {
        const val = e.target.value;
        const { searchMode } = this.state;
        this.setState({
            city: val
        })
        if(val.length > 0) this.getSearhItems(val);
        if(val.length === 0){
            this.setState({
                searchMode: false
            })
        }else if(!searchMode){
            this.setState({
                searchMode: true
            })
        };
    }

    getSearhItems(val) {
        const pinyin = getPinyin(val[0]);
        const cityArr = cityObj[`${pinyin[0]}`];

        if(cityArr !== undefined){
            const arr = cityArr.filter((v) => {
                return v.indexOf(val) > -1
            })
            this.setState({
                searhItems: arr
            })
        }
    }   

    clearHistory() {
        window.localStorage.removeItem('selectHistory');
        this.setState({
            selectHistory: []
        })
    }

    componentWillMount() {
        let { curCity=undefined, selectHistory=undefined } = this.props;
        this.setState({
            curCity
        })
        if(selectHistory !== undefined) {
            this.setState({
                selectHistory
            })
            return;
        }
        selectHistory = window.localStorage.getItem('selectHistory');
        let history = [];
        if(!!selectHistory){
            history = selectHistory.split(',');
        }
        this.setState({
            selectHistory: history
        })
    }

    render() {
        const { city, selectHistory, searchMode, searhItems, curCity } = this.state;

        return (
            <div className={styles.container}>
                <div className={styles.input}>
                    <input value={city} onChange={this.inputBind} placeholder='请输入城市名'/>
                </div>

                { searchMode ? <SearchAssociation searhItems={searhItems}/> : <CityContent curCity={curCity} selectHistory={selectHistory} clearHistory={this.clearHistory}/> }
            </div>
        );
    }
}

export default SearchMoudle;