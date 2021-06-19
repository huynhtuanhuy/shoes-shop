import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CForm,
    CFormGroup,
    CInput,
    CLabel,
    CSelect,
    CRow,
    CSwitch,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import _ from 'lodash';

import * as actions from '../../actions';
import * as networks from '../../networks';

class EditOrders extends Component {
    state = {
        formData: {
            id: '',
            customer_fullname: '',
            customer_phone: '',
            customer_email: '',
            customer_address: '',
            status: '',
            total: '',
            order_product_details: [],
        },
        productOptions: [],
    }

    async componentDidMount() {
        try {
            const orderId = this.props.match.params.id;
            const order = await networks.getSingleOrder(orderId);
            if (order.data && order.data.data) {
                this.setState({ formData: order.data.data });
            }

            const productOptions = await networks.getProductOptions();
            if (productOptions.data && productOptions.data.data) {
                this.setState({ productOptions: productOptions.data.data });
            }
        } catch (error) {

        }
    }

    handleChange = (e) => {
        const { formData } = this.state;
        const { name, value } = e.target;

        const newFormData = { ...formData };
        _.set(newFormData, name, value);

        this.setState({
            formData: newFormData
        });
    }

    handleSelectChange = (e) => {
        const { formData } = this.state;
        const { name, value } = e.target;

        let fieldValue = formData[name];

        if (fieldValue.includes(value)) {
            fieldValue = fieldValue.filter(item => item != value);
        } else {
            fieldValue.push(value);
        }

        if (!value) {
            fieldValue = [];
        }

        this.setState({
            formData: {
                ...formData,
                [name]: fieldValue,
            }
        });
    }

    handleSwitchChange = (e) => {
        const { formData } = this.state;
        const { name, checked } = e.target;
        this.setState({
            formData: {
                ...formData,
                [name]: checked,
            }
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { id, customer_fullname, customer_phone, customer_email, customer_address, status, total, order_product_details } = this.state.formData;

        this.props.updateOrder({ id, customer_fullname, customer_phone, customer_email, customer_address, status, total, order_product_details }, () => {
            this.props.history.push('/orders');
        });
    }

    render() {
        const { loading } = this.props;
        const { productOptions } = this.state;
        const { customer_fullname, customer_phone, customer_email, customer_address, status, order_product_details } = this.state.formData;

        return (
            <CRow>
                <CCol xs="12">
                    <CCard>
                        <CCardHeader>
                            Chỉnh sửa đơn hàng
                        </CCardHeader>
                        <CCardBody>
                            <CForm onSubmit={this.handleSubmit} id="new-form" className="form-horizontal">
                                <CFormGroup>
                                    <CLabel htmlFor="customer_fullname">Tên khách hàng</CLabel>
                                    <CInput value={customer_fullname} onChange={this.handleChange} required id="customer_fullname" name="customer_fullname" placeholder="Nhập tên khách hàng" />
                                </CFormGroup>
                                <CFormGroup>
                                    <CLabel htmlFor="customer_phone">Số điện thoại khách hàng</CLabel>
                                    <CInput value={customer_phone} onChange={this.handleChange} required id="customer_phone" name="customer_phone" placeholder="Nhập số điện thoại khách hàng" />
                                </CFormGroup>
                                <CFormGroup>
                                    <CLabel htmlFor="customer_email">Email khách hàng</CLabel>
                                    <CInput type="email" value={customer_email} onChange={this.handleChange} required id="customer_email" name="customer_email" placeholder="Nhập email khách hàng" />
                                </CFormGroup>
                                <CFormGroup>
                                    <CLabel htmlFor="customer_address">Địa chỉ khách hàng</CLabel>
                                    <CInput value={customer_address} onChange={this.handleChange} required id="customer_address" name="customer_address" placeholder="Nhập địa chỉ khách hàng" />
                                </CFormGroup>
                                <CFormGroup>
                                    <CLabel htmlFor="status">Trạng thái đơn hàng:</CLabel>
                                    <CSelect custom value={status} onChange={this.handleSelectChange} name="status" id="status">
                                        <option value="pending">Chờ xử lý</option>
                                        <option value="processing">Đang xử lý</option>
                                        <option value="packed">Đã đóng gói</option>
                                        <option value="shipping">Đang vận chuyển</option>
                                        <option value="accomplished">Đã hoàn thành</option>
                                        <option value="cancelled">Đã hủy</option>
                                    </CSelect>
                                </CFormGroup>
                                <CFormGroup>
                                    <CLabel htmlFor="order_product_details">Thông tin sản phẩm</CLabel>
                                    <div>
                                        {order_product_details.map((order_product_detail, index) => {
                                            const currentProduct = productOptions.filter(product => product.id == order_product_detail.product_detail.product_id.id)[0];

                                            return (
                                                <CCard key={index}>
                                                    <CCardBody>
                                                        <CFormGroup row className="my-0">
                                                            <CCol xs="4">
                                                                <CFormGroup>
                                                                    <CLabel htmlFor="product_id">Sản phẩm:</CLabel>
                                                                    <CSelect disabled required custom value={order_product_detail.product_detail.product_id.id} onChange={this.handleSelectChange} name="product_id" id="product_id">
                                                                        <option value="">Chọn sản phẩm</option>
                                                                        {productOptions.map(product => <option key={product.id} value={product.id}>{product.name}</option>)}
                                                                    </CSelect>
                                                                </CFormGroup>
                                                            </CCol>
                                                            <CCol xs="4">
                                                                <CFormGroup>
                                                                    <CLabel htmlFor="product_detail_id">Thông số sản phẩm:</CLabel>
                                                                    <CSelect required custom value={order_product_detail.product_detail.id} onChange={this.handleSelectChange} name="product_detail_id" id="product_detail_id">
                                                                        <option value="">Chọn thông số</option>
                                                                        {currentProduct && currentProduct.product_details && currentProduct.product_details.map(product_detail => <option key={product_detail.id} value={product_detail.id}>Màu: {product_detail.color_id && product_detail.color_id.color_name} - Size: {product_detail.size_id && product_detail.size_id.size} - Giá: {product_detail.price}</option>)}
                                                                    </CSelect>
                                                                </CFormGroup>
                                                            </CCol>
                                                            <CCol xs="4">
                                                                <CFormGroup>
                                                                    <CLabel htmlFor="quantity">Số lượng</CLabel>
                                                                    <CInput value={order_product_detail.quantity} onChange={this.handleChange} required id="quantity" name={`quantity`} placeholder="Nhập số lượng sản phẩm" />
                                                                </CFormGroup>
                                                            </CCol>
                                                        </CFormGroup>
                                                    </CCardBody>
                                                </CCard>
                                            );
                                        })}
                                    </div>
                                </CFormGroup>
                            </CForm>
                        </CCardBody>
                        <CCardFooter className="text-right">
                            <CButton disabled={loading} form="new-form" type="submit" size="sm" color="primary" className="mr-3"><CIcon name="cil-save" /> Lưu</CButton>
                            <Link to="/orders">
                                <CButton disabled={loading} type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Hủy bỏ</CButton>
                            </Link>
                        </CCardFooter>
                    </CCard>
                </CCol>
            </CRow>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.common.loading,
});

const mapDispatchToProps = dispatch => ({
    updateOrder: (order, cb) => dispatch(actions.updateOrder(order, cb)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditOrders);
