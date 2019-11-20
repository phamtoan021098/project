import React, { Component } from 'react';
class Content extends Component {
    render() {
        return (
            <section className="content-adver">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="media">
                                <div className="media-body">
                                    <h1><i className="fab fa-fedex fa-3x"></i></h1>
                                    <h3>Free Shipping</h3>
                                    <p>Free Shipping When You Buy 2+ Items</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="media">
                                <div className="media-body">
                                    <h1><i className="fab fa-supple fa-3x"></i></h1>
                                    <h3>Support Customer</h3>
                                    <p>Always ready to answer all customer's questions thoughfully</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="media">
                                <div className="media-body">
                                    <h1><i className="fas fa-credit-card fa-3x"></i></h1>
                                    <h3>Secure Payment</h3>
                                    <p>Ensure absolute safety when paying</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}
export default Content;
