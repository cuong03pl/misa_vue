Binding data modal, lấy được all data từ modal ra
Sửa lại modal để reuse
Khi modal mở thì focus vào ô đầu tiên

dùng deepclone

fomart lại tên nếu dùng chung thì dùng MS ở đầu, tất cả viết thường
dùng riêng thì không có MS

modal thì truyền props vào isAdd, is EDIt ....
Phân vùng và comment hàm
/\*\*

- Hàm định dạng giá trị dựa trên kiểu
- @param value
- @param type
- @returns
- createdby: pdthien - 15.10.2025
  \*/
  --
  select all

  ////now
  combox vừa tìm kiếm vừa select
  Custom button, text input, dropdownlist, combobox, datepicker theo style guild
  focus ô đầu

/// ẩn cái title đi, sẽ tự custom cái tháng năm đó vào 1 cái thẻ div rồi dùng slot header, xử lý ấn nút đó thì hiện cái select month ra là ok
