import React, { Component } from 'react'
import { connect } from 'react-redux'
class TuXi extends Component {
    render() {
        let { banChon } = this.props
        console.log(banChon);
        return (
            <div className="col-3">
                <div className="col-12 text-center">
                    <img style={{ width: "30%" }} src={banChon}></img>
                </div>
                <div className="col-12 text-center">
                    <img src="./img-tuxi/player.png" style={{ width: "70%" }}></img>
                </div>
                <div className="col-12 text-center">
                    <img onClick={() => {
                        this.props.chonTuXi('Keo')
                    }} src="./img-tuxi/keo.png" style={{ width: "30%",cursor:"pointer"}}></img>
                    <img onClick={() => {
                        this.props.chonTuXi('Bua')
                    }} src="./img-tuxi/bua.png" style={{ width: "30%",cursor:"pointer" }}></img>
                    <img onClick={() => {
                        this.props.chonTuXi('Bao')
                    }} src="./img-tuxi/bao.png" style={{ width: "30%",cursor:"pointer" }}></img>
                </div>
            </div>
        )
    }
}
const mapStatetoProps = state => {
    return {
        banChon: state.gameTuXiReducer.banChon
    }
}
const MapDispatchToProps = (dispatch) => {
    return {
        chonTuXi: (ketQuaChon) => {
            const action = {
                type: 'Nguoi_Choi_Chon',
                ketQuaChon
            }
            dispatch(action)
        }
    }
}
export default connect(mapStatetoProps, MapDispatchToProps)(TuXi)