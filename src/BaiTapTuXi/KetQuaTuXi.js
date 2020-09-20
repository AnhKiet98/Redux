import React, { Component } from 'react'
import { connect } from 'react-redux'
class KetQuaTuXi extends Component {
    render() {
        let { soBanThang } = this.props
        let { soBanChoi } = this.props
        return (
            <div className="col-6 text-center text-light">
                <h3 className="display-4">I am iron man</h3>
                <div className="display-4 text-success">
                    SỐ BÀN THẮNG: <span className="text-danger">{soBanThang}</span>
                </div>
                <div className="display-4 text-success">
                    SỐ BÀN CHƠI: <span className="text-warning">{soBanChoi}</span>
                </div>
                <div className="mt-3">
                    <button className="btn btn-success" onClick={() => {
                        this.props.playGame();
                    }}>PLAY GAME</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        soBanThang: state.gameTuXiReducer.soBanThang,
        soBanChoi: state.gameTuXiReducer.soBanChoi
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        playGame: () => {
            dispatch({
                type:'PLAY_GAME'
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchtoProps)(KetQuaTuXi)