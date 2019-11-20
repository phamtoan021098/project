import React, { Component } from 'react';
import Vans from './Vans';
import Converse from './Converse';
import Palladium from './Palladium';
class Types extends Component {
    render() {
        return (
           <div>
               <Vans />
               <Converse />
               <Palladium />
           </div>
        );
    }
}
export default Types;