const mangXucXac = [
    { ma: 1, hinhAnh: './img-xx/1.png' },
    { ma: 2, hinhAnh: './img-xx/2.png' },
    { ma: 3, hinhAnh: './img-xx/3.png' },
    { ma: 4, hinhAnh: './img-xx/4.png' },
    { ma: 5, hinhAnh: './img-xx/5.png' },
    { ma: 6, hinhAnh: './img-xx/6.png' },
]
const stateDefault = {
    banChon: true,
    soBanThang: 1,
    soBanChoi: 1,
    mangXucXac: [
        { ma: 1, hinhAnh: "./img-xx/1.png" },
        { ma: 2, hinhAnh: "./img-xx/2.png" },
        { ma: 3, hinhAnh: "./img-xx/2.png" },
    ]
}
export const gameXucXacReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_CUOC_TAI_XIU': {
            state.banChon = action.ketQuaChon;
            return { ...state }
        }
            
    }
    return { ...state }
}