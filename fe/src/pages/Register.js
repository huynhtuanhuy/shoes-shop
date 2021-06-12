import React, { Component } from 'react'

export default class Register extends Component {
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
                                            <li><strong>Register page</strong></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="login-area ptb-120">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-md-offset-3 text-center">
                                    <div className="login">
                                        <div className="login-form-container">
                                            <div className="login-text">
                                                <h2>Register</h2>
                                                <span>Please Register using account detail bellow.</span>
                                            </div>
                                            <div className="login-form">
                                                <form action="#" method="post">
                                                    <input type="text" name="user-name" placeholder="Username" />
                                                    <input type="password" name="user-password" placeholder="Password" />
                                                    <input name="user-email" placeholder="Email" type="email" />
                                                    <div className="button-box">
                                                        <button type="submit" className="default-btn">Register</button>
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
