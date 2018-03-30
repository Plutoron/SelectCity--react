import React, { Component } from 'react';
import Address from './Address';
import Result from './Result';
import { Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
      			<Route exact path="/" component={Result}/>
      			<Route path="/result" component={Result}/>
      			<Route path="/address" component={Address}/>
            </div>
        );
    }
}
export default App;