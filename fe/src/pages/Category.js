import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';

const baseUrl = process.env.REACT_APP_API_BASE_URL;

class Category extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: {
                category: null,
                color: null,
                sizes: [],
                priceRange: [0, 2000000],
            },
            sort: 'updated_at DESC',
            page: 1,
            currentCategorySlug: props.match.params.slug,
        }

        this.priceRangeDebounce = null;
    }

    componentDidMount() {
        if (window.$) {
            window.$("#slider-range").slider({
                range: true,
                min: 0,
                max: 2000000,
                values: [0, 2000000],
                slide: (event, ui) => {
                    this.setState({
                        filter: {
                            ...this.state.filter,
                            priceRange: ui.values
                        }
                    }, () => {
                        if (this.priceRangeDebounce != null) {
                            clearTimeout(this.priceRangeDebounce);
                        }
    
                        this.priceRangeDebounce = setTimeout(() => {
                            this.loadData();
                        }, 1000);
                    });
                }
            });
        }
        this.props.getSizes();
        this.props.getColors();
        this.loadData();
    }

    loadData = () => {
        this.props.getProducts({
            page: this.state.page || 1,
            sorted: this.state.sort || 'updated_at DESC',
            filtered: this.state.filter || {}
        });
    }

    handleSelectColor = (color) => {
        const { filter } = this.state;

        if (filter && filter.color && filter.color == color.id) {
            this.setState({
                filter: {
                    ...filter,
                    color: null,
                }
            }, () => this.loadData());
        } else {
            this.setState({
                filter: {
                    ...filter,
                    color: color && color.id || null,
                }
            }, () => this.loadData());
        }
    }

    handleSelectSize = (size) => {
        const { filter } = this.state;

        if (filter && filter.sizes && filter.sizes.includes(size.id)) {
            this.setState({
                filter: {
                    ...filter,
                    sizes: filter.sizes.filter(item => item != size.id),
                }
            }, () => this.loadData());
        } else if (size && size.id) {
            this.setState({
                filter: {
                    ...filter,
                    sizes: [
                        ...filter.sizes,
                        size.id
                    ]
                }
            }, () => this.loadData());
        }
    }

    handleSelectCategory = (category) => {
        const { filter } = this.state;

        if (filter && filter.sizes && filter.category == category.id) {
            this.setState({
                filter: {
                    ...filter,
                    category: null,
                }
            }, () => this.loadData());
        } else {
            this.setState({
                filter: {
                    ...filter,
                    category: category && category.id || null,
                }
            }, () => this.loadData());
        }
    }

    handleChangeSortBy = (e) => {
        this.setState({ sort: e.target.value }, () => this.loadData());
    }

    handleGoToPage = (page) => {
        this.setState({ page }, () => this.loadData());
    }

    render() {
        const { filter, sort, currentCategorySlug, page } = this.state;
        const { colors, sizes, productCategories, products } = this.props;

        const currentCategory = productCategories.filter(category => category.slug == currentCategorySlug)[0];

        return (
            <>
                <div>
                    <div className="product-banner">
                        <img src="/img/product/banner.jpg" alt />
                    </div>
                    <div className="product-main-items">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="location">
                                        <ul>
                                            <li><a href="/" title="go to homepage">Home<span>/</span></a></li>
                                            <li><strong> Danh sách sản phẩm</strong></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="product-sidebar">
                                        <div className="sidebar-title">
                                            <h2>Lọc</h2>
                                        </div>
                                        <div className="single-sidebar">
                                            <div className="single-sidebar-title">
                                                <h3>Danh mục</h3>
                                            </div>
                                            <div className="single-sidebar-content">
                                                <ul>
                                                    {currentCategory && currentCategory.children ? currentCategory.children.map(category => (
                                                        <li key={category.id}><a href="#" style={filter.category == category.id ? { color: '#e03550' } : {}} onClick={(e) => {
                                                            e.preventDefault();
                                                            this.handleSelectCategory(category);
                                                        }}>{category.name}</a></li>
                                                    )) : ''}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="single-sidebar price">
                                            <div className="single-sidebar-title">
                                                <h3>Giá</h3>
                                            </div>
                                            <div className="single-sidebar-content">
                                                <p>Giá từ {Number(filter.priceRange[0]).toLocaleString()} đến {Number(filter.priceRange[1]).toLocaleString()} VNĐ</p>
                                                <div className="price-range">
                                                    <div className="price-filter">
                                                        <div id="slider-range" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-sidebar">
                                            <div className="single-sidebar-title">
                                                <h3>Màu sắc</h3>
                                            </div>
                                            <div className="single-sidebar-content" style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                flexWrap: 'wrap',
                                                margin: '0 -5px',
                                            }} >
                                                {colors && colors.map(color => (
                                                    <a key={color.id} href="#" style={{
                                                        backgroundColor: color.color_code,
                                                        display: 'inline-block',
                                                        width: 25,
                                                        height: 25,
                                                        margin: 5,
                                                        borderRadius: '100%',
                                                        color: '#ffffff',
                                                        fontSize: 10,
                                                        textAlign: 'center',
                                                        lineHeight: '25px',
                                                    }} onClick={(e) => {
                                                        e.preventDefault();
                                                        this.handleSelectColor(color);
                                                    }}>
                                                        {filter.color == color.id ? <span className="glyphicon glyphicon-ok" aria-hidden="true"></span> : ''}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="single-sidebar">
                                            <div className="single-sidebar-title">
                                                <h3>Kích cỡ</h3>
                                            </div>
                                            <div className="single-sidebar-content" style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                flexWrap: 'wrap',
                                                margin: '0 -5px',
                                            }} >
                                                {sizes && sizes.map(size => (
                                                    <a key={size.id} href="#" style={{
                                                        backgroundColor: filter.sizes && filter.sizes.includes(size.id) ? '#000000' : 'transparent',
                                                        display: 'inline-block',
                                                        width: 35,
                                                        height: 35,
                                                        margin: 5,
                                                        color: filter.sizes && filter.sizes.includes(size.id) ? '#ffffff' : '#000000',
                                                        fontSize: 14,
                                                        textAlign: 'center',
                                                        lineHeight: '35px',
                                                    }} onClick={(e) => {
                                                        e.preventDefault();
                                                        this.handleSelectSize(size);
                                                    }}>
                                                        {size.size}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-9">
                                    <div className="product-bar">
                                        {/* <ul className="product-navigation" role="tablist">
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
                                        </ul> */}
                                        <div className="sort-by">
                                            <label>Sắp xếp theo</label>
                                            <select name="sort" onChange={this.handleChangeSortBy}>
                                                <option value="updated_at DESC" selected={sort == 'updated_at DESC'}>Mới nhất</option>
                                                <option value="updated_at ASC" selected={sort == 'updated_at ASC'}>Cũ nhất</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="product-content">
                                            <div className="tab-content">
                                                <div role="tabpanel" className="tab-pane active fade in home2" id="gird">
                                                    {
                                                        products && products.data && products.data.length > 0 ? products.data.map(product => (
                                                            <div className="col-lg-4 col-sm-6">
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
                                                                    <div className="product-price">
                                                                        <div className="product-name">
                                                                            <Link to={`/product/${product.slug}`}>{product.name}</Link>
                                                                        </div>
                                                                        <div className="price-rating">
                                                                            <span>{product.product_details && product.product_details[0] ? `${Number(product.product_details[0].price).toLocaleString()} VNĐ` : '0 VNĐ'}</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="actions" style={{ width: '100%' }}>
                                                                        <Link to={`/product/${product.slug}`} style={{ display: 'block', width: '100%' }}>
                                                                            <button style={{ width: '100%' }} type="submit" className="cart-btn">Xem chi tiết</button>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )) : ''
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="toolbar-bottom">
                                                <ul>
                                                    <li><span>Trang:</span></li>
                                                    {products && products.totalPage ? (
                                                        Array.from(Array(products.totalPage).keys()).map(pageKey => (
                                                            <li className={page == (pageKey + 1) ? 'current' : ''}><a onClick={(e) => {
                                                                e.preventDefault();
                                                                if (page != (pageKey + 1)) {
                                                                    this.handleGoToPage(pageKey + 1);
                                                                }
                                                            }} href="#">{pageKey + 1}</a></li>
                                                        ))
                                                    ) : ''}
                                                    {products && products.totalPage && products.totalPage > 1 && page < products.totalPage ? (
                                                        <li><a onClick={(e) => {
                                                            e.preventDefault();
                                                            this.handleGoToPage(page + 1);
                                                        }} href="#"> <img src="/img/product/pager_arrow_right.gif" alt /> </a></li>
                                                    ) : ''}
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

const mapStateToProps = (state) => {
    return {
        loading: state.common.loading,
        colors: state.colors.colors,
        sizes: state.sizes.sizes,
        productCategories: state.productCategories.productCategories,
        products: state.products.products,
    }
}

const mapDispatchToProps = dispatch => ({
    getProducts: (params) => dispatch(actions.getProducts(params)),
    getColors: (params) => dispatch(actions.getColors(params)),
    getSizes: (params) => dispatch(actions.getSizes(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Category))