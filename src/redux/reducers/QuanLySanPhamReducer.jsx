// Mỗi reducer tương tự 1 Service bên angular

// Giá trị ban đầu (mặc định) của Sản Phẩm

// Những dữ liệu nào cần quản lý hay có sự thay đổi thì đưa vào redux
const stateDefaut = {
  // store chứ dữ liệu mặc đinh}
  dataSanPham: {  },
  mangGioHang: [
    { MaSp: 1, TenSP: "Iphone", HinhAnh: "", SoLuong: 1, Gia: 99999 }
  ]
};

const storeQuanLySanPhamReducer = (state = stateDefaut, action) => {
  switch (action.type) {
    case "XEM_CHI_TIET": {
      state.dataSanPham = action.sanpham;
      return { ...state }; // Trả về giá trị mới => những component nào lấy giá trị này tự động cập nhật lại
    }
    case "CHON_SAN_PHAM": {
      state.mangGioHang = [...state.mangGioHang, action.sanpham]
      console.log(state);
      
      return { ...state }; // Trả về giá trị mới => những component nào lấy giá trị này tự động cập nhật lại
    }
 
    default:
  }
  return { ...state };
};
// storeQUanLySanPhamReducer: Dùng để lấy dữ liệu từ store về Component
export default storeQuanLySanPhamReducer;
