import { domElement, setLocalStorage, getLocalStorage } from './method/method.js';
import { sinhVien } from './sinhVien.js';
import { danhSachSV } from './danhSachSV.js';

let btnThemSV = domElement('#btnThemSV');
let btnSuaSV = domElement('#btnSuaSV');

let maSV = domElement('#maSV');
let tenSV = domElement('#tenSV');
let email = domElement('#email');
let matKhau = domElement('#matKhau');
let ngaySinh = domElement('#ngaySinh');
let khoaHoc = domElement('#khoaHoc');
let diemToan = domElement('#diemToan');
let diemLy = domElement('#diemLy');
let diemHoa = domElement('#diemHoa');
let ipTimKiem = domElement('#ipTimKiem');

let hienThiDanhSach = domElement('#showData');

let danhSachSinhVien = new danhSachSV();

loadData();

btnThemSV.addEventListener('click', () => {
    let numberSV = `SV${danhSachSinhVien.danhSachSV.length}`;
    let id = `${danhSachSinhVien.danhSachSV.length}`;
    let newSinhVien = new sinhVien(id, numberSV, tenSV.value, email.value, matKhau.value, ngaySinh.value, khoaHoc.value, diemToan.value, diemLy.value, diemHoa.value);

    danhSachSinhVien.themSV(newSinhVien);
    setLocalStorage(danhSachSinhVien, "danhSachSinhVien");

    resetInput();
    loadData();
});

function loadData() {
    let data = getLocalStorage("danhSachSinhVien");

    if (data) {
        danhSachSinhVien.danhSachSV = data.danhSachSV;
    }

    showData();
}

function showData() {
    let dsSV = danhSachSinhVien.hienThiDanhSach();
    let ketQua = ''

    if (dsSV === null) {
        ketQua = '';
    } else {
        ketQua = dsSV
    }

    hienThiDanhSach.innerHTML = ketQua;
}

function resetInput() {
    tenSV.value = '';
    email.value = '';
    matKhau.value = '';
    ngaySinh.value = '';
    khoaHoc.value = '';
    diemToan.value = '';
    diemLy.value = '';
    diemHoa.value = '';
}

ipTimKiem.addEventListener('input', () => {
    let sinhVien = danhSachSinhVien.timKiewSV(ipTimKiem.value);

    hienThiDanhSach.innerHTML = sinhVien;
})

window.deleteSV = function (id) {
    danhSachSinhVien.xoaSV(id);
    setLocalStorage(danhSachSinhVien, "danhSachSinhVien");
    loadData();
}

window.editSV = function (id) {
    let thisSV = danhSachSinhVien.timSV(id);

    maSV.value = thisSV.maSV;
    tenSV.value = thisSV.tenSV;
    email.value = thisSV.email;
    matKhau.value = thisSV.matKhau;
    ngaySinh.value = thisSV.ngaySinh;
    khoaHoc.value = thisSV.khoaHoc;
    diemToan.value = thisSV.diemToan;
    diemLy.value = thisSV.diemLy;
    diemHoa.value = thisSV.diemHoa;

    btnSuaSV.style.display = 'inline-block';

    btnSuaSV.addEventListener('click', () => {
        let newSinhVien = new sinhVien(thisSV.id, thisSV.maSV, tenSV.value, email.value, matKhau.value, ngaySinh.value, khoaHoc.value, diemToan.value, diemLy.value, diemHoa.value);

        danhSachSinhVien.suaSV(newSinhVien);

        setLocalStorage(danhSachSinhVien, "danhSachSinhVien");
        loadData();
        resetInput();

        btnSuaSV.style.display = 'none';
    })
}

