import React, { Component } from 'react';
import { connect } from "react-redux"; // Ket noi voi store redux


class SanPham extends Component {
  render() {
    let { img, name, desc } = this.props.sanpham;
    return (
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
        <div className="container">
          <div className="card bg-light" style={{ width: 300 }}>
            <img className="card-img-top" src={img} alt="Card image" style={{ maxWidth: '100%', height: 250 }} />
            <div className="card-body text-center">
              <h4 className="card-title text-center">{name}</h4>
              <p className="card-text">{desc}</p>
              <a className="btn btn-success text-white"
              onClick = {() => this.props.chonSanPham(this.props.sanpham)}
              >Thêm Vào Giỏ</a>
              <a className="btn btn-warning text-white" data-toggle="modal"
                data-target="#myModal"  data-toggle="modal"
                data-target="#myModal" 
                onClick = {() => this.props.xemChiTiet(this.props.sanpham)}
                >Xem Chi Tiết</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



const mapDispatcToProps = dispatch => {
  // Dispath laf 1 ham giuo dua du lieu len store redux}
  return {
    xemChiTiet: sanpham => {
      dispatch({
        //Data dua len store gom 2 thuoc tinh
        type: "XEM_CHI_TIET", //Type la thuoc tinh bat buoc phai có de dinh action nao gui len
        sanpham
      });
      // ĐỊnh nghĩa các prop phương thức xử lý sự kiên sau này
    },

    chonSanPham: sanpham => {
  
      dispatch({
        
        type: "CHON_SAN_PHAM",
        sanpham
      });
    }
  };
};

export default connect(
  null,
  mapDispatcToProps
)(SanPham); //Không có dữ liệu truyền về, Có dữ liệu truyền lên