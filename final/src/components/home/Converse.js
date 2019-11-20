import React, { Component } from 'react';
import axios from 'axios';
import ItemConverse from './ItemConverse';
import {Link} from 'react-router-dom';
class Converse extends Component {
  constructor(props) {
    super(props);
    this.state = {
        sneakers: []
    }
}
componentDidMount() {
    axios.get('http://localhost:4000/sneakers').then(response => {
  
        this.setState({
            sneakers: response.data
        });
    }).catch(function (error) {
        console.log(error);
    })
}
render() {
    const { sneakers } = this.state;
    const converse = [];
    for (var i = 0; i < sneakers.length; i++) {
        if (sneakers[i].brand === 'Converse') {
            converse.push(sneakers[i])
        }
    }
    const current=converse.slice(0, 8);
    let listconverse= current.map((converse, index) => {
        return (
            <ItemConverse converse={converse} key={index} />
        );
    })
    return (
      <section class="converse">
        <div class="container">
          <div class="row-converse">
          </div>
          <div class="row">
            {listconverse}
          </div>
          <div class="row">
            <div class="col-sm-4"></div>
            <div class="col-sm-4" id="col-sm-4">
                            <Link to="/shop/Converse">
                                <button id="button">See More<i class="fas fa-arrow-right"></i></button>
                            </Link>
                        </div>
            <div class="col-sm-4"></div>
          </div>
        </div>
      </section>
    );
  }
}
export default Converse;