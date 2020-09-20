import React, { Component } from 'react'
import './stylegame.css'
import './buble.css'
import TuXi from './TuXi'
import KetQuaTuXi from './KetQuaTuXi'
import TuXuRandom from './TuXuRandom'
export default class BaiTapTuXi extends Component {
    render() {
        return (
            <div className="bgTuXi pt-5">
                <div className="row container m-auto ">
                    <TuXi />
                    <KetQuaTuXi />
                    <TuXuRandom />
                </div>
            </div>
        )
    }
}
