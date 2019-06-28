//Store toan ung dung
import {combineReducers} from 'redux';
import storeQuanLySanPhamReducer from './reducers/QuanLySanPhamReducer'

// Khởi tạo store của toàn ứng dụng

const rootReducer = combineReducers({
    // Nơi khai báo các store con sau này
    storeQuanLySanPhamReducer
})

export default rootReducer;