// =====STRING=====

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

// 5. AMBIL HURUF PERTAMA DARI VAR NAMA
function firstChar (namaSaya){
    return namaSaya[0]
}
let MyFirstChar = firstChar ("Charlene Abigail")
console.log(MyFirstChar);

// 6. AMBIL POTONGAN NAMA PERTAMA
function firstName (namaSaya){
    return namaSaya.split(" ")[0]
}
let MyFirstName = firstName ("Charlene Abigail")
console.log(MyFirstName);

// 7. GABUNG POTONGAN NAMA DENGAN STRING "LOVE JAVASCRIPT"
function gabung (namaSaya){
    return namaSaya.split(" ")[0] + " Love Javascript"
}
let gabungNama = gabung ("Charlene Abigail")
console.log(gabungNama);

// 8. PRINT HURUF TERAKHIR DARI VARIABLE NAMA
function lastChar (namaSaya) {
    return namaSaya[namaSaya.length-1]
}
let MyLastChar = lastChar ("Charlene Abigail")
console.log(MyLastChar);



// =====MENGUBAH TIPE DATA=====



// 1. BUAT VARIABLE UMUR
function umur (umurSaya) {
    return umurSaya
}
let umurSaya = umur ("26")
console.log(umurSaya);

// 2. UBAH STRING MENJADI NUMBER
function umurNumber (umurSaya) {
    return parseInt(umurSaya)
}
let umurNumberSaya = umurNumber ("26")
console.log(umurNumberSaya); 

// 3. BUAT VARIABLE TINGGI
function tinggi (tinggiSaya) {
    return tinggiSaya
}
let tinggiSaya = tinggi ("158")
console.log(tinggiSaya);

// 4. UBAH STRING MENJADI DATA FLOAT
function tinggiFloat (tinggiSaya) {
    return parseFloat(tinggiSaya)
}
let tinggiFloatSaya = tinggiFloat ("158")
console.log(tinggiFloatSaya);


// PENGECEKAN TIPE DATA

function checkData (data1) {
    let data = typeof data1
    return data
}
let tipedata = checkData ("abel")
console.log(tipedata);


function cekdata (data2) {
    return typeof data2
}
let datatype = cekdata ("abel")
console.log(datatype);
datatype = cekdata (26)
console.log(datatype);
datatype = cekdata (true)
console.log(datatype);
datatype = cekdata (undefined)
console.log(datatype);
datatype = cekdata (null)
console.log(datatype);
datatype = cekdata ({course: "FSW", wave: "38"})
console.log(datatype);
datatype = cekdata ([1,2,3,4,5])
console.log(datatype);


// NUMBER (PENJUMLAHAN DAN PENGURANGAN)

function plus (num1, num2) {
    return num1+num2
}
let penjumlahan = plus (10,5)
console.log(penjumlahan);

function min (num1, num2) {
    return num1-num2
}
let pengurangan = min (10,5)
console.log(pengurangan);


// NUMBER (PERKALIAN DAN PEMBAGIAN)

function multiply (num1, num2) {
    return num1*num2
}
let times = multiply (6,2)
console.log(times);

function div (num1, num2) {
    return num1/num2
}
let divide = div (6,2)
console.log(divide);

// NUMBER (PANGKAT BILANGAN)

function mathPow (base, exponent) {
    return Math.pow (base, exponent)
}
let matPow = mathPow (3, 4)
console.log(matPow);


// RATA-RATA DARI ARRAY

function avg (arr) {
    let sum =0
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    let avg = sum / arr.length
    return avg
}
let avgArr = avg ([5,8,12,4])
console.log(avgArr);



// BILANGAN GANJIL ATAU GENAP
function ganjilGenap (num) {
    if (num % 2 == 0) {
        return "genap"
    } else {
        return "ganjil"
    }
}
let apakahGanjilGenap = ganjilGenap (7)
console.log(apakahGanjilGenap);

// RANDOM NUMBER
function randomMinMax (min, max) {
    let range = max - min
    let random = Math.random()
    let randomMinMax = random * range + min
    return randomMinMax
}
let randomMinMax1 = randomMinMax (1, 5)
console.log(randomMinMax1);


// KONVERSI CELCIUS KE FAHRENHEIT
function conversion (celcius) {
    let conv = (celcius * 9/5) + 32
    return conv
}
let convCelciusFahrenheit = conversion (36)
console.log(convCelciusFahrenheit);


// PANGKAT SEDERHANA
function mathPower (base, exponent) {
    return Math.pow (base, exponent)
}
let matPower = mathPower (3, 3)
console.log(matPower);


// CEK HURUF VOKAL
function vocal (char) {
    if (char === "A"||
        char === "I"||
        char === "U"||
        char === "E"||
        char === "0") {
        return "huruf vokal"
    } else {
        return "huruf mati"
    }
}
let apakahHurufVokal = vocal ("B")
console.log(apakahHurufVokal);
