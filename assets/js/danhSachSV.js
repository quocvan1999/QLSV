export function danhSachSV() {
    this.danhSachSV = [];

    this.themSV = function (sinhVien) {
        this.danhSachSV.push(sinhVien);
    }

    this.hienThiDanhSach = function () {
        let sinhVien = "";

        this.danhSachSV.map((item) => {
            sinhVien += `
                <tr class="text-center">
                    <th>${item.maSV}</th>
                    <td>${item.tenSV}</td>
                    <td>${item.email}</td>
                    <td>${item.ngaySinh}</td>
                    <td>${item.khoaHoc}</td>
                    <td>${this.diemTB(item.diemToan, item.diemLy, item.diemHoa)}</td>
                    <td>
                        <button onclick="editSV('${item.id}')" class="btn" type="button"><i class="fa-solid fa-pen-to-square"></i></button>
                    </td>
                    <td>
                        <button onclick="deleteSV('${item.id}')" class="btn" type="button">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </td>
                </tr>
            `
        })
        return sinhVien;
    }

    this.diemTB = function (diemToan, diemLy, diemHoa) {
        let diemTB = (Number(diemToan) + Number(diemLy) + Number(diemHoa)) / 3;
        return diemTB.toFixed(2);
    }

    this.xoaSV = function (id) {
        let sinhVien = this.timSV(id);
        let index = this.danhSachSV.indexOf(sinhVien);

        this.danhSachSV.splice(index, 1);
    }

    this.suaSV = function (sinhVien) {
        let id = this.timSV(sinhVien.id);
        let index = this.danhSachSV.indexOf(id);

        this.danhSachSV.splice(index, 1, sinhVien);
    }

    this.timSV = function (id) {
        let sinhVien = '';

        for (let i = 0; i < this.danhSachSV.length; i++) {
            if (this.danhSachSV[i].id === id) {
                sinhVien = this.danhSachSV[i];
            }
        }

        return sinhVien;
    }

    this.timKiewSV = function (key) {
        let sinhVien = [];
        let ketQua = '';

        for (let i = 0; i < this.danhSachSV.length; i++) {
            if (this.danhSachSV[i].tenSV.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
                sinhVien.push(this.danhSachSV[i]);
            }
        }

        sinhVien.map((item) => {
            ketQua += `
                <tr class="text-center">
                    <th>${item.maSV}</th>
                    <td>${item.tenSV}</td>
                    <td>${item.email}</td>
                    <td>${item.ngaySinh}</td>
                    <td>${item.khoaHoc}</td>
                    <td>${this.diemTB(item.diemToan, item.diemLy, item.diemHoa)}</td>
                    <td>
                        <button onclick="editSV('${item.id}')" class="btn" type="button"><i class="fa-solid fa-pen-to-square"></i></button>
                    </td>
                    <td>
                        <button onclick="deleteSV('${item.id}')" class="btn" type="button">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </td>
                </tr>
            `
        })

        return ketQua;
    }
}