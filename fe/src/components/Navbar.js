import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <header>
                <div className="top-link">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 col-md-offset-3 col-sm-9 hidden-xs">
                                <div className="site-option">
                                    <ul>
                                        <li className="currency"><a href="#">USD <i className="fa fa-angle-down"></i> </a>
                                            <ul className="sub-site-option">
                                                <li><a href="#">Eur</a></li>
                                                <li><a href="#">Usd</a></li>
                                            </ul>
                                        </li>
                                        <li className="language"><a href="#">English <i className="fa fa-angle-down"></i> </a>
                                            <ul className="sub-site-option">
                                                <li><a href="#">English</a></li>
                                                <li><a href="#">English2</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="call-support">
                                    <p>Call support free: <span> (800) 123 456 789</span></p>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-3">
                                <div className="dashboard">
                                    <div className="account-menu">
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-bars"></i>
                                                </a>
                                                <ul>
                                                    <li><a href="/my-account">my account</a></li>
                                                    <li><a href="/wishlist">my wishlist</a></li>
                                                    <li><a href="/cart">my cart</a></li>
                                                    <li><a href="/checkout">Checkout</a></li>
                                                    <li><a href="/blog">Blog</a></li>
                                                    <li><a href="/login">Log in</a></li>
                                                    <li><a href="/register">Register</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="cart-menu">
                                        <ul>
                                            <li><a href="/cart"> <img src="/img/icon-cart.png" alt="" /> <span>2</span> </a>
                                                <div className="cart-info">
                                                    <ul>
                                                        <li>
                                                            <div className="cart-img">
                                                                <img src="/img/cart/1.png" alt="" />
                                                            </div>
                                                            <div className="cart-details">
                                                                <a href="#">Fusce aliquam</a>
                                                                <p>1 x $174.00</p>
                                                            </div>
                                                            <div className="btn-edit"></div>
                                                            <div className="btn-remove"></div>
                                                        </li>
                                                        <li>
                                                            <div className="cart-img">
                                                                <img src="/img/cart/2.png" alt="" />
                                                            </div>
                                                            <div className="cart-details">
                                                                <a href="#">Fusce aliquam</a>
                                                                <p>1 x $777.00</p>
                                                            </div>
                                                            <div className="btn-edit"></div>
                                                            <div className="btn-remove"></div>
                                                        </li>
                                                    </ul>
                                                    <h3>Subtotal: <span> $951.00</span></h3>
                                                    <a href="/checkout" className="checkout">checkout</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mainmenu-area product-items">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="logo">
                                    <a href="/">
                                        <img src="/img/logo.png" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="mainmenu">
                                    <nav>
                                        <ul>
                                            <li><a href="/">Home</a>
                                            </li>
                                            <li className="mega-women"><a href="/shop">Women</a>
                                                <div className="mega-menu women">
                                                    <div className="part-1">
                                                        <span>
                                                            <a href="#">Dresses</a>
                                                            <a href="#">Cocktail</a>
                                                            <a href="#">Day</a>
                                                            <a href="#">Evening</a>
                                                            <a href="#">Sports</a>
                                                        </span>
                                                        <span>
                                                            <a href="#">shoes</a>
                                                            <a href="#">Sports</a>
                                                            <a href="#">run</a>
                                                            <a href="#">sandals</a>
                                                            <a href="#">Books</a>
                                                        </span>
                                                        <span>
                                                            <a href="#">Handbags</a>
                                                            <a href="#">Blazers</a>
                                                            <a href="#">table</a>
                                                            <a href="#">coats</a>
                                                            <a href="#">kids</a>
                                                        </span>
                                                        <span>
                                                            <a href="#">Clothing</a>
                                                            <a href="#">T-shirts</a>
                                                            <a href="#">coats</a>
                                                            <a href="#">Jackets</a>
                                                            <a href="#">jeans</a>
                                                        </span>
                                                    </div>
                                                    <div className="part-2">
                                                        <a href="#">
                                                            <img src="/img/banner/menu-banner.png" alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="mega-men"><a href="/shop">Men</a>
                                                <div className="mega-menu men">
                                                    <span>
                                                        <a href="#">Bags</a>
                                                        <a href="#">Bootees  Bags</a>
                                                        <a href="#">Blazers</a>
                                                    </span>
                                                    <span>
                                                        <a href="#">Clothing</a>
                                                        <a href="#">coats</a>
                                                        <a href="#">T-shirts</a>
                                                    </span>
                                                    <span>
                                                        <a href="#">Lingerie</a>
                                                        <a href="#">Bands</a>
                                                        <a href="#">Furniture</a>
                                                    </span>
                                                </div>
                                            </li>
                                            <li className="mega-footwear"><a href="/shop">Footwear</a>
                                                <div className="mega-menu footwear">
                                                    <span>
                                                        <a href="#">Footwear Man</a>
                                                        <a href="#">gifts</a>
                                                    </span>
                                                    <span>
                                                        <a href="#">Footwear Womens</a>
                                                        <a href="#">boots</a>
                                                    </span>
                                                </div>
                                            </li>
                                            <li className="mega-jewellery"><a href="/shop">Jewellery</a>
                                                <div className="mega-menu jewellery">
                                                    <span>
                                                        <a href="#">Rings</a>
                                                    </span>
                                                </div>
                                            </li>
                                            <li><a href="/shop">accessories</a></li>
                                            <li><a href="/contact">Contact</a></li>
                                            {/* <li><a href="#">Pages</a>
                                                <div className="sub-menu pages">
                                                    <span>
                                                        <a href="about-us.html">About us</a>
                                                    </span>
                                                    <span>
                                                        <a href="blog.html">Blog</a>
                                                    </span>
                                                    <span>
                                                        <a href="blog-details.html">Blog Details</a>
                                                    </span>
                                                    <span>
                                                        <a href="cart.html">Cart</a>
                                                    </span>
                                                    <span>
                                                        <a href="checkout.html">Checkout</a>
                                                    </span>
                                                    <span>
                                                        <a href="contact.html">Contact</a>
                                                    </span>
                                                    <span>
                                                        <a href="my-account.html">My account</a>
                                                    </span>
                                                    <span>
                                                        <a href="/shop">Shop</a>
                                                    </span>
                                                    <span>
                                                        <a href="shop-list.html">Shop list</a>
                                                    </span>
                                                    <span>
                                                        <a href="single-product.html">Single Shop</a>
                                                    </span>
                                                    <span>
                                                        <a href="login.html">Login page</a>
                                                    </span>
                                                    <span>
                                                        <a href="register.html">Ragister page</a>
                                                    </span>
                                                    <span>
                                                        <a href="wishlist.html">Wishlist</a>
                                                    </span>
                                                </div>
                                            </li> */}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="mobile-menu">
                                    <nav>
                                        <ul>
                                            <li><a href="/">Home</a>
                                            </li>
                                            <li><a href="/shop">Women</a>
                                                <ul>
                                                    <li><a href="#">Dresses</a>
                                                        <ul>
                                                            <li><a href="#">Coctail</a></li>
                                                            <li><a href="#">day</a></li>
                                                            <li><a href="#">evening</a></li>
                                                            <li><a href="#">sports</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">shoes</a>
                                                        <ul>
                                                            <li><a href="#">Sports</a></li>
                                                            <li><a href="#">run</a></li>
                                                            <li><a href="#">sandals</a></li>
                                                            <li><a href="#">boots</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">handbags</a>
                                                        <ul>
                                                            <li><a href="#">Blazers</a></li>
                                                            <li><a href="#">table</a></li>
                                                            <li><a href="#">coats</a></li>
                                                            <li><a href="#">kids</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">clothing</a>
                                                        <ul>
                                                            <li><a href="#">T-shirts</a></li>
                                                            <li><a href="#">coats</a></li>
                                                            <li><a href="#">Jackets</a></li>
                                                            <li><a href="#">jeans</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="/shop">Men</a>
                                                <ul>
                                                    <li><a href="#">Bags</a>
                                                        <ul>
                                                            <li><a href="#">Bootees bag</a></li>
                                                            <li><a href="#">Blazers</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">clothing</a>
                                                        <ul>
                                                            <li><a href="#">coats</a></li>
                                                            <li><a href="#">T-shirts</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">Lingerie</a>
                                                        <ul>
                                                            <li><a href="#">Bands</a></li>
                                                            <li><a href="#">Furniture</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="/shop">Foorwear</a>
                                                <ul>
                                                    <li><a href="#">footwear men</a>
                                                        <ul>
                                                            <li><a href="#">gifts</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">footwear women</a>
                                                        <ul>
                                                            <li><a href="#">boots</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="/shop">Jewellery</a>
                                                <ul>
                                                    <li><a href="#">Rings</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="/shop">Accessories</a></li>
                                            <li><a href="/contact">Contact</a></li>
                                            {/* <li><a href="#">Pages</a>
                                                <ul>
                                                    <li><a href="about-us.html">About us</a></li>
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="blog-details.html">Blog Details</a></li>
                                                    <li><a href="cart.html">Cart</a></li>
                                                    <li><a href="checkout.html">Checkout</a></li>
                                                    <li><a href="contact.html">Contact</a></li>
                                                    <li><a href="my-account.html">My account</a></li>
                                                    <li><a href="/shop">Shop</a></li>
                                                    <li><a href="shop-list.html">Shop list</a></li>
                                                    <li><a href="single-product.html">Single Shop</a></li>
                                                    <li><a href="wishlist.html">Wishlist</a></li>
                                                    <li><a href="login.html">login page</a></li>
                                                    <li><a href="register.html">register page</a></li>
                                                </ul>
                                            </li> */}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
