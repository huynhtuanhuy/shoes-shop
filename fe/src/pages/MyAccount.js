import React, { Component } from 'react'

export default class MyAccount extends Component {
    render() {
        return (
            <div className="account-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="location">
                                <ul>
                                    <li><a href="/" title="go to homepage">Home<span>/</span></a></li>
                                    <li><strong> my account</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="product-sidebar">
                                <div className="sidebar-title">
                                    <h2>Shopping Options</h2>
                                </div>
                                <div className="single-sidebar">
                                    <div className="single-sidebar-title">
                                        <h3>Category</h3>
                                    </div>
                                    <div className="single-sidebar-content">
                                        <ul>
                                            <li><a href="#">Dresses (4)</a></li>
                                            <li><a href="#">shoes (6)</a></li>
                                            <li><a href="#">Handbags (1)</a></li>
                                            <li><a href="#">Clothing (3)</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="single-sidebar">
                                    <div className="single-sidebar-title">
                                        <h3>Color</h3>
                                    </div>
                                    <div className="single-sidebar-content">
                                        <ul>
                                            <li><a href="#">Black (2)</a></li>
                                            <li><a href="#">Blue (2)</a></li>
                                            <li><a href="#">Green (4)</a></li>
                                            <li><a href="#">Grey (2)</a></li>
                                            <li><a href="#">Red (2)</a></li>
                                            <li><a href="#">White (2)</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <div className="my-account-accordion">
                                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingOne">
                                            <h4 className="panel-title">
                                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    <i className="fa fa-list-ol" />
                                                    Order history and details
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                            <div className="panel-body">
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="account-title">
                                                            <h4>Here are the orders you've placed since your account was created.</h4>
                                                        </div>
                                                        <div className="order-history">
                                                            <p>You have not placed any orders.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingTwo">
                                            <h4 className="panel-title">
                                                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    <i className="fa fa-file-o" />
                                                    My credit slips
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                            <div className="panel-body">
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="account-title">
                                                            <h4>Credit slips you have received after canceled orders. </h4>
                                                        </div>
                                                        <div className="credit-slids">
                                                            <p>You have not received any credit slips.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingThree">
                                            <h4 className="panel-title">
                                                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    <i className="fa fa-building-o" />
                                                    My addresses
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                            <div className="panel-body">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="my-address">
                                                            <p>Please configure your default billing and delivery addresses when placing an order. You may also add additional addresses, which can be useful for sending gifts or receiving an order at your office.</p>
                                                            <div className="account-title">
                                                                <h4>Your addresses are listed below. </h4>
                                                            </div>
                                                            <p>Be sure to update your personal information if it has changed.</p>
                                                            <div className="row">
                                                                <div className="col-md-6 col-sm-12">
                                                                    <div className="account-address">
                                                                        <ul>
                                                                            <li className="address-menu-title">My address</li>
                                                                            <li>Hridoy roy</li>
                                                                            <li>Expert</li>
                                                                            <li>Bristol</li>
                                                                            <li>Manchester1</li>
                                                                            <li>Bristol</li>
                                                                            <li>United Kingdom</li>
                                                                            <li>2334234</li>
                                                                            <li>454565768678</li>
                                                                            <li>
                                                                                <button> update </button>
                                                                                <button> submit </button>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="add-address">
                                                                <button>add new address</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingFour">
                                            <h4 className="panel-title">
                                                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                    <i className="fa fa-user" />
                                                    My personal information
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                                            <div className="panel-body">
                                                <div className="col-md-12">
                                                    <div className="delivery-details">
                                                        <form action="#">
                                                            <div className="list-style">
                                                                <div className="account-title">
                                                                    <h4>Please be sure to update your personal information if it has changed. </h4>
                                                                </div>
                                                                <div className="form-name">
                                                                    <label>First Name <em>*</em> </label>
                                                                    <input type="text" placeholder="First Name" />
                                                                </div>
                                                                <div className="form-name">
                                                                    <label>Last Name <em>*</em> </label>
                                                                    <input type="text" placeholder="Last Name" />
                                                                </div>
                                                                <div className="form-name">
                                                                    <label>Company </label>
                                                                    <input type="text" placeholder="Company" />
                                                                </div>
                                                                <div className="form-name">
                                                                    <label>Address 1 <em>*</em> </label>
                                                                    <input type="text" placeholder="Address 1" />
                                                                </div>
                                                                <div className="form-name">
                                                                    <label>Address 2 <em>*</em> </label>
                                                                    <input type="text" placeholder="Address 2" />
                                                                </div>
                                                                <div className="form-name">
                                                                    <label>City <em>*</em> </label>
                                                                    <input type="text" placeholder="City" />
                                                                </div>
                                                                <div className="form-name">
                                                                    <label>Post Code <em>*</em> </label>
                                                                    <input type="text" placeholder="Post Code" />
                                                                </div>
                                                                <div className="form-name">
                                                                    <label> country <em>*</em> </label>
                                                                    <select>
                                                                        <option value={1}>---Please select---</option>
                                                                        <option value={1}>Afghanistan</option>
                                                                        <option value={1}>Algeria</option>
                                                                        <option value={1}>American Samoa</option>
                                                                        <option value={1}>Australia</option>
                                                                        <option value={1}>Bangladesh</option>
                                                                        <option value={1}>Belgium</option>
                                                                        <option value={1}>Bosnia and Herzegovina</option>
                                                                        <option value={1}>Chile</option>
                                                                        <option value={1}>China</option>
                                                                        <option value={1}>Egypt</option>
                                                                        <option value={1}>Finland</option>
                                                                        <option value={1}>France</option>
                                                                        <option value={1}>United State</option>
                                                                    </select>
                                                                </div>
                                                                <div className="form-name">
                                                                    <label> State/Province </label>
                                                                    <select>
                                                                        <option value={1}>---Please select---</option>
                                                                        <option value={1}>Arizona</option>
                                                                        <option value={1}>Armed Forces Africa</option>
                                                                        <option value={1}>California</option>
                                                                        <option value={1}>Florida</option>
                                                                        <option value={1}>Indiana</option>
                                                                        <option value={1}>Marshall Islands</option>
                                                                        <option value={1}>Minnesota</option>
                                                                        <option value={1}>New Mexico</option>
                                                                        <option value={1}>Utah</option>
                                                                        <option value={1}>Virgin Islands</option>
                                                                        <option value={1}>West Virginia</option>
                                                                        <option value={1}>Wyoming</option>
                                                                    </select>
                                                                </div>
                                                                <div className="save-button">
                                                                    <button>save</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingFive">
                                            <h4 className="panel-title">
                                                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                    <i className="fa fa-heart" />
                                                    My wishlists
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseFive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                                            <div className="panel-body">
                                                <div className="col-sm-12">
                                                    <div className="wishlist-container">
                                                        <h3>New Wishlist</h3>
                                                        <form action="#">
                                                            <label>Name</label>
                                                            <input type="text" />
                                                            <div className="save-button">
                                                                <button type="submit">save</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="account-button">
                                    <div className="back-btn"> <a href="#">Back to your Account</a> </div>
                                    <div className="home"> <a href="/"> home</a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
