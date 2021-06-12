import React, { Component } from 'react'

export default class SingleProduct extends Component {
    componentDidMount() {
        if (window.$) {
            window.$(".product-page-slider").owlCarousel({
                autoPlay: false,
                slideSpeed:2000,
                pagination:false,
                navigation:true,
                items : 3,
                itemsDesktop : [1199,3],
                itemsDesktopSmall : [980,3],
                itemsTablet: [768,2],
                itemsMobile : [479,2],
            });
            window.$(".optima_zoom").elevateZoom({gallery:'optima_gallery', cursor: 'pointer', galleryActiveClass: "active", imageCrossfade: true, loadingIcon: ""});
        
            window.$(".optima_zoom").bind("click", function(e) {
                var ez =   window.$('.optima_zoom').data('elevateZoom');
                ez.closeAll(); //NEW: This function force hides the lens, tint and window
                // window.$.fancybox(ez.getGalleryList());
                return false;
            });
            window.$(".upsell-slider").owlCarousel({
                autoPlay: false,
                slideSpeed:2000,
                pagination:false,
                navigation:true,
                items : 4,
                itemsDesktop : [1199,3],
                itemsDesktopSmall : [980,3],
                itemsTablet: [768,2],
                itemsMobile : [479,1],
            });
            window.$(".related-slider").owlCarousel({
                autoPlay: false,
                slideSpeed:2000,
                pagination:false,
                navigation:true,
                items : 4,
                itemsDesktop : [1199,3],
                itemsDesktopSmall : [980,3],
                itemsTablet: [768,2],
                itemsMobile : [479,1],
            });
            window.$(".cart-plus-minus").append('<div class="dec qtybutton"><</div><div class="inc qtybutton">></div>');
            window.$(".qtybutton").on("click", function() {
                var $button = window.$(this);
                var oldValue = $button.parent().find("input").val();
                if ($button.text() == ">") {
                    var newVal = parseFloat(oldValue) + 1;
                } else {
                    // Don't allow decrementing below zero
                    if (oldValue > 0) {
                        var newVal = parseFloat(oldValue) - 1;
                    } else {
                        newVal = 0;
                    }
                }
                $button.parent().find("input").val(newVal);
            });
        }
    }

    render() {
        return (
            <>
                <div>
                    <div className="Single-product-location home2">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="location">
                                        <ul>
                                            <li><a href="/" title="go to homepage">Home<span>/</span></a></li>
                                            <li><strong> Fusce aliquam</strong></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* single product area end */}
                    {/* single product details start */}
                    <div className="single-product-details">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="single-product-img tab-content">
                                        <div className="single-pro-main-image tab-pane active" id="pro-large-img-1">
                                            <a href="#"><img className="optima_zoom" src="/img/product/7.png" data-zoom-image="/img/product/7.png" alt="optima" /></a>
                                        </div>
                                        <div className="single-pro-main-image tab-pane" id="pro-large-img-2">
                                            <a href="#"><img className="optima_zoom" src="/img/product/2.png" data-zoom-image="/img/product/2.png" alt="optima" /></a>
                                        </div>
                                        <div className="single-pro-main-image tab-pane" id="pro-large-img-3">
                                            <a href="#"><img className="optima_zoom" src="/img/product/8.png" data-zoom-image="/img/product/8.png" alt="optima" /></a>
                                        </div>
                                        <div className="single-pro-main-image tab-pane" id="pro-large-img-4">
                                            <a href="#"><img className="optima_zoom" src="/img/product/1.png" data-zoom-image="/img/product/1.png" alt="optima" /></a>
                                        </div>
                                        <div className="single-pro-main-image tab-pane" id="pro-large-img-5">
                                            <a href="#"><img className="optima_zoom" src="/img/product/9.png" data-zoom-image="/img/product/9.png" alt="optima" /></a>
                                        </div>
                                    </div>
                                    <div className="product-page-slider">
                                        <div className="single-product-slider">
                                            <a href="#pro-large-img-1" data-toggle="tab">
                                                <img src="/img/product/28.png" alt />
                                            </a>
                                        </div>
                                        <div className="single-product-slider">
                                            <a href="#pro-large-img-2" data-toggle="tab">
                                                <img src="/img/product/30.png" alt />
                                            </a>
                                        </div>
                                        <div className="single-product-slider">
                                            <a href="#pro-large-img-3" data-toggle="tab">
                                                <img src="/img/product/29.png" alt />
                                            </a>
                                        </div>
                                        <div className="single-product-slider">
                                            <a href="#pro-large-img-4" data-toggle="tab">
                                                <img src="/img/product/31.png" alt />
                                            </a>
                                        </div>
                                        <div className="single-product-slider">
                                            <a href="#pro-large-img-5" data-toggle="tab">
                                                <img src="/img/product/29.png" alt />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="single-product-details">
                                        <a href="#" className="product-name">Fusce aliquam</a>
                                        <div className="list-product-info">
                                            <div className="price-rating">
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
                                        </div>
                                        <div className="avalable">
                                            <p>Availability:<span> In stock</span></p>
                                        </div>
                                        <div className="item-price">
                                            <span>$800.00</span>
                                        </div>
                                        <div className="single-product-info">
                                            <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum. Quisque in arcu id dui vulputate mollis eget non arcu. Aenean et nulla purus. Mauris vel tellus non nunc mattis lobortis. </p>
                                            <div className="share">
                                                <img src="/img/product/share.png" alt />
                                            </div>
                                        </div>
                                        <div className="action">
                                            <ul className="add-to-links">
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-heart" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-refresh" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-envelope" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="select-catagory">
                                            <div className="color-select">
                                                <label className="required">
                                                    <em>*</em> Color
                                                </label>
                                                <div className="input-box">
                                                    <select id="select-1">
                                                        <option value>-- Please Select --</option>
                                                        <option value>black +$2.00</option>
                                                        <option value>blue +$1.00</option>
                                                        <option value>yellow +$1.00</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="size-select">
                                                <label className="required">
                                                    <em>*</em> Size
                                                </label>
                                                <div className="input-box">
                                                    <select id="select-2">
                                                        <option value>-- Please Select --</option>
                                                        <option value>L +$2.00</option>
                                                        <option value>M +$1.00</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cart-item">
                                            <div className="price-box">
                                                <span>$170</span>
                                            </div>
                                            <div className="single-cart">
                                                <div className="cart-plus-minus">
                                                    <label>Qty: </label>
                                                    <input className="cart-plus-minus-box" type="text" name="qtybutton" defaultValue={0} />
                                                </div>
                                                <a href="/cart">
                                                    <button className="cart-btn">Add to cart</button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* single product details end */}
                    {/* single product tab start */}
                    <div className="single-product-tab-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="single-product-tab">
                                        <ul className="single-product-tab-navigation" role="tablist">
                                            <li role="presentation" className="active"><a href="#tab1" aria-controls="tab1" role="tab" data-toggle="tab">Product Description</a></li>
                                            <li role="presentation"><a href="#tab2" aria-controls="tab2" role="tab" data-toggle="tab">reviews</a></li>
                                            <li role="presentation"><a href="#tab3" aria-controls="tab3" role="tab" data-toggle="tab">product tag</a></li>
                                        </ul>
                                        {/* Tab panes */}
                                        <div className="tab-content single-product-page">
                                            <div role="tabpanel" className="tab-pane fade in active" id="tab1">
                                                <div className="single-p-tab-content">
                                                    <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum. Quisque in arcu id dui vulputate mollis eget non arcu. Aenean et nulla purus. Mauris vel tellus non nunc mattis lobortis. </p>
                                                </div>
                                            </div>
                                            <div role="tabpanel" className="tab-pane fade" id="tab2">
                                                <div className="single-p-tab-content">
                                                    <div className="row">
                                                        <div className="col-md-5">
                                                            <div className="product-review">
                                                                <p> <a href="#"> plaza</a> <span>Review by</span> plaza </p>
                                                                <div className="product-rating-info">
                                                                    <p>value</p>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="product-rating-info">
                                                                    <p>Quality</p>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="product-rating-info">
                                                                    <p>Price</p>
                                                                    <div className="ratings">
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star" />
                                                                        <i className="fa fa-star-half-o" />
                                                                    </div>
                                                                </div>
                                                                <div className="review-date">
                                                                    <p>plaza <em> (Posted on 8/27/2015)</em></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-7">
                                                            <div className="rate-product hidden-xs">
                                                                <div className="rate-product-heading">
                                                                    <h3>You're reviewing: Fusce aliquam</h3>
                                                                    <h3>How do you rate this product? <em>*</em></h3>
                                                                </div>
                                                                <form action="#">
                                                                    <table className="product-review-table">
                                                                        <thead>
                                                                            <tr>
                                                                                <th />
                                                                                <th>1 star</th>
                                                                                <th>2 star</th>
                                                                                <th>3 star</th>
                                                                                <th>4 star</th>
                                                                                <th>5 star</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <th>Price</th>
                                                                                <td> <input type="radio" className="radio" name="ratings[1]" /> </td>
                                                                                <td> <input type="radio" className="radio" name="ratings[1]" /> </td>
                                                                                <td> <input type="radio" className="radio" name="ratings[1]" /> </td>
                                                                                <td> <input type="radio" className="radio" name="ratings[1]" /> </td>
                                                                                <td> <input type="radio" className="radio" name="ratings[1]" /> </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th>Value</th>
                                                                                <td> <input type="radio" className="radio" name="ratings[2]" /> </td>
                                                                                <td> <input type="radio" className="radio" name="ratings[2]" /> </td>
                                                                                <td> <input type="radio" className="radio" name="ratings[2]" /> </td>
                                                                                <td> <input type="radio" className="radio" name="ratings[2]" /> </td>
                                                                                <td> <input type="radio" className="radio" name="ratings[2]" /> </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th>Quality</th>
                                                                                <td> <input type="radio" className="radio" name="ratings[3]" /> </td>
                                                                                <td> <input type="radio" className="radio" name="ratings[3]" /> </td>
                                                                                <td> <input type="radio" className="radio" name="ratings[3]" /> </td>
                                                                                <td> <input type="radio" className="radio" name="ratings[3]" /> </td>
                                                                                <td> <input type="radio" className="radio" name="ratings[3]" /> </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <ul className="form-list">
                                                                        <li>
                                                                            <label> nickname <em>*</em> </label>
                                                                            <input type="text" />
                                                                        </li>
                                                                        <li>
                                                                            <label> Summary of Your Review <em>*</em> </label>
                                                                            <input type="text" />
                                                                        </li>
                                                                        <li>
                                                                            <label> Review <em>*</em> </label>
                                                                            <textarea cols={3} rows={5} defaultValue={""} />
                                                                        </li>
                                                                    </ul>
                                                                    <button type="submit"> submit review</button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div role="tabpanel" className="tab-pane fade" id="tab3">
                                                <div className="single-p-tab-content">
                                                    <div className="add-tab-title">
                                                        <p> add your tag </p>
                                                    </div>
                                                    <div className="add-tag">
                                                        <form action="#">
                                                            <input type="text" />
                                                            <button type="submit">add tags</button>
                                                        </form>
                                                    </div>
                                                    <p className="tag-rules">Use spaces to separate tags. Use single quotes (') for phrases.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* single product tab end */}
                    {/* upsell product area start*/}
                    <div className="upsell-product home2">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="product-title">
                                        <h2>upsell products</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="upsell-slider">
                                    <div className="col-md-12">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="/single-product">
                                                    <img src="/img/product/25.png" alt className="primary-img" />
                                                    <img src="/img/product/26.png" alt className="secondary-img" />
                                                </a>
                                            </div>
                                            <div className="list-product-info">
                                                <div className="price-rating">
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
                                            </div>
                                            <div className="product-price">
                                                <div className="product-name">
                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                </div>
                                                <div className="price-rating">
                                                    <span>$170.00</span>
                                                </div>
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
                                            <div className="list-product-info">
                                                <div className="price-rating">
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
                                            </div>
                                            <div className="product-price">
                                                <div className="product-name">
                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                </div>
                                                <div className="price-rating">
                                                    <span>$170.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="/single-product">
                                                    <img src="/img/product/21.png" alt className="primary-img" />
                                                    <img src="/img/product/22.png" alt className="secondary-img" />
                                                </a>
                                            </div>
                                            <div className="list-product-info">
                                                <div className="price-rating">
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
                                            </div>
                                            <div className="product-price">
                                                <div className="product-name">
                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                </div>
                                                <div className="price-rating">
                                                    <span>$170.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="/single-product">
                                                    <img src="/img/product/19.png" alt className="primary-img" />
                                                    <img src="/img/product/20.png" alt className="secondary-img" />
                                                </a>
                                            </div>
                                            <div className="list-product-info">
                                                <div className="price-rating">
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
                                            </div>
                                            <div className="product-price">
                                                <div className="product-name">
                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                </div>
                                                <div className="price-rating">
                                                    <span>$170.00</span>
                                                </div>
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
                                            <div className="list-product-info">
                                                <div className="price-rating">
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
                                            </div>
                                            <div className="product-price">
                                                <div className="product-name">
                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                </div>
                                                <div className="price-rating">
                                                    <span>$170.00</span>
                                                </div>
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
                                            <div className="list-product-info">
                                                <div className="price-rating">
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
                                            </div>
                                            <div className="product-price">
                                                <div className="product-name">
                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                </div>
                                                <div className="price-rating">
                                                    <span>$170.00</span>
                                                </div>
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
                                            <div className="list-product-info">
                                                <div className="price-rating">
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
                                            </div>
                                            <div className="product-price">
                                                <div className="product-name">
                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                </div>
                                                <div className="price-rating">
                                                    <span>$170.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="/single-product">
                                                    <img src="/img/product/11.png" alt className="primary-img" />
                                                    <img src="/img/product/12.png" alt className="secondary-img" />
                                                </a>
                                            </div>
                                            <div className="list-product-info">
                                                <div className="price-rating">
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
                                            </div>
                                            <div className="product-price">
                                                <div className="product-name">
                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                </div>
                                                <div className="price-rating">
                                                    <span>$170.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* upsell product area end*/}
                    {/* related product area start*/}
                    <div className="related-product home2">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="product-title">
                                        <h2>related products</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="related-slider">
                                    <div className="col-md-12">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="/single-product">
                                                    <img src="/img/product/25.png" alt className="primary-img" />
                                                    <img src="/img/product/26.png" alt className="secondary-img" />
                                                </a>
                                            </div>
                                            <div className="product-price">
                                                <div className="product-name">
                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                </div>
                                                <div className="price-rating">
                                                    <span>$170.00</span>
                                                </div>
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
                                            <div className="product-price">
                                                <div className="product-name">
                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                </div>
                                                <div className="price-rating">
                                                    <span>$170.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="/single-product">
                                                    <img src="/img/product/21.png" alt className="primary-img" />
                                                    <img src="/img/product/22.png" alt className="secondary-img" />
                                                </a>
                                            </div>
                                            <div className="product-price">
                                                <div className="product-name">
                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                </div>
                                                <div className="price-rating">
                                                    <span>$170.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="/single-product">
                                                    <img src="/img/product/19.png" alt className="primary-img" />
                                                    <img src="/img/product/20.png" alt className="secondary-img" />
                                                </a>
                                            </div>
                                            <div className="product-price">
                                                <div className="product-name">
                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                </div>
                                                <div className="price-rating">
                                                    <span>$170.00</span>
                                                </div>
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
                                            <div className="product-price">
                                                <div className="product-name">
                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                </div>
                                                <div className="price-rating">
                                                    <span>$170.00</span>
                                                </div>
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
                                            <div className="product-price">
                                                <div className="product-name">
                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                </div>
                                                <div className="price-rating">
                                                    <span>$170.00</span>
                                                </div>
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
                                            <div className="product-price">
                                                <div className="product-name">
                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                </div>
                                                <div className="price-rating">
                                                    <span>$170.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="/single-product">
                                                    <img src="/img/product/11.png" alt className="primary-img" />
                                                    <img src="/img/product/12.png" alt className="secondary-img" />
                                                </a>
                                            </div>
                                            <div className="product-price">
                                                <div className="product-name">
                                                    <a href="/single-product" title="Fusce aliquam">Fusce aliquam</a>
                                                </div>
                                                <div className="price-rating">
                                                    <span>$170.00</span>
                                                </div>
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
