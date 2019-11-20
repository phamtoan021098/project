import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Banner extends Component {
  render() {
    return (
        <section className="banner">
          <div className="py-1 bg-black">
            <div className="container">
              <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
                <div className="col-lg-12 d-block">
                  <div className="row d-flex">
                    <div className="col-md pr-4 d-flex topper align-items-center">
                      <div className="icon mr-2 d-flex justify-content-center align-items-center"><span
                        className="fas fa-phone"></span></div>
                      <span className="text">+0906821098</span>
                    </div>
                    <div className="col-md pr-4 d-flex topper align-items-center">
                      <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="fas fa-at"></span>
                      </div>
                      <span className="text">phamphuocdangtoan@email.com</span>
                    </div>
                    <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right"><span
                      className="fas fa-truck"></span>
                      <div>
                        <span className="text">3-5 Business days delivery &amp; Free Returns</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
            <div className="container">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="oi oi-menu"></span> Menu
        </button>
              <div className="collapse navbar-collapse" id="ftco-nav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true"
                      aria-expanded="false">Brands</a>
                    <div className="dropdown-menu" aria-labelledby="dropdown04">
                      <a className="dropdown-item" href="shop.html">Vans</a>
                      <a className="dropdown-item" href="product-single.html">Adidas</a>
                      <a className="dropdown-item" href="cart.html">Palladium</a>
                    </div>
                  </li>
                  <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
                  <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
                  <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
                  <li className="nav-item cta cta-colored"><a href="cart.html" className="nav-link"><span
                    className="fas fa-shopping-cart"></span>[0]</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </section>
    );
  }
}
export default Banner;
