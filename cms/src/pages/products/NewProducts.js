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

class NewProducts extends Component {
    state = {
        formData: {
            name: '',
            sku: '',
            description: '',
            is_new: false,
            is_disable: false,
            categories: [],
            product_details: [],
        },
        categoryOptions: [],
    }

    async componentDidMount() {
        try {
            const categoryOptions = await networks.getProductCategoryOptions();
            if (categoryOptions.data && categoryOptions.data.data) {
                this.setState({ categoryOptions: categoryOptions.data.data });
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
        const { name, sku, description, is_new, is_disable, categories, product_details } = this.state.formData;

        this.props.createProduct({ name, sku, description, is_new, is_disable, categories, product_details }, () => {
            this.props.history.push('/products');
        });
    }

    handleAddNewDetail = () => {
        const { formData } = this.state;

        this.setState({
            formData: {
                ...formData,
                product_details: [
                    ...formData.product_details,
                    {
                        color_name: '',
                        color_code: '',
                        size: '',
                        size_code: '',
                        price: 0,
                        quantity: 0,
                    }
                ]
            }
        });
    }

    handleRemoveDetail = (removeIndex) => {
        const { formData } = this.state;

        this.setState({
            formData: {
                ...formData,
                product_details: formData.product_details.filter((item, index) => index != removeIndex)
            }
        });
    }

    render() {
        const { loading } = this.props;
        const { categoryOptions } = this.state;
        const { name, sku, description, is_new, is_disable, categories, product_details } = this.state.formData;

        return (
            <CRow>
                <CCol xs="12">
                    <CCard>
                        <CCardHeader>
                            Tạo sản phẩm mới
                        </CCardHeader>
                        <CCardBody>
                            <CForm onSubmit={this.handleSubmit} id="new-form" className="form-horizontal">
                                <CFormGroup>
                                    <CLabel htmlFor="name">Tên sản phẩm</CLabel>
                                    <CInput value={name} onChange={this.handleChange} required id="name" name="name" placeholder="Nhập tên sản phẩm" />
                                </CFormGroup>
                                <CFormGroup>
                                    <CLabel htmlFor="sku">Mã sản phẩm</CLabel>
                                    <CInput value={sku} onChange={this.handleChange} id="sku" name="sku" placeholder="Nhập mã sản phẩm" />
                                </CFormGroup>
                                <CFormGroup>
                                    <CLabel htmlFor="categories">Danh mục sản phẩm:</CLabel>
                                    <CSelect multiple custom value={categories} onChange={this.handleSelectChange} name="categories" id="categories">
                                        <option value="">Chọn danh mục sản phẩm</option>
                                        {categoryOptions.map(parentOption => <option key={parentOption.id} value={parentOption.id}>{parentOption.name}</option>)}
                                    </CSelect>
                                </CFormGroup>
                                <CFormGroup>
                                    <CLabel htmlFor="description">Mô tả</CLabel>
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data={description}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            this.handleChange({ target: { name: 'description', value: data } })
                                        }}
                                    />
                                </CFormGroup>
                                <CFormGroup>
                                    <CLabel htmlFor="is_new">Sản phẩm mới</CLabel>
                                    <CSwitch
                                        className="ml-2"
                                        color="info"
                                        name="is_new"
                                        checked={is_new}
                                        onChange={this.handleSwitchChange}
                                        shape="pill"
                                    />
                                </CFormGroup>
                                <CFormGroup>
                                    <CLabel htmlFor="is_disable">Hiển thị sản phẩm</CLabel>
                                    <CSwitch
                                        className="ml-2"
                                        color="info"
                                        name="is_disable"
                                        checked={is_disable}
                                        onChange={this.handleSwitchChange}
                                        shape="pill"
                                    />
                                </CFormGroup>
                                <CFormGroup>
                                    <CLabel htmlFor="product_details">Thông số sản phẩm</CLabel>
                                    <div>
                                        {product_details.map((product_detail, index) => (
                                            <CCard key={index}>
                                                <CCardBody>
                                                    <CFormGroup row className="my-0">
                                                        <CCol xs="6">
                                                            <CFormGroup>
                                                                <CLabel htmlFor="color_name">Màu sản phẩm</CLabel>
                                                                <CInput value={product_detail.color_name} onChange={this.handleChange} required id="color_name" name={`product_details[${index}].color_name`} placeholder="Nhập màu sản phẩm" />
                                                            </CFormGroup>
                                                        </CCol>
                                                        <CCol xs="6">
                                                            <CFormGroup>
                                                                <CLabel htmlFor="color_code">Mã màu</CLabel>
                                                                <CInput value={product_detail.color_code} onChange={this.handleChange} required id="color_code" name={`product_details[${index}].color_code`} placeholder="Nhập mã màu" />
                                                            </CFormGroup>
                                                        </CCol>
                                                    </CFormGroup>
                                                    <CFormGroup row className="my-0">
                                                        <CCol xs="6">
                                                            <CFormGroup>
                                                                <CLabel htmlFor="size">Kích cỡ</CLabel>
                                                                <CInput value={product_detail.size} onChange={this.handleChange} required id="size" name={`product_details[${index}].size`} placeholder="Nhập kích cỡ" />
                                                            </CFormGroup>
                                                        </CCol>
                                                        <CCol xs="6">
                                                            <CFormGroup>
                                                                <CLabel htmlFor="size_code">Mã kích cỡ</CLabel>
                                                                <CInput value={product_detail.size_code} onChange={this.handleChange} required id="size_code" name={`product_details[${index}].size_code`} placeholder="Nhập mã kích cỡ" />
                                                            </CFormGroup>
                                                        </CCol>
                                                    </CFormGroup>
                                                    <CFormGroup row className="my-0">
                                                        <CCol xs="6">
                                                            <CFormGroup>
                                                                <CLabel htmlFor="price">Giá sản phẩm</CLabel>
                                                                <CInput type="number" value={product_detail.price} onChange={this.handleChange} required id="price" name={`product_details[${index}].price`} placeholder="Nhập giá sản phẩm" />
                                                            </CFormGroup>
                                                        </CCol>
                                                        <CCol xs="6">
                                                            <CFormGroup>
                                                                <CLabel htmlFor="quantity">Số lượng</CLabel>
                                                                <CInput type="number" value={product_detail.quantity} onChange={this.handleChange} required id="quantity" name={`product_details[${index}].quantity`} placeholder="Nhập số lượng" />
                                                            </CFormGroup>
                                                        </CCol>
                                                    </CFormGroup>
                                                </CCardBody>
                                                <CCardFooter className="text-right">
                                                    <CButton disabled={loading} onClick={() => this.handleRemoveDetail(index)} type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Xóa thông số</CButton>
                                                </CCardFooter>
                                            </CCard>
                                        ))}
                                        <div className="text-center">
                                            <CButton disabled={loading} onClick={this.handleAddNewDetail} size="sm" color="primary"><CIcon name="cil-plus" /> Thêm thông số</CButton>
                                        </div>
                                    </div>
                                </CFormGroup>
                            </CForm>
                        </CCardBody>
                        <CCardFooter className="text-right">
                            <CButton disabled={loading} form="new-form" type="submit" size="sm" color="primary" className="mr-3"><CIcon name="cil-plus" /> Tạo</CButton>
                            <Link to="/products">
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
    createProduct: (product, cb) => dispatch(actions.createProduct(product, cb)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewProducts);
