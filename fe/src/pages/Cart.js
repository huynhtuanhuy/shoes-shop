import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import * as actions from '../actions';

const baseUrl = process.env.REACT_APP_API_BASE_URL;

class Cart extends Component {
    state = {
        editingIndex: null,
        editingData: null,
    }

    handleEmptyCart = () => {
        this.props.updateCarts([]);
    }

    handleRemoveCartItem = (removeIndex) => {
        const { carts } = this.props;

        this.props.updateCarts(
            carts.filter((item, index) => index != removeIndex),
            () => {
                this.props.getCarts({});
                toast.success("Xóa sản phẩm khỏi giỏ hàng thành công!");
            }
        );
    }

    handleEditCartItem = (editIndex, editData) => {
        this.setState({
            editingIndex: editIndex,
            editingData: {
                ...editData
            },
        });
    }

    handleSaveCartItem = (saveIndex) => {
        const { carts } = this.props;

        carts[saveIndex] = this.state.editingData;

        this.props.updateCarts(
            carts,
            () => {
                this.props.getCarts({});
                toast.success("Cập nhật giỏ hàng thành công!");
                this.setState({
                    editingIndex: null,
                    editingData: null,
                });
            }
        );
    }

    handleUpdateQuantity = (e) => {
        const { editingData } = this.state;
        const quantity = Number(e.target.value);

        if (quantity < 0 || quantity > editingData.productSizeDetail.quantity) {
            toast.error("Số lượng sản phẩm không hợp lệ!");
        } else {
            editingData.quantity = quantity;
            this.setState({ editingData });
        }
    }

    render() {
        const { editingIndex, editingData } = this.state;
        const { carts } = this.props;

        return (
            <div className="shopping-cart">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="location">
                                <ul>
                                    <li><a href="/" title="go to homepage">Home<span>/</span></a></li>
                                    <li><strong> Giỏ hàng</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="table-responsive">
                                <table className="table-bordered table table-hover">
                                    <thead>
                                        <tr>
                                            <th className="cart-item-img" />
                                            <th className="cart-product-name text-center">Sản phẩm</th>
                                            <th className="unit-price text-center">Giá</th>
                                            <th className="quantity text-center">Số lượng</th>
                                            <th className="subtotal text-center">Tổng cộng</th>
                                            <th className="remove-icon" />
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        {carts && carts.length > 0 ? carts.map((cartItem, index) => (
                                            <tr>
                                                <td className="cart-item-img">
                                                    <Link to={`/product/${cartItem.product.id}`}>
                                                        <img width="100" src={`${baseUrl}/${cartItem.product.images && cartItem.product.images[0] && cartItem.product.images[0].image_path}`} alt />
                                                    </Link>
                                                </td>
                                                <td className="cart-product-name">
                                                    <a href="/single-product">{cartItem.product.name}</a>
                                                </td>
                                                <td className="unit-price">
                                                    <span>{Number(cartItem.price || 0).toLocaleString()} VNĐ</span>
                                                </td>
                                                <td className="quantity">
                                                    <span>
                                                        {editingIndex != null && carts[editingIndex] && editingIndex == index ? (
                                                            <input type="number" value={editingData.quantity} onChange={this.handleUpdateQuantity} />
                                                        ) : cartItem.quantity}
                                                    </span>
                                                </td>
                                                <td className="subtotal">
                                                    <span>{Number((cartItem.price || 0)*cartItem.quantity).toLocaleString()} VNĐ</span>
                                                </td>
                                                <td className="remove-icon">
                                                    {editingIndex != null && carts[editingIndex] ? (editingIndex == index ? (
                                                        <a href="#" onClick={(e) => {
                                                            e.preventDefault();
                                                            this.handleSaveCartItem(index);
                                                        }} style={{marginRight: 10,}}>
                                                            <span className="glyphicon glyphicon-floppy-disk"></span>
                                                        </a>
                                                    ) : '') : (
                                                        <a href="#" onClick={(e) => {
                                                            e.preventDefault();
                                                            this.handleEditCartItem(index, cartItem);
                                                        }} style={{marginRight: 10,}}>
                                                            <span className="glyphicon glyphicon-edit"></span>
                                                        </a>
                                                    )}
                                                    <a href="#" onClick={(e) => {
                                                        e.preventDefault();
                                                        this.handleRemoveCartItem(index);
                                                    }}>
                                                        <span style={{color: 'red'}} className="glyphicon glyphicon-remove"></span>
                                                    </a>
                                                </td>
                                            </tr>
                                        )) : ''}
                                    </tbody>
                                </table>
                                {!carts || carts.length == 0 ? <p className="text-center">Giỏ hàng trống</p> : ''}
                                <div className="shopping-button">
                                    <div className="continue-shopping">
                                        <Link to="/">
                                            <button type="submit">Tiếp tục mua sắm</button>
                                        </Link>
                                    </div>
                                    <div className="shopping-cart-left">
                                        <button onClick={this.handleEmptyCart} type="submit">Làm trống giỏ hàng</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {carts && carts.length > 0 ? (
                        <div className="row">
                            <div className="col-sm-4 col-sm-offset-8">
                                <div className="totals">
                                    <h3>Tổng cộng <span>{carts && carts.length > 0 ? Number(carts.reduce((total, cartItem) => total + (cartItem.price || 0)*cartItem.quantity, 0)).toLocaleString() : 0} VNĐ</span></h3>
                                    <div className="shopping-button">
                                        <a href="/checkout">
                                            <button type="submit">Tiến hành thanh toán</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : ''}
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.common.loading,
        carts: state.carts.carts,
    }
}

const mapDispatchToProps = dispatch => ({
    updateCarts: (carts, cb) => dispatch(actions.updateCarts(carts, cb)),
    getCarts: (params) => dispatch(actions.getCarts(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart)