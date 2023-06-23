// cors: Cross origin resource sharing
// same origin 
// same origin: evondev.com evondev.com/posts
// not same origin: evondev.com facebook.com
// cors: access-control-allow-origin blocked

// Status
// 200 - Success (Mỗi lần get thì trả về, hoặc trả về khi thành công 1 cái gì đó)
// 201 - Create (Tạo dữ liệu thành công)

// Hàng 3 redirect
//  301 - Moved Permanently 
//  307 - Temporary Redirect

// Hàng 4 là lỗi

// 400 Bad Request mạng chậm
// 401 Unauthorized cần phải đăng nhập
// 403 Forbidden không thể truy cập
// 404 Not Found không tìm thấy
// 408 Request Timeout quá tải thời gian tải trang web

// Hàng 5 server 
// 502 Bad Gateway 
// 504 Gateway Timeout

// Methods
// POST lưu dữ liệu, thêm dữ liệu vào database
// GET lấy dữ liệu về 
// PUT update dữ liệu sửa hết dữ liệu
// PATCH sửa 1 phần dữ liệu database
// DELETE xóa