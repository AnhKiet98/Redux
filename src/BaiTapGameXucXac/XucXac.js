import React, { Component } from 'react'
import { connect } from 'react-redux'
class XucXac extends Component {
    RenderXucXac = () => {
        return this.props.mangXucXac.map((mangxx, index) => {
            return <img key={index} className="m-1" style={{ width: "12%" }} src={mangxx.hinhAnh}></img>
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3 text-center">
                        <button onClick={() => {
                            this.props.datCuocTaiXiu(true)
                        }} className="btn btn-primary p-5 text-dark" style={{ fontSize: "50px" }}>Tài</button>
                    </div>

                    <div className="col-6 text-center">
                        {this.RenderXucXac()}
                    </div>

                    <div className="col-3 text-center">
                        <button onClick={() => {
                            this.props.datCuocTaiXiu(false)
                        }} className="btn btn-primary p-5 text-dark" style={{ fontSize: "50px" }}>Xỉu</button>
                    </div>

                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        mangXucXac: state.gameXucXacReducer.mangXucXac
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        datCuocTaiXiu: (ketQuaChon) => {
            const action = {
                type: 'DAT_CUOC_TAI_XIU',
                ketQuaChon
            }
            dispatch(action)
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(XucXac)