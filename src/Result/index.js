import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { setHistory, getCity } from '../business';

class Result extends Component {
    constructor(props) {
        super(props);

        this.state={
            city: getCity(props)
        }
    }

    componentWillMount() {
        const { city } = this.state;
        if(city === undefined) return;
        setHistory(city);
    }

    render() {
       const { city } = this.state;

       // 配置state
       // const state = {
       //      city: '北京市',
       //      selectHistory: ['1','2','3']
       // }

       const state = {
        
       }
        return (
            <div className="container">
                <div>{ city === undefined ? '未传参' : city }</div>

                <Link to={{
                            pathname:'/address',
                            state: {...state}
                        }}>选择地址</Link>
            </div>
        );
    }
}

export default Result;