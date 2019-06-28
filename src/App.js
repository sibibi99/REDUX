import React from 'react';
import './App.css';
import DanhSachSanPham from './AppGioHang/DanhSachSanPham';
import Modal from './AppGioHang/Modal';

function App() {
  return (
    <div className="container">
      <DanhSachSanPham/>
      <Modal/>
    </div>
  );
}

export default App;
