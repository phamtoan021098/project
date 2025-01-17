import React, { Component, useState } from 'react';
import Items from './Items';
import Filter from './Filter';
import Banner from '../header-footer/Banner';
import Footer from '../header-footer/Footer';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import Vans from '../home/Vans';
class View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            perPage: 8,
            sneakers: []
        }
    }
    show = (a) => {
        this.setState({
            currentPage: a
        })
    }
    componentDidMount() {
        axios.get('http://localhost:4000/sneakers').then(response => {
            this.setState({
                sneakers: response.data
            })
        }).catch(function (error) {
            console.log(error);
        })
    }
    render() {
        const { sort } = this.props;
        console.log(sort);
        const { sneakers } = this.state;
        const { currentPage, perPage } = this.state;
        const indexOfLast = currentPage * perPage;
        const indexOfFirst = indexOfLast - perPage;
        const {match}=this.props;
        console.log(match);
        if (sort.name === 'name') {
            sneakers.sort((a, b) => {
                if (a.name > b.name) return sort.option;
                else if (a.name < b.name) return -sort.option;
                else return 0;
            });
        }
        else {
            sneakers.sort((a, b) => {
                if (a.price > b.price) return sort.option;
                else if (a.price < b.price) return -sort.option;
                else return 0;
            });
        }
        const list=[];
        for(var i=0;i<sneakers.length;i++){
            if(sneakers[i].brand===this.props.match.params.id){
                list.push(sneakers[i]);
            }
        }
        const currentList =list.slice(indexOfFirst, indexOfLast);
        let listitem = currentList.map((item, index) => {
            return (
                <Items item={item} key={index} />
            );
        }) 
        const pageNumbers = [];
        for (var i = 1; i <= Math.ceil(list.length / perPage); i++) {
            pageNumbers.push(i);
        }
        let showpage = pageNumbers.map((page, index) => {
            return (
                <li className="page-item" key={index}>
                    <a className="page-link" onClick={() => this.show(index + 1)}>{page}</a>
                </li>
            );
        })
        return (
            <div>
                <Banner />
                <section className="vans">
                    <div className="container">
                        <div className={this.showbanner(this.props.match.params.id)}></div>
                        <div className="row">
                            <div className="col-sm-4"></div>
                            <form action="POST" className="col-sm-8" id="form">
                                <div className="col-sm-6">
                                </div>
                                <div className="col-sm-6">
                                    <Filter />
                                </div>
                            </form>
                        </div>
                        <div className="row">
                            {listitem}
                        </div>
                        <div className="row">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <ul className="pagination">
                                    {showpage}
                                </ul>
                            </div>
                            <div className="col-sm-3"></div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
    showbanner=(a)=>{
        var result="";
        if(a==='Vans'){
            result="row-vans";
        }
        if(a==='Converse'){
            result='row-converse';
        }
        else if(a==='Palladium'){
            result='row-palladium';
        }
        console.log(result);
        return result;      
    }
}
const mapStateToProps = state => {
    return {
        sort: state.sort
    };
};
const mapDispatchToProps = (dispatch, props) => {

};
export default connect(mapStateToProps, mapDispatchToProps)(View);