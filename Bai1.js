let vatly;
let hoahoc;
let sinhhoc;
vatly = prompt('Nhập điểm môn Vật lý:')
hoahoc = prompt("Nhập điểm môn Hóa học:")
sinhhoc = prompt('Nhập điểm môn Sinh học:')
let vl=parseInt(vatly);
let hh=parseInt(hoahoc);
let sh=parseInt(sinhhoc)
trungbinh = (vl + hh +sh)/3
document.write('Điểm trung bình là:'+ trungbinh)