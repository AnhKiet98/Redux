const stateDefault = {
    gioHang: [
        { maSP: 1, tenSP: 'Iphone', hinhAnh: './img-dt/img/meizuphone.jpg', giaBan: 1000, soLuong: 1 }
    ]
}
export const GioHangReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'THEM_GIO_HANG': {

            let spGioHang = {
                maSP: action.sanPham.maSP,
                tenSP: action.sanPham.tenSP,
                hinhAnh: action.sanPham.hinhAnh,
                giaBan: action.sanPham.giaBan,
                soLuong: 1,
            }
            const spUpdate = [...state.gioHang]
            const index = spUpdate.findIndex(spGh => spGh.maSP === spGioHang.maSP)
            if (index !== -1) {
                spUpdate[index].soLuong += 1;
            } else {

                spUpdate.push(spGioHang);
            }
            state.gioHang=spUpdate;
            return {...state}
        }
        default: return { ...state }
    }
}