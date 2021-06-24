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
import _, { size } from 'lodash';
import Select from 'react-select';
import Dropzone from './Dropzone';

import * as actions from '../../actions';
import * as networks from '../../networks';

class EditProducts extends Component {
    state = {
        formData: {
            name: '',
            sku: '',
            description: '',
            is_new: false,
            is_disable: false,
            categories: [],
            product_details: [],
            images: [],
        },
        categoryOptions: [],
        colorOptions: [],
        sizeOptions: [],
        currentParentCategoryId: null,
    }

    async componentDidMount() {
        try {
            const productId = this.props.match.params.id;
            const product = await networks.getSingleProduct(productId);
            if (product.data && product.data.data) {
                this.setState({
                    formData: {
                        ...product.data.data,
                        categories: product.data.data.categories.map(item => item.category_id && item.category_id.id || item.category_id),
                        product_details: product.data.data.product_details.map(item => {
                            return {
                                id: item.id,
                                color_id: item.color_id.id,
                                price: item.price,
                                color: item.color_id,
                                sizes: item.sizes.map(sizeItem => {
                                    return {
                                        id: sizeItem.id,
                                        size_id: sizeItem.size_id.id,
                                        quantity: sizeItem.quantity,
                                        size: item.size_id,
                                    };
                                }),
                            };
                        }),
                        images: product.data.data.images.map(item => {
                            return {
                                id: item.id,
                                preview: `${process.env.REACT_APP_API_BASE_URL}/${item.image_path}`
                            };
                        }),
                    },
                    currentParentCategoryId: product.data.data.categories[0] && product.data.data.categories[0].category_id && product.data.data.categories[0].category_id.parent_id || null
                });
            }

            const colorOptions = await networks.getColorOptions();
            if (colorOptions.data && colorOptions.data.data) {
                this.setState({ colorOptions: colorOptions.data.data });
            }

            const sizeOptions = await networks.getSizeOptions();
            if (sizeOptions.data && sizeOptions.data.data) {
                this.setState({ sizeOptions: sizeOptions.data.data });
            }

            const categoryOptions = await networks.getProductCategoryOptions();
            if (categoryOptions.data && categoryOptions.data.data) {
                const parent = categoryOptions.data.data.filter(item => !item.parent_id).map(item => {
                    return {
                        label: item.name,
                        value: item.id,
                        children: categoryOptions.data.data.filter(_item => _item.parent_id && _item.parent_id == item.id).map(_item => ({
                            label: _item.name,
                            value: _item.id,
                        })),
                    };
                });
                if (parent[0] && parent[0].id) {
                    this.setState({ currentParentCategoryId: parent[0].id });
                }
                this.setState({ categoryOptions: parent });
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

    handleNormalSelectChange = (e) => {
        const { formData } = this.state;
        const { name, value } = e.target;

        const newFormData = { ...formData };
        _.set(newFormData, name, value);

        this.setState({
            formData: newFormData
        });
    }

    handleSelectChange = (option, action) => {
        console.log(action, option);
        const { formData } = this.state;

        this.setState({
            formData: {
                ...formData,
                [action.name]: option.map(item => item.value),
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

    handleSubmit = async (e) => {
        e.preventDefault();
        const { id, name, sku, description, is_new, is_disable, categories, product_details, images } = this.state.formData;

        const formData = new FormData();
        for (let i = 0; i < images.length; i++) {
            if (!images[i].id) {
                const imageFile = images[i];
                formData.append("files", imageFile);
            }
        }
        
        let imageUrls = images.filter(item => item.id);
        if (formData.getAll('files').length > 0) {
            const uploadImageResponse = await networks.uploadFile(formData);
            if (uploadImageResponse.data && uploadImageResponse.data.data && uploadImageResponse.data.data.urls) {
                imageUrls = [
                    ...imageUrls,
                    ...uploadImageResponse.data.data.urls.map(url => ({ url })),
                ];
            }
        }

        this.props.updateProduct({ id, name, sku, description, is_new, is_disable, categories, product_details, images: imageUrls }, () => {
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
                        color_id: '',
                        price: 0,
                        sizes: [
                            {
                                size_id: '',
                                quantity: 0,
                            }
                        ]
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

    handleAddNewSizeDetail = (detailIndex) => {
        const { formData } = this.state;

        formData.product_details[detailIndex].sizes.push({
            size_id: '',
            quantity: 0,
        });

        this.setState({
            formData,
        });
    }

    handleRemoveSizeDetail = (detailIndex, removeIndex) => {
        const { formData } = this.state;

        const newFormData = { ...formData };
        newFormData.product_details[detailIndex].sizes = newFormData.product_details[detailIndex].sizes.filter((item, index) => index != removeIndex)

        this.setState({
            formData,
        });
    }

    setFiles = (images) => {
        const { formData } = this.state;
        this.setState({
            formData: {
                ...formData,
                images,
            }
        })
    }

    removeFile = (removeIndex) => {
        const { formData } = this.state;
        this.setState({
            formData: {
                ...formData,
                images: formData.images.filter((_, index) => index != removeIndex),
            }
        })
    }

    render() {
        const { loading } = this.props;
        const { categoryOptions, currentParentCategoryId, colorOptions, sizeOptions } = this.state;
        const { name, sku, description, is_new, is_disable, categories, product_details, images } = this.state.formData;

        const currentParentCategory = categoryOptions.filter(item => item.value == currentParentCategoryId)[0] || categoryOptions[0];
        const _categoryOptions = currentParentCategory && currentParentCategory.children || [];
        console.log(images)

        return (
            <CRow>
                <CCol xs="12">
                    <CCard>
                        <CCardHeader>
                            Chỉnh sửa sản phẩm
                        </CCardHeader>
                        <CCardBody>
                            <CForm onSubmit={this.handleSubmit} id="new-form" className="form-horizontal">
                                <CFormGroup>
                                    <CLabel htmlFor="name">Tên sản phẩm</CLabel>
                                    <CInput value={name} onChange={this.handleChange} required id="name" name="name" placeholder="Nhập tên sản phẩm" />
                                </CFormGroup>
                                <CFormGroup>
                                    <CLabel htmlFor="sku">Mã sản phẩm</CLabel>
                                    <CInput disabled value={sku} onChange={this.handleChange} id="sku" name="sku" placeholder="Nhập mã sản phẩm" />
                                </CFormGroup>
                                <CFormGroup>
                                    <CLabel htmlFor="categories">Danh mục sản phẩm:</CLabel>
                                    <CSelect custom value={currentParentCategoryId} onChange={(e) => {
                                        this.setState({ currentParentCategoryId: e.target.value });
                                    }} className="mb-3">
                                        {categoryOptions.map(parentOption => <option key={parentOption.value} value={parentOption.value}>{parentOption.label}</option>)}
                                    </CSelect>
                                    <Select
                                        value={_categoryOptions.filter(item => categories.includes(item.value))}
                                        isMulti
                                        name="categories"
                                        options={_categoryOptions}
                                        classNamePrefix="select"
                                        styles={{
                                            container: styles => ({ ...styles, zIndex: 5 }),
                                        }}
                                        placeholder="Chọn danh mục sản phẩm"
                                        onChange={this.handleSelectChange}
                                        required
                                    />
                                </CFormGroup>
                                <CFormGroup>
                                    <CLabel htmlFor="description">Mô tả</CLabel>
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data={description || ""}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            this.handleChange({ target: { name: 'description', value: data } })
                                        }}
                                    />
                                </CFormGroup>
                                <CFormGroup>
                                    <CLabel htmlFor="images">Hình ảnh sản phẩm</CLabel>
                                    <Dropzone images={images} removeFile={this.removeFile} setFiles={this.setFiles} />
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
                                        {product_details.map((_, index) => (
                                            <CCard key={index}>
                                                <CCardBody>
                                                    <CFormGroup row className="my-0">
                                                        <CCol xs="6">
                                                            <CFormGroup>
                                                                <CLabel htmlFor="color_id">Màu sản phẩm</CLabel>
                                                                <CSelect required value={product_details[index].color_id} onChange={this.handleNormalSelectChange} id="color_id" name={`product_details[${index}].color_id`}>
                                                                    <option value="">Chọn màu sản phẩm</option>
                                                                    {colorOptions.map(color => <option key={color.id} value={color.id}>{color.color_name}</option>)}
                                                                </CSelect>
                                                            </CFormGroup>
                                                        </CCol>
                                                        <CCol xs="6">
                                                            <CFormGroup>
                                                                <CLabel htmlFor="price">Giá sản phẩm</CLabel>
                                                                <CInput type="number" value={product_details[index].price} onChange={this.handleChange} required id="price" name={`product_details[${index}].price`} placeholder="Nhập giá sản phẩm" />
                                                            </CFormGroup>
                                                        </CCol>
                                                    </CFormGroup>
                                                    {product_details[index].sizes && product_details[index].sizes.map((_, sizeIndex) => (
                                                        <CCard key={sizeIndex}>
                                                            <CCardBody>
                                                                <CFormGroup row className="my-0">
                                                                    <CCol xs="6">
                                                                        <CFormGroup>
                                                                            <CLabel htmlFor="size">Kích cỡ</CLabel>
                                                                            <CSelect required value={product_details[index].sizes[sizeIndex].size_id} onChange={this.handleNormalSelectChange} id="size_id" name={`product_details[${index}].sizes[${sizeIndex}].size_id`}>
                                                                                <option value="">Chọn size sản phẩm</option>
                                                                                {sizeOptions.map(size => <option key={size.id} value={size.id}>{size.size}</option>)}
                                                                            </CSelect>
                                                                        </CFormGroup>
                                                                    </CCol>
                                                                    <CCol xs="6">
                                                                        <CFormGroup>
                                                                            <CLabel htmlFor="quantity">Số lượng</CLabel>
                                                                            <CInput type="number" value={product_details[index].sizes[sizeIndex].quantity} onChange={this.handleChange} required id="quantity" name={`product_details[${index}].sizes[${sizeIndex}].quantity`} placeholder="Nhập số lượng" />
                                                                        </CFormGroup>
                                                                    </CCol>
                                                                </CFormGroup>
                                                            </CCardBody>
                                                            <CCardFooter className="text-right">
                                                                <CButton disabled={loading || (product_details[index].sizes && product_details[index].sizes.length <= 1) || product_details[index].sizes[sizeIndex].id} onClick={() => this.handleRemoveSizeDetail(index, sizeIndex)} type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Xóa size</CButton>
                                                            </CCardFooter>
                                                        </CCard>
                                                    ))}
                                                    <div className="text-center">
                                                        <CButton disabled={loading} onClick={() => this.handleAddNewSizeDetail(index)} size="sm" color="primary"><CIcon name="cil-plus" /> Thêm size</CButton>
                                                    </div>
                                                </CCardBody>
                                                <CCardFooter className="text-right">
                                                    <CButton disabled={loading || product_details[index].id} onClick={() => this.handleRemoveDetail(index)} type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Xóa thông số</CButton>
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
                            <CButton disabled={loading} form="new-form" type="submit" size="sm" color="primary" className="mr-3"><CIcon name="cil-save" /> Lưu</CButton>
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
    updateProduct: (product, cb) => dispatch(actions.updateProduct(product, cb)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProducts);
