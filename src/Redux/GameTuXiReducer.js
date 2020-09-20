const mangTuXi = [
    { ten: "Keo", hinhAnh: "./img-tuxi/keo.png" },
    { ten: "Bua", hinhAnh: "./img-tuxi/bua.png" },
    { ten: "Bao", hinhAnh: "./img-tuxi/bao.png" },
]
const stateDefault = {
    // 
    banChon: './img-tuxi/bua.png',
    tenChon: 'Keo',
    soBanThang: 0,
    soBanChoi: 0,
    mayTuXi: './img-tuxi/bua.png',
}
export const gameTuXiReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'Nguoi_Choi_Chon': {
            // let mangXucXacNgauNhien = {};
            // for (let i = 0; i < 3; i++) {
            //     if (action.ketQuaChon === mangTuXi[i].ten) {

            //         state.banChon.ten=mangTuXi[i].ten;
            //         console.log(state.banChon.ten);

            //         state.banChon.hinhAnh=mangTuXi[i].hinhAnh;
            //         console.log(state.banChon.hinhAnh);
            //     }
            // }
            if (action.ketQuaChon === 'Keo') {
                state.tenChon = 'Keo';
                state.banChon = './img-tuxi/keo.png';
            } else if (action.ketQuaChon === 'Bua') {
                state.tenChon = 'Bua';
                state.banChon = './img-tuxi/bua.png';
            } else if (action.ketQuaChon === 'Bao') {
                state.tenChon = 'Bao';
                state.banChon = './img-tuxi/bao.png';
            }
            else {
                alert('123');
            }
            console.log(state.tenChon)
            return { ...state }
        }
        case 'PLAY_GAME': {
            let soNgauNhien = Math.floor(Math.random() * 3);
            // console.log(mangTuXi[soNhauNhien].hinhAnh);
            state.mayTuXi = mangTuXi[soNgauNhien].hinhAnh;
            state.soBanChoi += 1;
            if (state.tenChon === 'Keo' && mangTuXi[soNgauNhien].ten === 'Bua'){
                state.soBanThang+=0
            }
            if (state.tenChon === 'Keo' && mangTuXi[soNgauNhien].ten === 'Bao'){
                state.soBanThang+=1
            }
            if (state.tenChon === 'Bua' && mangTuXi[soNgauNhien].ten === 'Keo'){
                state.soBanThang+=1
            }
            if (state.tenChon === 'Bua' && mangTuXi[soNgauNhien].ten === 'Bao'){
                state.soBanThang+=0
            }
            if (state.tenChon === 'Bao' && mangTuXi[soNgauNhien].ten === 'Keo'){
                state.soBanThang+=0
            }
            if (state.tenChon === 'Bao' && mangTuXi[soNgauNhien].ten === 'Bua'){
                state.soBanThang+=1
            }
            if (state.tenChon === mangTuXi[soNgauNhien].ten){
                state.soBanThang+=0
            }
                return { ...state }
        }
    }
    return { ...state }
}