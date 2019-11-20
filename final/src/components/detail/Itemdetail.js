import React, { Component } from 'react';
import Banner from '../header-footer/Banner';
import Footer from '../header-footer/Footer';
import {Link} from 'react-router-dom';
import axios from 'axios';
class Itemdetail extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            price:'',
            code:'',
            img:'',
            src:''
        }
    }
    change=(src)=>{
        this.setState({
            src:src
        });
    }
    componentDidMount() {
        axios.get('http://localhost:4000/sneakers/view/'+this.props.match.params.id).then(response => {
                console.log(response.data);
                this.setState({
                    name:response.data.name,
                    price:response.data.price,
                    code:response.data.code,
                    img:`/${response.data.img}`,
                    src:`/${response.data.img}`
                });  
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    render() {
        console.log(this.state.img);
        return (
            <div>
                <Banner />
                <section class="item">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-4">
                                <a href="#"><img src={this.state.src} alt="" id="image-container" /></a>
                                <div class="nav">
                                    <img onClick={()=>this.change(this.state.img)} src={this.state.img} alt="" />
                                    <img onClick={()=>this.change("/img/VN0A4BV6ZGH-DRAKE2-150x150.jpg")} src="/img/VN0A4BV6ZGH-DRAKE2-150x150.jpg" alt="" />
                                    <img onClick={()=>this.change("/img/VN0A4BV6ZGH-DRAKE3-150x150.jpg")} src="/img/VN0A4BV6ZGH-DRAKE3-150x150.jpg" alt="" />
                                </div>
                            </div>
                            <div class="col-sm-8">
        <h3>{this.state.name}</h3>
                                <i class="far fa-star checked"></i>
                                <i class="far fa-star checked"></i>
                                <i class="far fa-star checked"></i>
                                <i class="far fa-star checked"></i>
                                <i class="far fa-star checked"></i>
                                <p> 0 Review | Give your Reivew </p>
                                <div class="row">
                                    <div class="col-sm-6">
        <p>SKU: {this.state.code}</p>
                                        <p>Material: Leather/Textile</p>
                                        <p>Color: Black/Multi/True White Zalando</p>
                                        <select name="size">
                                            <option value="default">Choose Your Size</option>
                                            <option value="">4</option>
                                            <option value="">5</option>
                                            <option value="">6</option>
                                            <option value="">7</option>
                                            <option value="">8</option>
                                            <option value="">9</option>
                                            <option value="">10</option>
                                            <option value="">11</option>
                                            <option value="">12</option>
                                        </select>
                                        <Link to="/cart"><i class="fas fa-shopping-cart fa-2x" style={{ color:'black'}}></i></Link>
                                    </div>
                                    <div class="col-sm-6">
        <h5>Price : ${this.state.price}</h5>
                                        <p>Free Ship Nationwide, Have A Lot Of Sale Rating When Buy Online</p>
                                    </div>
                                </div>
                                <h3 id="h3">See More</h3>
                                <hr></hr>
                                <div class="row">
                                    <div class="col-sm-4">
                                        <img src="/img/IMG_0675 copy-410x574.jpg" alt="" />
                                    </div>
                                    <div class="col-sm-4">
                                        <img src="/img/IMG_0730 copy-410x574.jpg" alt="" />
                                    </div>
                                    <div class="col-sm-4">
                                        <img src="/img/IMG_0731 copy-410x574.jpg" alt="" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                </section>
                <Footer />
            </div>
        );
    }
    
}

export default Itemdetail;