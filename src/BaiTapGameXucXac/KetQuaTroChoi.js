import React, { Component } from 'react'
import { connect } from 'react-redux'
class KetQuaTroChoi extends Component {
    render() {
        return (
            <div>
                <div className="text-center display-4">
                    BẠN CHỌN: <span className="text-success">{(this.props.banChon?'Tai':'Xiu')}</span>
                </div>

                <div className="text-center display-4">
                    SỐ BÀN THẮNG: <span className="text-danger">{this.props.soBanThang}</span>
                </div>
                <div className="text-center display-4">
                    TỔNG SỐ BÀN CHƠI: <span className="text-warning">{this.props.soBanChoi}</span>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        banChon: state.gameXucXacReducer.banChon,
        soBanThang: state.gameXucXacReducer.soBanThang,
        soBanChoi: state.gameXucXacReducer.soBanChoi
    }
}
export default connect(mapStateToProps, null)(KetQuaTroChoi)
