import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../actions';

const baseUrl = process.env.REACT_APP_API_BASE_URL;

class Home extends Component {
    componentDidMount() {
        this.props.getTopNewProducts();
        this.props.getTopFeaturedProducts();
        this.props.getTopViewProducts();

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
            if (this.props.topFeaturedProducts && this.props.topFeaturedProducts.length > 0) {
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
            }
            if (this.props.topNewProducts && this.props.topNewProducts.length > 0) {
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
            }
            if (this.props.topViewProducts && this.props.topViewProducts.length > 0) {
                window.$(".view-product-slider").owlCarousel({
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
            }
        }
    }

    componentDidUpdate(prevProps) {
        if ((!prevProps.topFeaturedProducts && this.props.topFeaturedProducts && this.props.topFeaturedProducts.length > 0) || (prevProps.topFeaturedProducts && this.props.topFeaturedProducts && prevProps.topFeaturedProducts.length != this.props.topFeaturedProducts.length)) {
            if (window.$) {
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
            }
        }
        if ((!prevProps.topNewProducts && this.props.topNewProducts && this.props.topNewProducts.length > 0) || (prevProps.topNewProducts && this.props.topNewProducts && prevProps.topNewProducts.length != this.props.topNewProducts.length)) {
            if (window.$) {
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
            }
        }
        if ((!prevProps.topViewProducts && this.props.topViewProducts && this.props.topViewProducts.length > 0) || (prevProps.topViewProducts && this.props.topViewProducts && prevProps.topViewProducts.length != this.props.topViewProducts.length)) {
            if (window.$) {
                window.$(".view-product-slider").owlCarousel({
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
            }
        }
    }

    renderProduct = (product) => {
        return (
            <div key={product.id} className="col-md-12">
                <div className="single-product">
                    {
                        product && product.is_new && (
                            <div className="level-pro-new">
                                <span>SP Mới</span>
                            </div>
                        )
                    }
                    <div className="product-img">
                        <Link to={`/product/${product.slug}`}>
                            <img src={product.images && product.images[0] ? `${baseUrl}/${product.images[0].image_path}` : "/img/product/1.png"} alt className="primary-img" />
                            <img src={product.images && product.images[0] ? `${baseUrl}/${product.images[0].image_path}` : "/img/product/1.png"} alt className="secondary-img" />
                        </Link>
                    </div>
                    <div className="product-name">
                        <Link to={`/product/${product.slug}`}>{product.name}</Link>
                    </div>
                    <div className="price-rating">
                        <span>{product.product_details && product.product_details[0] ? `${Number(product.product_details[0].price).toLocaleString()} VNĐ` : '0 VNĐ'}</span>
                    </div>
                    <div className="actions text-center">
                        <Link to={`/product/${product.slug}`}>
                            <button type="submit" className="cart-btn">Xem chi tiết</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const { topFeaturedProducts, topNewProducts, topViewProducts } = this.props;

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
                    <div className="features-product-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="section-heading">
                                        <h2>Sản phẩm bán chạy</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="feature-product-slider">
                                    {topFeaturedProducts && topFeaturedProducts.length > 0 ? topFeaturedProducts.map(product => this.renderProduct(product)) : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="new-product-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="section-heading">
                                        <h2>Sản phẩm mới</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="new-product-slider">
                                    {topNewProducts && topNewProducts.length > 0 ? topNewProducts.map(product => this.renderProduct(product)) : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="view-products-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="section-heading">
                                        <h2>Sản phẩm được xem nhiều</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="view-product-slider">
                                    {topViewProducts && topViewProducts.length > 0 ? topViewProducts.map(product => this.renderProduct(product)) : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
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
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.common.loading,
        topViewProducts: state.products.topViewProducts,
        topNewProducts: state.products.topNewProducts,
        topFeaturedProducts: state.products.topFeaturedProducts,
    }
}

const mapDispatchToProps = dispatch => ({
    getTopNewProducts: (params) => dispatch(actions.getTopNewProducts(params)),
    getTopFeaturedProducts: (params) => dispatch(actions.getTopFeaturedProducts(params)),
    getTopViewProducts: (params) => dispatch(actions.getTopViewProducts(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)