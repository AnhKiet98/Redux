import React, { Component } from 'react'
import './stylegame/stylegame.css'
import XucXac from './XucXac'
import KetQuaTroChoi from './KetQuaTroChoi'
export default class BaiTapGameXucXac extends Component {
    render() {
        return (
            <div className="gameXucXac">
                <h2 className="display-4 text-center pt-3">GAME XÚC XẮC</h2>
                <XucXac />
                <KetQuaTroChoi />
            </div>
        )
    }
}
