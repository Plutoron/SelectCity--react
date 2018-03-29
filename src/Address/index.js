import React, { Component } from 'react';
import SeachMoudle from './SearchMoudle';
import { getCity, getHistory } from '../business';

class Address extends Component {
    constructor(props) {
        super(props)
        this.state = {
            curCity: getCity(props),
            selectHistory: getHistory(props)
        }
    }                                
    render() {
        const { curCity, selectHistory } = this.state;

        return (
            <div className="container">
                <SeachMoudle curCity={curCity} selectHistory={selectHistory}/>

                <SeachMoudle />
            </div>
        );
    }
}

export default Address;