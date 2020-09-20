import React, { Component } from 'react'
import SanPhamRedux from './SanPhamRedux'

export default class DanhSachSanPhamRedux extends Component {
    RenderSP = () => {
        return this.props.mangSanPham.map((sanpham, index) => {
            return <div className="col-4" key={index}>
                <SanPhamRedux sanpham={sanpham}/>
            </div>
        })
    }
    render() {
        return (
            <div>
                <h3 className="text-center">Bài Tập Giỏ Hàng</h3>
                <div className="row">
                    {this.RenderSP()}
                </div>
            </div>
        )
    }
}
