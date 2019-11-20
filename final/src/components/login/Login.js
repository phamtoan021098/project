import React, { Component } from 'react';
import FormLogin from './FormLogin';
import FormRegister from './FormRegister';
import Banner from '../header-footer/Banner';
import Footer from '../header-footer/Footer';
class Login extends Component {
    render() {
        return (
            <div>
                <Banner />
                <section class="login">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6">
                                <FormRegister/>
                            </div>
                            <div class="col-sm-6">
                                <FormLogin/>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}
export default Login;