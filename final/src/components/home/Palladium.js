import React, { Component } from 'react';
import axios from 'axios';
import ItemPalladium from './ItemPalladium';
import {Link} from 'react-router-dom';
class Palladium extends Component {
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
    const palladium = [];
    for (var i = 0; i < sneakers.length; i++) {
        if (sneakers[i].brand === 'Palladium') {
            palladium.push(sneakers[i])
        }
    }
    const current=palladium.slice(0, 8);
    let listpalladium = current.map((palladium, index) => {
        return (
            <ItemPalladium palladium={palladium} key={index} />
        );
    })

        return (
            <section class="palladidum">
            <div class="container">
              <div class="row-palladium"></div>
              <div class="row">
                {listpalladium}
              </div>
              <div class="row">
                <div class="col-sm-4"></div>
                <div class="col-sm-4" id="col-sm-4">
                            <Link to="/shop/Palladium">
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
export default Palladium;