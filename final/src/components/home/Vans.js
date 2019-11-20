import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ItemVans from './ItemVans';
import axios from 'axios';
class Vans extends Component {
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
        const vans = [];
        for (var i = 0; i < sneakers.length; i++) {
            if (sneakers[i].brand === 'Vans') {
                vans.push(sneakers[i])
            }
        }
        const current=vans.slice(0, 8);
        let listvans = current.map((vans, index) => {
            return (
                <ItemVans vans={vans} key={index} />
            );
        })
        return (
            <section class="vans">
                <div class="container">
                    <div class="row-vans"></div>
                    <div class="row">
                        {listvans}
                    </div>
                    <div class="row">
                        <div class="col-sm-4"></div>
                        <div class="col-sm-4" id="col-sm-4">
                            <Link to="/shop/Vans">
                                <button id="button">See More<i class="fas fa-arrow-right"></i></button>
                            </Link>
                        </div>
                        <div class="col-sm-4"></div>
                    </div>
                </div>
            </section >
        );
    }
}
export default Vans;