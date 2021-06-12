import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <>
                <div>
                    <div className="shopping-cart">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="location">
                                        <ul>
                                            <li><a href="/" title="go to homepage">Home<span>/</span></a></li>
                                            <li><strong>Login page</strong></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="login-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-md-offset-3 text-center">
                                    <div className="login">
                                        <div className="login-form-container">
                                            <div className="login-text">
                                                <h2>login</h2>
                                                <span>Please login using account detail bellow.</span>
                                            </div>
                                            <div className="login-form">
                                                <form action="#" method="post">
                                                    <input type="text" name="user-name" placeholder="Username" />
                                                    <input type="password" name="user-password" placeholder="Password" />
                                                    <div className="button-box">
                                                        <div className="login-toggle-btn">
                                                            <input type="checkbox" id="remember" />
                                                            <label htmlFor="remember">Remember me</label>
                                                            <a href="#">Forgot Password?</a>
                                                        </div>
                                                        <button type="submit" className="default-btn">Login</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
