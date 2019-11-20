import React, { Component } from 'react';
class FormLogin extends Component {
    render() {
        return (
            <div className="login-form">
                <h5>Registered Customer</h5>
                <hr />
                <form action="submit">
                    <div className="form-group">
                        <label htmlFor>Email :</label>
                        <input type="email" className="form-control" name id aria-describedby="helpId" placeholder="Email:" />
                    </div>
                    <div className="form-group">
                        <label htmlFor>Password :</label>
                        <input type="password" className="form-control" name id aria-describedby="helpId" placeholder="Password:" />
                    </div>
                    <a name id className="btn" href="#" role="button">Sign In</a>
                </form>
            </div>
        );
    }
}
export default FormLogin;