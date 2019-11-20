import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class FormRegister extends Component{
    render(){
        return(
            <div className="register-form">
            <h5>New Customer</h5>
            <hr />
            <p>By creating an account with our store, you will be able to move through the checkout process
              faster, store multiple shipping address, view and track your orders in your accoung and
              more.
            </p>
            <Link name id className="btn" to="/register" role="button">Register Now</Link>
          </div>
        );
    }
}
export default FormRegister;