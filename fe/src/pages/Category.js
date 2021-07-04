import React, { Component } from 'react'

export default class Shop extends Component {
    render() {
        return (
            <>
                <div>
                    <div className="product-banner">
                        <img src="/img/product/banner.jpg" alt />
                    </div>
                    {/* product items banner end */}
                    {/* product main items area start */}
                    <div className="product-main-items">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="location">
                                        <ul>
                                            <li><a href="/" title="go to homepage">Home<span>/</span></a></li>
                                            <li><strong> shop</strong></li>
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
                                        <div className="single-sidebar price">
                                            <div className="single-sidebar-title">
                                                <h3>Price</h3>
                                            </div>
                                            <div className="single-sidebar-content">
                                                <div className="price-range">
                                                    <div className="price-filter">
                                                        <div id="slider-range" />
                                                        <div className="price-slider-amount">
                                                            <input type="text" id="amount" name="price" placeholder="Add Your Price" />
                                                        </div>
                                                    </div>
                                                    <button type="submit"> <span>search</span> </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="banner-left">
                                            <a href="#">
                                                <img src="/img/product/banner_left.jpg" alt />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-9">
                                    <div className="product-bar">
                                        <ul className="product-navigation" role="tablist">
                                            <li role="presentation" className="active gird">
                                                <a href="#gird" aria-controls="gird" role="tab" data-toggle="tab">
                                                    <span>
                                                        <img className="primary" src="/img/product/grid-primary.png" alt />
                                                        <img className="secondary" src="/img/product/grid-secondary.png" alt />
                                                    </span>
                                                    Gird
                                                </a>
                                            </li>
                                            <li role="presentation" className="list">
                                                <a href="#list" aria-controls="list" role="tab" data-toggle="tab">
                                                    <span>
                                                        <img className="primary" src="/img/product/list-primary.png" alt />
                                                        <img className="secondary" src="/img/product/list-secondary.png" alt />
                                                    </span>
                                                    List
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="sort-by">
                                            <label>Sort By</label>
                                            <select name="sort">
                                                <option value="#" selected>Position</option>
                                                <option value="#">Name</option>
                                                <option value="#">Price</option>
                                            </select>
                                            <a href="#" title="Set Descending Direction">
                                                <img src="/img/product/i_asc_arrow.gif" alt />
                                            </a>
                                        </div>
                                        <div className="limit-product">
                                            <label>Show</label>
                                            <select name="show">
                                                <option value="#" selected>9</option>
                                                <option value="#">12</option>
                                                <option value="#">24</option>
                                                <option value="#">36</option>
                                            </select>
                                            per page
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="product-content">
                                            <div className="tab-content">
                                                <div role="tabpanel" className="tab-pane active fade in home2" id="gird">
                                                    <div className="col-lg-4 col-sm-6">
                                                        <div className="single-product">
                                                            <div className="level-pro-new">
                                                                <span>new</span>
                                                            </div>
                                                            <div className="product-img">
                                                                <a href="/single-product">
                                                                    <img src="/img/product/25.png" alt className="primary-img" />
                                                                    <img src="/img/product/26.png" alt className="secondary-img" />
                                                                </a>
                                                            </div>
                                                            <div className="actions">
                                                                <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                <ul className="add-to-link">
                                                                    <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                    <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                    <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="product-price">
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span>$170.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-sm-6">
                                                        <div className="single-product">
                                                            <div className="level-pro-new">
                                                                <span>new</span>
                                                            </div>
                                                            <div className="product-img">
                                                                <a href="/single-product">
                                                                    <img src="/img/product/23.png" alt className="primary-img" />
                                                                    <img src="/img/product/24.png" alt className="secondary-img" />
                                                                </a>
                                                            </div>
                                                            <div className="actions">
                                                                <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                <ul className="add-to-link">
                                                                    <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                    <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                    <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="product-price">
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span>$170.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-sm-6">
                                                        <div className="single-product">
                                                            <div className="level-pro-new">
                                                                <span>new</span>
                                                            </div>
                                                            <div className="product-img">
                                                                <a href="/single-product">
                                                                    <img src="/img/product/21.png" alt className="primary-img" />
                                                                    <img src="/img/product/22.png" alt className="secondary-img" />
                                                                </a>
                                                            </div>
                                                            <div className="actions">
                                                                <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                <ul className="add-to-link">
                                                                    <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                    <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                    <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="product-price">
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span>$170.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-sm-6">
                                                        <div className="single-product">
                                                            <div className="level-pro-new">
                                                                <span>new</span>
                                                            </div>
                                                            <div className="product-img">
                                                                <a href="/single-product">
                                                                    <img src="/img/product/19.png" alt className="primary-img" />
                                                                    <img src="/img/product/20.png" alt className="secondary-img" />
                                                                </a>
                                                            </div>
                                                            <div className="actions">
                                                                <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                <ul className="add-to-link">
                                                                    <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                    <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                    <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="product-price">
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span>$170.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-sm-6">
                                                        <div className="single-product">
                                                            <div className="level-pro-new">
                                                                <span>new</span>
                                                            </div>
                                                            <div className="product-img">
                                                                <a href="/single-product">
                                                                    <img src="/img/product/17.png" alt className="primary-img" />
                                                                    <img src="/img/product/18.png" alt className="secondary-img" />
                                                                </a>
                                                            </div>
                                                            <div className="actions">
                                                                <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                <ul className="add-to-link">
                                                                    <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                    <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                    <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="product-price">
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span>$170.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-sm-6">
                                                        <div className="single-product">
                                                            <div className="level-pro-new">
                                                                <span>new</span>
                                                            </div>
                                                            <div className="product-img">
                                                                <a href="/single-product">
                                                                    <img src="/img/product/15.png" alt className="primary-img" />
                                                                    <img src="/img/product/16.png" alt className="secondary-img" />
                                                                </a>
                                                            </div>
                                                            <div className="actions">
                                                                <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                <ul className="add-to-link">
                                                                    <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                    <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                    <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="product-price">
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span>$170.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-sm-6">
                                                        <div className="single-product">
                                                            <div className="level-pro-new">
                                                                <span>new</span>
                                                            </div>
                                                            <div className="product-img">
                                                                <a href="/single-product">
                                                                    <img src="/img/product/13.png" alt className="primary-img" />
                                                                    <img src="/img/product/14.png" alt className="secondary-img" />
                                                                </a>
                                                            </div>
                                                            <div className="actions">
                                                                <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                <ul className="add-to-link">
                                                                    <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                    <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                    <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="product-price">
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span>$170.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-sm-6">
                                                        <div className="single-product">
                                                            <div className="level-pro-new">
                                                                <span>new</span>
                                                            </div>
                                                            <div className="product-img">
                                                                <a href="/single-product">
                                                                    <img src="/img/product/11.png" alt className="primary-img" />
                                                                    <img src="/img/product/12.png" alt className="secondary-img" />
                                                                </a>
                                                            </div>
                                                            <div className="actions">
                                                                <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                <ul className="add-to-link">
                                                                    <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                    <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                    <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="product-price">
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span>$170.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-sm-6">
                                                        <div className="single-product">
                                                            <div className="level-pro-new">
                                                                <span>new</span>
                                                            </div>
                                                            <div className="product-img">
                                                                <a href="/single-product">
                                                                    <img src="/img/product/9.png" alt className="primary-img" />
                                                                    <img src="/img/product/10.png" alt className="secondary-img" />
                                                                </a>
                                                            </div>
                                                            <div className="actions">
                                                                <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                <ul className="add-to-link">
                                                                    <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                    <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                    <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="product-price">
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span>$170.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div role="tabpanel" className="tab-pane fade home2" id="list">
                                                    <div className="product-catagory">
                                                        <div className="single-list-product">
                                                            <div className="col-sm-4">
                                                                <div className="list-product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/1.png" alt />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-8">
                                                                <div className="list-product-info">
                                                                    <a href="/single-product" className="list-product-name"> Cras neque metus</a>
                                                                    <div className="price-rating">
                                                                        <span className="old-price">$700.00</span>
                                                                        <span>$800.00</span>
                                                                        <div className="ratings">
                                                                            <i className="fa fa-star" />
                                                                            <i className="fa fa-star" />
                                                                            <i className="fa fa-star" />
                                                                            <i className="fa fa-star" />
                                                                            <i className="fa fa-star-half-o" />
                                                                            <a href="#" className="review">1 Review(s)</a>
                                                                            <a href="#" className="add-review">Add Your Review</a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="list-product-details">
                                                                        <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nul
                                                                            <a href="/single-product">Learn More</a> </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="single-list-product">
                                                            <div className="col-sm-4">
                                                                <div className="list-product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/6.png" alt />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-8">
                                                                <div className="list-product-info">
                                                                    <a href="/single-product" className="list-product-name"> Cras neque metus</a>
                                                                    <div className="price-rating">
                                                                        <span className="old-price">$700.00</span>
                                                                        <span>$800.00</span>
                                                                        <div className="ratings">
                                                                            <i className="fa fa-star" />
                                                                            <i className="fa fa-star" />
                                                                            <i className="fa fa-star" />
                                                                            <i className="fa fa-star" />
                                                                            <i className="fa fa-star-half-o" />
                                                                            <a href="#" className="review">1 Review(s)</a>
                                                                            <a href="#" className="add-review">Add Your Review</a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="list-product-details">
                                                                        <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nul
                                                                            <a href="/single-product">Learn More</a> </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="single-list-product">
                                                            <div className="col-sm-4">
                                                                <div className="list-product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/3.png" alt />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-8">
                                                                <div className="list-product-info">
                                                                    <a href="/single-product" className="list-product-name"> Cras neque metus</a>
                                                                    <div className="price-rating">
                                                                        <span className="old-price">$700.00</span>
                                                                        <span>$800.00</span>
                                                                        <div className="ratings">
                                                                            <i className="fa fa-star" />
                                                                            <i className="fa fa-star" />
                                                                            <i className="fa fa-star" />
                                                                            <i className="fa fa-star" />
                                                                            <i className="fa fa-star-half-o" />
                                                                            <a href="#" className="review">1 Review(s)</a>
                                                                            <a href="#" className="add-review">Add Your Review</a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="list-product-details">
                                                                        <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nul
                                                                            <a href="/single-product">Learn More</a> </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="single-list-product">
                                                            <div className="col-sm-4">
                                                                <div className="list-product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/4.png" alt />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-8">
                                                                <div className="list-product-info">
                                                                    <a href="/single-product" className="list-product-name"> Cras neque metus</a>
                                                                    <div className="price-rating">
                                                                        <span className="old-price">$700.00</span>
                                                                        <span>$800.00</span>
                                                                        <div className="ratings">
                                                                            <i className="fa fa-star" />
                                                                            <i className="fa fa-star" />
                                                                            <i className="fa fa-star" />
                                                                            <i className="fa fa-star" />
                                                                            <i className="fa fa-star-half-o" />
                                                                            <a href="#" className="review">1 Review(s)</a>
                                                                            <a href="#" className="add-review">Add Your Review</a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="list-product-details">
                                                                        <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nul
                                                                            <a href="/single-product">Learn More</a> </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="single-list-product">
                                                            <div className="col-sm-4">
                                                                <div className="list-product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/5.png" alt />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-8">
                                                                <div className="list-product-info">
                                                                    <a href="/single-product" className="list-product-name"> Cras neque metus</a>
                                                                    <div className="price-rating">
                                                                        <span className="old-price">$700.00</span>
                                                                        <span>$800.00</span>
                                                                        <div className="ratings">
                                                                            <i className="fa fa-star" />
                                                                            <i className="fa fa-star" />
                                                                            <i className="fa fa-star" />
                                                                            <i className="fa fa-star" />
                                                                            <i className="fa fa-star-half-o" />
                                                                            <a href="#" className="review">1 Review(s)</a>
                                                                            <a href="#" className="add-review">Add Your Review</a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="list-product-details">
                                                                        <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nul
                                                                            <a href="/single-product">Learn More</a> </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="toolbar-bottom">
                                                <ul>
                                                    <li><span>Pages:</span></li>
                                                    <li className="current"><a href="#">1</a></li>
                                                    <li><a href="#">2</a></li>
                                                    <li><a href="#">3</a></li>
                                                    <li><a href="#"> <img src="/img/product/pager_arrow_right.gif" alt /> </a></li>
                                                </ul>
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
