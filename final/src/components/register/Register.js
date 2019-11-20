import React, { Component } from 'react';
import Banner from '../header-footer/Banner';
import Footer from '../header-footer/Footer';
class Register extends Component {
    render() {
        return (
            <div>
                <Banner />
                <section className="register">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-2" />
                            <div className="col-sm-8">
                                <div className="register-form">
                                    <h5>Register New Customers</h5>
                                    <hr />
                                    <form action="submit">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="First Name:" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Last Name:" />
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input type="radio" className="form-check-input" name id defaultValue="checkedValue" defaultChecked />
                                                Male
                    </label>
                                            <label className="form-check-label">
                                                <input type="radio" className="form-check-input" name id defaultValue="checkedValue" />
                                                Female
                    </label>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" name id aria-describedby="helpId" placeholder="Email Adress:" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" name id aria-describedby="helpId" placeholder="Password :" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" name id aria-describedby="helpId" placeholder="Retype Password:" />
                                        </div>
                                        <a name id className="btn" href="#" role="button">Create An Account</a>
                                    </form>
                                </div>
                            </div>
                            <div className="col-sm-2" />
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}
export default Register;