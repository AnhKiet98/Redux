import React, { Component } from 'react'
import { connect } from 'react-redux'
class TuXuRandom extends Component {
    render() {
        let { mayTuXi } = this.props
        console.log(mayTuXi)
        return (
            <div className="col-3">
                <div className="col-12 text-center">
                    <img style={{ width: "30%" }} src={mayTuXi}></img>
                </div>
                <div className="col-12 text-center">
                    <img src="./img-tuxi/playerComputer.png" style={{ width: "70%" }}></img>
                </div>
            </div> 
        )   
    }
}
const mapStateToProps = state => {
    return {
        mayTuXi: state.gameTuXiReducer.mayTuXi
    }
}
export default connect(mapStateToProps)(TuXuRandom)
