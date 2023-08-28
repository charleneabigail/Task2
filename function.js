// 1. BUAT VARIABLE NAMA LENGKAP
function nama (namaSaya) {
    return namaSaya;
}
let namaSaya = nama ("Charlene Abigail")
console.log(namaSaya);


// 2. HITUNG PANJANG NAMA
function hitungPanjangNama (namaSaya){
    return namaSaya.length;
}
let panjangNamaSaya = hitungPanjangNama("Charlene Abigail")
console.log(panjangNamaSaya);


// 3. UBAH NAMA MENJADI HURUF BESAR
function namaBesar (namaSaya){
    return namaSaya.toUpperCase()
}
let namaUpper = namaBesar ("Charlene Abigail")
console.log(namaUpper);

// 4. UBAH NAMA MENJADI HURUF KECIL
function namaKecil (namaSaya){
    return namaSaya.toLowerCase()
}
let namaLower = namaKecil ("Charlene Abigail")
console.log(namaLower);
