import React, { Component } from 'react';
import Item from './Item';
import Total from './Total';
import Banner from '../header-footer/Banner';
import Footer from '../header-footer/Footer';
class ListItem extends Component {
    render() {
        const cart = [
            {
                image: "./img/VN0A4BV5ZGH-2-500x500.jpg",
                name: "Vans Old Skool Pride Rainbow",
                price: 120,
                quantity: 1,
                size: 9,
            },
            {
                image: "./img/VN0A4BV5ZGH-2-500x500.jpg",
                name: "Vans Old Skool Pride Rainbow",
                price: 120,
                quantity: 1,
                size: 9,
            }
        ]
        let list = cart.map((item, index) => {
            return (
                <Item key={index} item={item} />
            );
        });
        return (
            <div>
                <Banner />
                <section className="cart-list">
                    .<div className="container">
                        <div className="row">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-8">
                                <table className="table  table-responsive">
                                    <thead className="thead-inverse">
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {list}
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-sm-2"></div>
                        </div>
                        <div className="row" style={{ marginBottom: '5%' }}>
                            <div className="col-sm-2"></div>
                            <div className="col-sm-8">
                                <Total cart={cart}/>
                            </div>
                            <div className="col-sm-2"></div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
    Showtotal=(cart)=>{
        var result=null;
        if(cart.lenght>0){
            result=<Total cart={cart}/>
        }
        return result;
    }
}
export default ListItem;