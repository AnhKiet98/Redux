import React from 'react';
import logo from './logo.svg';
import './App.css';
import BTGioHangRedux from './BTGioHangRedux/BTGioHangRedux';
import BaiTapGameXucXac from './BaiTapGameXucXac/BaiTapGameXucXac';
import BaiTapTuXi from './BaiTapTuXi/BaiTapTuXi';
import BaiTapGetDataSinhVien from './BaiTapGetDaTaSinhVien/BaiTapGetDataSinhVien';
import DanhSachSinhVien from './BaiTapGetDaTaSinhVien/DanhSachSinhVien';

function App() {
  return (
    <div>
      {/* <BTGioHangRedux /> */}
      {/* <BaiTapGameXucXac /> */}
      {/* <BaiTapTuXi /> */}
      {/* <BaiTapGetDataSinhVien /> */}
      <DanhSachSinhVien />
    </div>
  );
}

export default App;
