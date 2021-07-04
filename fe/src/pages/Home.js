import React, { Component } from 'react'

export default class Home extends Component {
    componentDidMount() {
        if (window.$) {
            window.$('#nivoslider').nivoSlider({
                effect: 'random',
                slices: 15,
                boxCols: 8,
                boxRows: 4,
                animSpeed: 500,
                pauseTime: 5000,
                startSlide: 0,
                directionNav: true,
                controlNavThumbs: false,
                controlNav: false,
                pauseOnHover: false,
                manualAdvance: false
            });
            window.$(".product-slider").owlCarousel({
                autoPlay: false,
                slideSpeed: 2000,
                pagination: false,
                navigation: false,
                items: 3,
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [980, 3],
                itemsTablet: [768, 2],
                itemsMobile: [479, 1],
            });
            window.$(".feature-product-slider").owlCarousel({
                autoPlay: false,
                slideSpeed: 2000,
                pagination: false,
                navigation: true,
                items: 4,
                itemsDesktop: [1199, 4],
                itemsDesktopSmall: [980, 3],
                itemsTablet: [768, 2],
                itemsMobile: [479, 1],
            });
            window.$(".new-product-slider").owlCarousel({
                autoPlay: false,
                slideSpeed: 2000,
                pagination: false,
                navigation: true,
                items: 4,
                itemsDesktop: [1199, 4],
                itemsDesktopSmall: [980, 3],
                itemsTablet: [768, 2],
                itemsMobile: [479, 1],
            });
            window.$(".testimonial-slider").owlCarousel({
                autoPlay: false,
                slideSpeed: 2000,
                pagination: true,
                navigation: false,
                items: 1,
                itemsDesktop: [1199, 1],
                itemsDesktopSmall: [980, 1],
                itemsTablet: [768, 1],
                itemsMobile: [479, 1],
            });
        }
    }

    render() {
        return (
            <>
                <div>
                    <div className="slider-area home1">
                        <div className="bend niceties preview-2">
                            <div id="nivoslider" className="slides">
                                <img src="/img/slider/slider-1.jpg" alt title="#slider-direction-1" />
                                <img src="/img/slider/slider-2.jpg" alt title="#slider-direction-2" />
                            </div>
                            <div id="slider-direction-1" className="t-cn slider-direction">
                                <div className="slider-progress" />
                                <div className="slider-content t-lfl s-tb slider-1">
                                    <div className="title-container s-tb-c title-compress">
                                        <h1 className="title1">Sale products</h1>
                                        <h2 className="title2">nike Ari max 2015</h2>
                                        <h3 className="title3">Lorem Ipsum is simply dummy text of the printing</h3>
                                        <a href="#"><span>read more</span></a>
                                    </div>
                                </div>
                            </div>
                            <div id="slider-direction-2" className="slider-direction">
                                <div className="slider-progress" />
                                <div className="slider-content t-lfl s-tb slider-2">
                                    <div className="title-container s-tb-c">
                                        <h1 className="title1">Sale products</h1>
                                        <h2 className="title2">GET UP TO 50% SALE</h2>
                                        <h3 className="title3">Lorem Ipsum is simply dummy text of the printing</h3>
                                        <a href="#"><span>read more</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="banner-area">
                        <div className="single-banner">
                            <div className="part-1">
                                <div className="box-1 box">
                                    <h4>nike ari max 2015</h4>
                                    <h2>air superiority</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <a href="#">shopping now</a>
                                </div>
                                <div className="box-2">
                                    <a href="#">
                                        <img src="/img/banner/banner-2.jpg" alt />
                                    </a>
                                </div>
                            </div>
                            <div className="part-2">
                                <div className="search-box">
                                    <form action="#">
                                        <input type="text" />
                                        <button type="submit">
                                            <i className="fa fa-search" />
                                        </button>
                                    </form>
                                </div>
                                <div className="box-3">
                                    <a href="#">
                                        <img src="/img/banner/banner-1.jpg" alt />
                                    </a>
                                </div>
                                <div className="box-4 box">
                                    <h4>nike ari max 2015</h4>
                                    <h2>air superiority</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <a href="#">shopping now</a>
                                </div>
                                <div className="box-5">
                                    <a href="#">
                                        <img src="/img/banner/banner-3.jpg" alt />
                                    </a>
                                </div>
                                <div className="box-6">
                                    <a href="#">
                                        <img src="/img/banner/banner-4.jpg" alt />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="products-area">
                        <div className="container">
                            <div className="products">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="product-menu">
                                            <div className="menu-title">
                                                <h2>Best seller <strong>Products</strong></h2>
                                            </div>
                                            <div className="side-menu">
                                                <ul className="tab-navigation" role="tablist">
                                                    <li role="presentation" className="active"><a href="#tab1" aria-controls="tab1" role="tab" data-toggle="tab">Women</a></li>
                                                    <li role="presentation"><a href="#tab2" aria-controls="tab2" role="tab" data-toggle="tab">men</a></li>
                                                    <li role="presentation"><a href="#tab3" aria-controls="tab3" role="tab" data-toggle="tab">Footwear</a></li>
                                                    <li role="presentation"><a href="#tab4" aria-controls="tab4" role="tab" data-toggle="tab">Jewellery</a></li>
                                                    <li role="presentation"><a href="#tab5" aria-controls="tab5" role="tab" data-toggle="tab">Accessories</a></li>
                                                    <li role="presentation"><a href="#tab6" aria-controls="tab6" role="tab" data-toggle="tab">Dresses</a></li>
                                                    <li role="presentation"><a href="#tab7" aria-controls="tab7" role="tab" data-toggle="tab">shoes</a></li>
                                                    <li role="presentation"><a href="#tab8" aria-controls="tab8" role="tab" data-toggle="tab">Handbags</a></li>
                                                    <li> <img src="/img/banner/banner-5.jpg" alt /> </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="row">
                                            <div className="tab-content">
                                                <div role="tabpanel" className="tab-pane fade in active" id="tab1">
                                                    <div className="product-slider">
                                                        <div className="col-md-12">
                                                            <div className="single-product">
                                                                <div className="level-pro-new">
                                                                    <span>new</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/1.png" alt className="primary-img" />
                                                                        <img src="/img/product/2.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
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
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/1.png" alt className="primary-img" />
                                                                        <img src="/img/product/2.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$800.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/3.png" alt className="primary-img" />
                                                                        <img src="/img/product/4.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$170.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/9.png" alt className="primary-img" />
                                                                        <img src="/img/product/10.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$800.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="single-product">
                                                                <div className="level-pro-new">
                                                                    <span>new</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/5.png" alt className="primary-img" />
                                                                        <img src="/img/product/6.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
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
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/11.png" alt className="primary-img" />
                                                                        <img src="/img/product/12.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$800.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
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
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/3.png" alt className="primary-img" />
                                                                        <img src="/img/product/16.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$800.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/19.png" alt className="primary-img" />
                                                                        <img src="/img/product/20.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
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
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="single-product">
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/13.png" alt className="primary-img" />
                                                                        <img src="/img/product/14.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$800.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="single-product">
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/25.png" alt className="primary-img" />
                                                                        <img src="/img/product/26.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
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
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/18.png" alt className="primary-img" />
                                                                        <img src="/img/product/2.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$800.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
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
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="single-product">
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/17.png" alt className="primary-img" />
                                                                        <img src="/img/product/18.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$800.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div role="tabpanel" className="tab-pane fade" id="tab2">
                                                    <div className="product-slider">
                                                        <div className="col-md-12">
                                                            <div className="single-product">
                                                                <div className="level-pro-new">
                                                                    <span>new</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/5.png" alt className="primary-img" />
                                                                        <img src="/img/product/6.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
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
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/11.png" alt className="primary-img" />
                                                                        <img src="/img/product/12.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$800.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/21.png" alt className="primary-img" />
                                                                        <img src="/img/product/22.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$170.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/3.png" alt className="primary-img" />
                                                                        <img src="/img/product/15.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$800.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
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
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/13.png" alt className="primary-img" />
                                                                        <img src="/img/product/14.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$800.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
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
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/3.png" alt className="primary-img" />
                                                                        <img src="/img/product/18.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$800.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/15.png" alt className="primary-img" />
                                                                        <img src="/img/product/9.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
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
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="single-product">
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/17.png" alt className="primary-img" />
                                                                        <img src="/img/product/18.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$800.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="single-product">
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/25.png" alt className="primary-img" />
                                                                        <img src="/img/product/26.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
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
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/18.png" alt className="primary-img" />
                                                                        <img src="/img/product/2.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$800.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div role="tabpanel" className="tab-pane fade" id="tab3">
                                                    <div className="product-slider">
                                                        <div className="col-md-12">
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
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/23.png" alt className="primary-img" />
                                                                        <img src="/img/product/24.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$800.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/22.png" alt className="primary-img" />
                                                                        <img src="/img/product/21.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$170.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/18.png" alt className="primary-img" />
                                                                        <img src="/img/product/19.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$800.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
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
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/15.png" alt className="primary-img" />
                                                                        <img src="/img/product/16.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$800.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
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
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/11.png" alt className="primary-img" />
                                                                        <img src="/img/product/12.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$800.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/9.png" alt className="primary-img" />
                                                                        <img src="/img/product/10.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
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
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="single-product">
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/7.png" alt className="primary-img" />
                                                                        <img src="/img/product/8.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$800.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="single-product">
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/5.png" alt className="primary-img" />
                                                                        <img src="/img/product/6.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
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
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div role="tabpanel" className="tab-pane fade" id="tab4">
                                                    <div className="product-slider">
                                                        <div className="col-md-12">
                                                            <div className="single-product">
                                                                <div className="level-pro-new">
                                                                    <span>new</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/3.png" alt className="primary-img" />
                                                                        <img src="/img/product/4.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
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
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/2.png" alt className="primary-img" />
                                                                        <img src="/img/product/1.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$800.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/5.png" alt className="primary-img" />
                                                                        <img src="/img/product/12.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$170.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/3.png" alt className="primary-img" />
                                                                        <img src="/img/product/10.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$800.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="single-product">
                                                                <div className="level-pro-new">
                                                                    <span>new</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/1.png" alt className="primary-img" />
                                                                        <img src="/img/product/8.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
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
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/25.png" alt className="primary-img" />
                                                                        <img src="/img/product/12.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$800.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="single-product">
                                                                <div className="level-pro-new">
                                                                    <span>new</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/23.png" alt className="primary-img" />
                                                                        <img src="/img/product/13.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
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
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/21.png" alt className="primary-img" />
                                                                        <img src="/img/product/11.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$800.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/19.png" alt className="primary-img" />
                                                                        <img src="/img/product/9.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
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
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div role="tabpanel" className="tab-pane fade" id="tab5">
                                                    <div className="product-slider">
                                                        <div className="col-md-12">
                                                            <div className="single-product">
                                                                <div className="level-pro-new">
                                                                    <span>new</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/17.png" alt className="primary-img" />
                                                                        <img src="/img/product/8.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
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
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/15.png" alt className="primary-img" />
                                                                        <img src="/img/product/7.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$800.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/13.png" alt className="primary-img" />
                                                                        <img src="/img/product/2.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$170.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/12.png" alt className="primary-img" />
                                                                        <img src="/img/product/22.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$800.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
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
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/21.png" alt className="primary-img" />
                                                                        <img src="/img/product/14.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$800.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="single-product">
                                                                <div className="level-pro-new">
                                                                    <span>new</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/23.png" alt className="primary-img" />
                                                                        <img src="/img/product/16.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
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
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/14.png" alt className="primary-img" />
                                                                        <img src="/img/product/12.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$800.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/11.png" alt className="primary-img" />
                                                                        <img src="/img/product/19.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
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
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div role="tabpanel" className="tab-pane fade" id="tab6">
                                                    <div className="product-slider">
                                                        <div className="col-md-12">
                                                            <div className="single-product">
                                                                <div className="level-pro-new">
                                                                    <span>new</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/12.png" alt className="primary-img" />
                                                                        <img src="/img/product/6.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
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
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/18.png" alt className="primary-img" />
                                                                        <img src="/img/product/21.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$800.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/19.png" alt className="primary-img" />
                                                                        <img src="/img/product/13.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$170.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/23.png" alt className="primary-img" />
                                                                        <img src="/img/product/25.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$800.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="single-product">
                                                                <div className="level-pro-new">
                                                                    <span>new</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/25.png" alt className="primary-img" />
                                                                        <img src="/img/product/20.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
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
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/10.png" alt className="primary-img" />
                                                                        <img src="/img/product/13.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$800.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/20.png" alt className="primary-img" />
                                                                        <img src="/img/product/12.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$170.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/7.png" alt className="primary-img" />
                                                                        <img src="/img/product/15.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$800.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div role="tabpanel" className="tab-pane fade" id="tab7">
                                                    <div className="product-slider">
                                                        <div className="col-md-12">
                                                            <div className="single-product">
                                                                <div className="level-pro-new">
                                                                    <span>new</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/5.png" alt className="primary-img" />
                                                                        <img src="/img/product/6.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
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
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/11.png" alt className="primary-img" />
                                                                        <img src="/img/product/12.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$800.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/21.png" alt className="primary-img" />
                                                                        <img src="/img/product/22.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$170.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/3.png" alt className="primary-img" />
                                                                        <img src="/img/product/15.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$800.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
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
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/13.png" alt className="primary-img" />
                                                                        <img src="/img/product/14.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$800.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/21.png" alt className="primary-img" />
                                                                        <img src="/img/product/22.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$170.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/3.png" alt className="primary-img" />
                                                                        <img src="/img/product/15.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$800.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
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
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/13.png" alt className="primary-img" />
                                                                        <img src="/img/product/14.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$800.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div role="tabpanel" className="tab-pane fade" id="tab8">
                                                    <div className="product-slider">
                                                        <div className="col-md-12">
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/11.png" alt className="primary-img" />
                                                                        <img src="/img/product/12.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$800.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/11.png" alt className="primary-img" />
                                                                        <img src="/img/product/12.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$800.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/21.png" alt className="primary-img" />
                                                                        <img src="/img/product/22.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$170.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/3.png" alt className="primary-img" />
                                                                        <img src="/img/product/15.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$800.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
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
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/13.png" alt className="primary-img" />
                                                                        <img src="/img/product/14.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$800.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/21.png" alt className="primary-img" />
                                                                        <img src="/img/product/22.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$170.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="single-product">
                                                                <div className="level-pro-sale">
                                                                    <span>sale</span>
                                                                </div>
                                                                <div className="product-img">
                                                                    <a href="/single-product">
                                                                        <img src="/img/product/3.png" alt className="primary-img" />
                                                                        <img src="/img/product/15.png" alt className="secondary-img" />
                                                                    </a>
                                                                </div>
                                                                <div className="product-name">
                                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                                </div>
                                                                <div className="price-rating">
                                                                    <span className="old-price">$700.00</span>
                                                                    <span>$800.00</span>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="actions">
                                                                    <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                                    <ul className="add-to-link">
                                                                        <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                                        <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="features-product-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="section-heading">
                                        <h2>FEATURED PRODUCTS</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="feature-product-slider">
                                    <div className="col-md-12">
                                        <div className="single-product">
                                            <div className="level-pro-new">
                                                <span>new</span>
                                            </div>
                                            <div className="product-img">
                                                <a href="/single-product">
                                                    <img src="/img/product/1.png" alt className="primary-img" />
                                                    <img src="/img/product/2.png" alt className="secondary-img" />
                                                </a>
                                            </div>
                                            <div className="product-name">
                                                <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                            </div>
                                            <div className="price-rating">
                                                <span className="old-price">$700.00</span>
                                                <span>$800.00</span>
                                                <div className="ratings">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star-half-o" />
                                                </div>
                                            </div>
                                            <div className="actions">
                                                <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                <ul className="add-to-link">
                                                    <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                    <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                    <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="single-product">
                                            <div className="level-pro-sale">
                                                <span>sale</span>
                                            </div>
                                            <div className="product-img">
                                                <a href="/single-product">
                                                    <img src="/img/product/7.png" alt className="primary-img" />
                                                    <img src="/img/product/8.png" alt className="secondary-img" />
                                                </a>
                                            </div>
                                            <div className="product-name">
                                                <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                            </div>
                                            <div className="price-rating">
                                                <span className="old-price">$700.00</span>
                                                <span>$800.00</span>
                                                <div className="ratings">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star-half-o" />
                                                </div>
                                            </div>
                                            <div className="actions">
                                                <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                <ul className="add-to-link">
                                                    <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                    <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                    <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="single-product">
                                            <div className="level-pro-sale">
                                                <span>sale</span>
                                            </div>
                                            <div className="product-img">
                                                <a href="/single-product">
                                                    <img src="/img/product/3.png" alt className="primary-img" />
                                                    <img src="/img/product/4.png" alt className="secondary-img" />
                                                </a>
                                            </div>
                                            <div className="product-name">
                                                <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                            </div>
                                            <div className="price-rating">
                                                <span className="old-price">$700.00</span>
                                                <span>$800.00</span>
                                                <div className="ratings">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star-half-o" />
                                                </div>
                                            </div>
                                            <div className="actions">
                                                <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                <ul className="add-to-link">
                                                    <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                    <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                    <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="single-product">
                                            <div className="level-pro-sale">
                                                <span>sale</span>
                                            </div>
                                            <div className="product-img">
                                                <a href="/single-product">
                                                    <img src="/img/product/9.png" alt className="primary-img" />
                                                    <img src="/img/product/10.png" alt className="secondary-img" />
                                                </a>
                                            </div>
                                            <div className="product-name">
                                                <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                            </div>
                                            <div className="price-rating">
                                                <span className="old-price">$700.00</span>
                                                <span>$800.00</span>
                                                <div className="ratings">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star-half-o" />
                                                </div>
                                            </div>
                                            <div className="actions">
                                                <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                <ul className="add-to-link">
                                                    <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                    <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                    <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="/single-product">
                                                    <img src="/img/product/5.png" alt className="primary-img" />
                                                    <img src="/img/product/6.png" alt className="secondary-img" />
                                                </a>
                                            </div>
                                            <div className="product-name">
                                                <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                            </div>
                                            <div className="price-rating">
                                                <span className="old-price">$700.00</span>
                                                <span>$800.00</span>
                                                <div className="ratings">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star-half-o" />
                                                </div>
                                            </div>
                                            <div className="actions">
                                                <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                <ul className="add-to-link">
                                                    <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                    <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                    <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="single-product">
                                            <div className="level-pro-new">
                                                <span>new</span>
                                            </div>
                                            <div className="product-img">
                                                <a href="/single-product">
                                                    <img src="/img/product/3.png" alt className="primary-img" />
                                                    <img src="/img/product/4.png" alt className="secondary-img" />
                                                </a>
                                            </div>
                                            <div className="product-name">
                                                <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                            </div>
                                            <div className="price-rating">
                                                <span className="old-price">$700.00</span>
                                                <span>$800.00</span>
                                                <div className="ratings">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star-half-o" />
                                                </div>
                                            </div>
                                            <div className="actions">
                                                <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                <ul className="add-to-link">
                                                    <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                    <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                    <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="single-product">
                                            <div className="level-pro-sale">
                                                <span>sale</span>
                                            </div>
                                            <div className="product-img">
                                                <a href="/single-product">
                                                    <img src="/img/product/19.png" alt className="primary-img" />
                                                    <img src="/img/product/20.png" alt className="secondary-img" />
                                                </a>
                                            </div>
                                            <div className="product-name">
                                                <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                            </div>
                                            <div className="price-rating">
                                                <span className="old-price">$700.00</span>
                                                <span>$800.00</span>
                                                <div className="ratings">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star-half-o" />
                                                </div>
                                            </div>
                                            <div className="actions">
                                                <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                <ul className="add-to-link">
                                                    <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                    <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                    <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="/single-product">
                                                    <img src="/img/product/13.png" alt className="primary-img" />
                                                    <img src="/img/product/14.png" alt className="secondary-img" />
                                                </a>
                                            </div>
                                            <div className="product-name">
                                                <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                            </div>
                                            <div className="price-rating">
                                                <span className="old-price">$700.00</span>
                                                <span>$800.00</span>
                                                <div className="ratings">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star-half-o" />
                                                </div>
                                            </div>
                                            <div className="actions">
                                                <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                <ul className="add-to-link">
                                                    <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                    <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                    <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="/single-product">
                                                    <img src="/img/product/15.png" alt className="primary-img" />
                                                    <img src="/img/product/16.png" alt className="secondary-img" />
                                                </a>
                                            </div>
                                            <div className="product-name">
                                                <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                            </div>
                                            <div className="price-rating">
                                                <span className="old-price">$700.00</span>
                                                <span>$800.00</span>
                                                <div className="ratings">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star-half-o" />
                                                </div>
                                            </div>
                                            <div className="actions">
                                                <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                <ul className="add-to-link">
                                                    <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                    <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                    <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
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
                                            <div className="product-name">
                                                <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                            </div>
                                            <div className="price-rating">
                                                <span className="old-price">$700.00</span>
                                                <span>$800.00</span>
                                                <div className="ratings">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star-half-o" />
                                                </div>
                                            </div>
                                            <div className="actions">
                                                <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                <ul className="add-to-link">
                                                    <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                    <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                    <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="another-banner-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="big-banner">
                                        <a href="#">
                                            <img src="/img/banner/banner-10.jpg" alt />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="new-products-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="section-heading">
                                        <h2>NEW PRODUCTS</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="new-product-slider">
                                    <div className="col-md-12">
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
                                            <div className="product-name">
                                                <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                            </div>
                                            <div className="price-rating">
                                                <span className="old-price">$700.00</span>
                                                <span>$800.00</span>
                                                <div className="ratings">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star-half-o" />
                                                </div>
                                            </div>
                                            <div className="actions">
                                                <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                <ul className="add-to-link">
                                                    <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                    <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                    <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="single-product">
                                            <div className="level-pro-sale">
                                                <span>sale</span>
                                            </div>
                                            <div className="product-img">
                                                <a href="/single-product">
                                                    <img src="/img/product/3.png" alt className="primary-img" />
                                                    <img src="/img/product/4.png" alt className="secondary-img" />
                                                </a>
                                            </div>
                                            <div className="product-name">
                                                <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                            </div>
                                            <div className="price-rating">
                                                <span className="old-price">$700.00</span>
                                                <span>$800.00</span>
                                                <div className="ratings">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star-half-o" />
                                                </div>
                                            </div>
                                            <div className="actions">
                                                <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                <ul className="add-to-link">
                                                    <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                    <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                    <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="single-product">
                                            <div className="level-pro-sale">
                                                <span>sale</span>
                                            </div>
                                            <div className="product-img">
                                                <a href="/single-product">
                                                    <img src="/img/product/2.png" alt className="primary-img" />
                                                    <img src="/img/product/8.png" alt className="secondary-img" />
                                                </a>
                                            </div>
                                            <div className="product-name">
                                                <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                            </div>
                                            <div className="price-rating">
                                                <span className="old-price">$700.00</span>
                                                <span>$800.00</span>
                                                <div className="ratings">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star-half-o" />
                                                </div>
                                            </div>
                                            <div className="actions">
                                                <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                <ul className="add-to-link">
                                                    <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                    <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                    <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="single-product">
                                            <div className="level-pro-sale">
                                                <span>sale</span>
                                            </div>
                                            <div className="product-img">
                                                <a href="/single-product">
                                                    <img src="/img/product/1.png" alt className="primary-img" />
                                                    <img src="/img/product/2.png" alt className="secondary-img" />
                                                </a>
                                            </div>
                                            <div className="product-name">
                                                <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                            </div>
                                            <div className="price-rating">
                                                <span className="old-price">$700.00</span>
                                                <span>$800.00</span>
                                                <div className="ratings">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star-half-o" />
                                                </div>
                                            </div>
                                            <div className="actions">
                                                <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                <ul className="add-to-link">
                                                    <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                    <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                    <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="/single-product">
                                                    <img src="/img/product/17.png" alt className="primary-img" />
                                                    <img src="/img/product/18.png" alt className="secondary-img" />
                                                </a>
                                            </div>
                                            <div className="product-name">
                                                <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                            </div>
                                            <div className="price-rating">
                                                <span className="old-price">$700.00</span>
                                                <span>$800.00</span>
                                                <div className="ratings">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star-half-o" />
                                                </div>
                                            </div>
                                            <div className="actions">
                                                <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                <ul className="add-to-link">
                                                    <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                    <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                    <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
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
                                            <div className="product-name">
                                                <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                            </div>
                                            <div className="price-rating">
                                                <span className="old-price">$700.00</span>
                                                <span>$800.00</span>
                                                <div className="ratings">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star-half-o" />
                                                </div>
                                            </div>
                                            <div className="actions">
                                                <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                <ul className="add-to-link">
                                                    <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                    <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                    <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="single-product">
                                            <div className="level-pro-sale">
                                                <span>sale</span>
                                            </div>
                                            <div className="product-img">
                                                <a href="/single-product">
                                                    <img src="/img/product/21.png" alt className="primary-img" />
                                                    <img src="/img/product/22.png" alt className="secondary-img" />
                                                </a>
                                            </div>
                                            <div className="product-name">
                                                <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                            </div>
                                            <div className="price-rating">
                                                <span className="old-price">$700.00</span>
                                                <span>$800.00</span>
                                                <div className="ratings">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star-half-o" />
                                                </div>
                                            </div>
                                            <div className="actions">
                                                <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                <ul className="add-to-link">
                                                    <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                    <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                    <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="/single-product">
                                                    <img src="/img/product/23.png" alt className="primary-img" />
                                                    <img src="/img/product/24.png" alt className="secondary-img" />
                                                </a>
                                            </div>
                                            <div className="product-name">
                                                <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                            </div>
                                            <div className="price-rating">
                                                <span className="old-price">$700.00</span>
                                                <span>$800.00</span>
                                                <div className="ratings">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star-half-o" />
                                                </div>
                                            </div>
                                            <div className="actions">
                                                <button type="submit" className="cart-btn" title="Add to cart">add to cart</button>
                                                <ul className="add-to-link">
                                                    <li><a className="modal-view" data-target="#productModal" data-toggle="modal" href="#"> <i className="fa fa-search" /></a></li>
                                                    <li><a href="#"> <i className="fa fa-heart-o" /></a></li>
                                                    <li><a href="#"> <i className="fa fa-refresh" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-area">
                        <div className="container">
                            <div className="row">
                                <div className="testimonial-slider">
                                    <div className="single-testimonial">
                                        <div className="spech">
                                            <a href="#">“ Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat ”</a>
                                        </div>
                                        <div className="avater">
                                            <img src="/img/testimonial/1.jpg" alt />
                                        </div>
                                        <div className="post-by">
                                            <span>Salim Rana</span>
                                        </div>
                                    </div>
                                    <div className="single-testimonial">
                                        <div className="spech">
                                            <a href="#">“ Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat ”</a>
                                        </div>
                                        <div className="avater">
                                            <img src="/img/testimonial/2.jpg" alt />
                                        </div>
                                        <div className="post-by">
                                            <span>Hridoy Roy</span>
                                        </div>
                                    </div>
                                    <div className="single-testimonial">
                                        <div className="spech">
                                            <a href="#">“ Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat ”</a>
                                        </div>
                                        <div className="avater">
                                            <img src="/img/testimonial/3.jpg" alt />
                                        </div>
                                        <div className="post-by">
                                            <span>themesplaza</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="blog-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="blog-heading">
                                        <h2>From <strong> The Blog</strong></h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="blog-post">
                                        <div className="single-blog-post">
                                            <div className="blog-img">
                                                <a href="/blog/abc">
                                                    <img src="/img/blog/1.jpg" alt />
                                                </a>
                                            </div>
                                            <div className="blog-content">
                                                <a href="/blog/abc" className="blog-title">Lorem ipsum dolor sit amet</a>
                                                <span><a href="#">By plaza themes - </a>17 Aug 2015 ( 0 comments )</span>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna...</p>
                                                <a href="/blog/abc" className="readmore">read more &gt;</a>
                                            </div>
                                        </div>
                                        <div className="single-blog-post">
                                            <div className="blog-img">
                                                <a href="/blog/abc">
                                                    <img src="/img/blog/2.jpg" alt />
                                                </a>
                                            </div>
                                            <div className="blog-content">
                                                <a href="/blog/abc" className="blog-title">Lorem ipsum dolor sit amet</a>
                                                <span><a href="#">By plaza themes - </a>17 Aug 2015 ( 0 comments )</span>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna...</p>
                                                <a href="/blog/abc" className="readmore">read more &gt;</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-blog-post">
                                        <div className="blog-img">
                                            <a href="/blog/abc">
                                                <img src="/img/blog/3.jpg" alt />
                                            </a>
                                        </div>
                                        <div className="blog-content">
                                            <a href="/blog/abc" className="blog-title">Lorem ipsum dolor sit amet</a>
                                            <span><a href="#">By plaza themes - </a>17 Aug 2015 ( 0 comments )</span>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna...</p>
                                            <a href="/blog/abc" className="readmore">read more &gt;</a>
                                        </div>
                                    </div>
                                    <div className="single-blog-post">
                                        <div className="blog-img">
                                            <a href="/blog/abc">
                                                <img src="/img/blog/4.jpg" alt />
                                            </a>
                                        </div>
                                        <div className="blog-content">
                                            <a href="/blog/abc" className="blog-title">Lorem ipsum dolor sit amet</a>
                                            <span><a href="#">By plaza themes - </a>17 Aug 2015 ( 0 comments )</span>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna...</p>
                                            <a href="/blog/abc" className="readmore">read more &gt;</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="newsleter-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="newsleter">
                                        <h3>newsletter</h3>
                                        <p>Subscribe to the james mailing list to receive updates on new arrivals, special offers and other discount information.</p>
                                        <div className="Subscribe">
                                            <form action="#">
                                                <input type="text" title="Sign up" />
                                                <button type="submit" title="Subscribe">Subscribe</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="follow">
                                        <h3>follow</h3>
                                        <p>Subscribe to the james mailing list to receive updates on new arrivals, special offers and other discount information.</p>
                                        <ul className="follow-link">
                                            <li><a href="#"> <i className="fa fa-facebook" /> </a></li>
                                            <li><a href="#"> <i className="fa fa-rss" /> </a></li>
                                            <li><a href="#"> <i className="fa fa-twitter" /> </a></li>
                                            <li><a href="#"> <i className="fa fa-google-plus" /> </a></li>
                                        </ul>
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
