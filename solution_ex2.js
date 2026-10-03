const hangDoiXeCho = ['30A-98765', '29B-12345', '51C-45678'];

// 1. Sửa lỗi lấy xe: Dùng shift() thay vì pop() để lấy phần tử đầu tiên (đúng nguyên tắc FIFO)
const xeVaoSac = hangDoiXeCho.shift();

// Thêm xe mới vào cuối hàng đợi
hangDoiXeCho.push('43D-88888');

console.log(`Xe đang vào sạc: ${xeVaoSac}`);
console.log("--- BẢNG HIỂN THỊ LED ---");

// 2. Sửa lỗi vòng lặp: Đổi điều kiện thành i < length để tránh truy cập vượt giới hạn mảng
for (let i = 0; i < hangDoiXeCho.length; i++) {
  console.log(`STT ${i + 1}: ${hangDoiXeCho[i]}`);
}
