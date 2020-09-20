import React, { Component } from 'react'
import { connect } from 'react-redux'
class GioHangredux extends Component {
    renderGH = () => {
        return this.props.gioHang.map((spGioHang, index) => {
            return <tr key={index}>
                <td>{spGioHang.maSP}</td>
                <td>{spGioHang.tenSP}</td>
                <td>{spGioHang.tenSP}</td>
                <td>{spGioHang.soLuong}</td>
                <td>{spGioHang.giaBan}</td>
                <td>{spGioHang.giaBan*spGioHang.soLuong}</td>
                <td></td>
            </tr>
        })
    }
    render() {
        return (
            <div>
                <div className="modal-body">
                    <div className="container-fluid">
                        <table className="table">
                            <tr>
                                <th>Mã Sản Phẩm</th>
                                <th>Hinh Anh</th>
                                <th>Tên San Phẩm</th>
                                <th>Số Lượng</th>
                                <th>Đơn Giá</th>
                                <th>Thành tiền</th>
                                <th></th>
                            </tr>
                            <tbody>
                                {this.renderGH()}
                            </tbody>
                            {/* <tfoot>
                                <tr>
                                    <td colSpan="5">

                                    </td>
                                    <td>
                                        Thành tiền
                                    </td>
                                    <td>
                                        {
                                            this.props.gioHang.reduce((tongtien, spgh, index) => {
                                                return (tongtien += spgh.giaBan * spgh.soLuong).toLocaleString()
                                            }, 0)
                                        }
                                    </td>
                                </tr>
                            </tfoot> */}
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {//state laf rootreducer
    return {
        gioHang: state.GioHangReducer.gioHang
    }
}
export default connect(mapStatetoProps)(GioHangredux)