import React, { Component } from 'react'

export default class Wishlist extends Component {
    render() {
        return (
            <div className="wishlist-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="location">
                                <ul>
                                    <li><a href="/" title="go to homepage">Home<span>/</span></a></li>
                                    <li><strong> wishlist </strong></li>
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
                                <div className="single-sidebar">
                                    <div className="single-sidebar-title">
                                        <h3>Manufacturer</h3>
                                    </div>
                                    <div className="single-sidebar-content">
                                        <ul>
                                            <li><a href="#">Calvin Klein (2)</a></li>
                                            <li><a href="#">Diesel (2)</a></li>
                                            <li><a href="#">option value (1)</a></li>
                                            <li><a href="#">Polo (2)</a></li>
                                            <li><a href="#">store view (4)</a></li>
                                            <li><a href="#">Tommy Hilfiger (2)</a></li>
                                            <li><a href="#">will be used (1)</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <div className="wishlist-banner">
                                <a href="#">
                                    <img src="/img/checkout/checkout_banner.jpg" alt />
                                </a>
                            </div>
                            <div className="wishlist-heading">
                                <h2>Wishlist</h2>
                            </div>
                            <div className="wishlist-content">
                                <div className="table-responsive">
                                    <table className="table table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th>Product Name</th>
                                                <th>Model</th>
                                                <th>Stock</th>
                                                <th>Unit Price</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><a href="#" className="text-center"><img src="/img/wishlist/1.png" alt /> </a></td>
                                                <td>
                                                    <a href="/single-product">More-Or-Less</a>
                                                </td>
                                                <td>Product 14</td>
                                                <td>In Stock</td>
                                                <td className="unit-price">$100.00</td>
                                                <td>
                                                    <div className="wishlist-actions">
                                                        <button type="button" data-toggle="tooltip" title="Add to Cart"> <i className="fa fa-shopping-cart" /> </button>
                                                        <button type="button" data-toggle="tooltip" title="Remove"> <i className="fa fa-times" /> </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td> <a href="#" className="text-center"><img src="/img/wishlist/2.png" alt /> </a> </td>
                                                <td>
                                                    <a href="/single-product">Aliquam Consequat</a>
                                                </td>
                                                <td>Product 14</td>
                                                <td>In Stock</td>
                                                <td className="unit-price">$90.00</td>
                                                <td>
                                                    <div className="wishlist-actions">
                                                        <button type="button" data-toggle="tooltip" title="Add to Cart"> <i className="fa fa-shopping-cart" /> </button>
                                                        <button type="button" data-toggle="tooltip" title="Remove"> <i className="fa fa-times" /> </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="#" className="text-center"><img src="/img/wishlist/1.png" alt /> </a></td>
                                                <td>
                                                    <a href="/single-product">More-Or-Less</a>
                                                </td>
                                                <td>Product 14</td>
                                                <td>In Stock</td>
                                                <td className="unit-price">$100.00</td>
                                                <td>
                                                    <div className="wishlist-actions">
                                                        <button type="button" data-toggle="tooltip" title="Add to Cart"> <i className="fa fa-shopping-cart" /> </button>
                                                        <button type="button" data-toggle="tooltip" title="Remove"> <i className="fa fa-times" /> </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <button type="submit" value="Continue" className="check-button">Continue</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
