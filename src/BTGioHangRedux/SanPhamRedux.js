import React, { Component } from 'react'
import {connect} from 'react-redux'
class SanPhamRedux extends Component {
    render() {
        let { sanpham } = this.props
        return (
            <div>
                <div className="card text-center">
                    <img className="card-img-top" src={sanpham.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{sanpham.tenSP}</h4>
                        <p className="card-text">{sanpham.giaBan}</p>
                        <button className="btn btn-success" onClick={() => {
                            this.props.themGioHang(sanpham);
                        }}>Thêm Chi Tiết</button>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        themGioHang: (sanPhamClick) => {
            console.log('sanPhamClick', sanPhamClick)
            const action={
                type:'THEM_GIO_HANG',
                sanPham:sanPhamClick
            }
            dispatch(action);
        }
    }
}
export default connect(null, mapDispatchToProps)(SanPhamRedux)