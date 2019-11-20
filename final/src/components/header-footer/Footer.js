import React, { Component } from 'react';
class Footer extends Component {
    render() {
        return (
            <section className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <h5>Daxuo Store</h5>
                            <p>When you need!</p>
                            <p>Contact with us</p>
                        </div>
                        <div className="col-sm-3">
                            <h5>Menu</h5>
                            <p>Home</p>
                            <p>Brands</p>
                            <p>About</p>
                            <p>Contact</p>
                        </div>
                        <div className="col-sm-3">
                            <h5>Supporter</h5>
                            <p>Online support</p>
                            <p>Contract</p>
                            <p>Recruitment</p>
                            <p>Privacy Policy</p>
                        </div>
                        <div className="col-sm-3">
                            <h5>Have A Questions?</h5>
                            <p><i className="fas fa-map-marker-alt"></i> Đại Học Sư Phạm Kĩ Thuật TP.HCM</p>
                            <p><i className="fas fa-sms"></i> 0906821098</p>
                            <p><i className="far fa-envelope"></i>phamphuocdangtoan@gmail.com</p>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}
export default Footer;