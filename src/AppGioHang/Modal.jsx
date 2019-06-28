import React, { Component } from 'react';
import {connect} from 'react-redux'; // Thư viện kết nối react component và redux store


class Modal extends Component {
  render() {
    return (
      <div>
        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">{this.props.dataSanPham.name}</h4>
                <button type="button" className="close" data-dismiss="modal">
                  ×
              </button>
              </div>
              {/* Modal body */}
              <div className="modal-body">{this.props.dataSanPham.desc}</div>
              {/* Modal footer */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



const mapStateToProps = (state) =>{ //state laf store tong ca ung ung
  
  return {
    dataSanPham: state.storeQuanLySanPhamReducer.dataSanPham // Tạo ra 1 prop dataPhim cho component lấy từ store redux
  
  }
}

export default  connect(mapStateToProps, null)(Modal) // Kết nối react component và redux store