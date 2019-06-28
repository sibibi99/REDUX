import React, { Component } from 'react'

export default class GioHang extends Component {
  render() {
    let {TenSP, HinhAnh, Gia, SoLuong} = this.props.sanpham
    return (
      <div>
        <table className="table">
          <thead>
            <tr  className="card-header bg-dark text-white">
              <td>STT</td>
              <td>Hình Ảnh</td>
              <td>Sản Phẩm</td>
              <td>Giá</td>
              <td>Số Lượng</td>
              <td>Tổng Cộng</td>
              <td>Chức năng</td>
            </tr>
          </thead>
          <tbody>
           <tr>
            
             <td><img src={HinhAnh} width={100} height={100} /></td>
             <td>{TenSP}</td>
             <td>{Gia}</td>
             <td>{SoLuong}</td>
             <td>{Gia}</td>
             <td>{SoLuong*Gia}</td>
             <td><button>Xóa</button></td>

           </tr>
          </tbody>
        </table>
        <h2 className="text-right">TỔNG TIỀN: 
       ...
         <button className="btn btn-danger">Thanh Toán</button>
        </h2>
      </div>
    )
  }
}
