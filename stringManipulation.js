// STRING MANIPULATION

// 1. BUAT VARIABLE NAMA LENGKAP
const nama ="Charlene Abigail"
console.log(nama, "(=====NAMA=====)"); 

// 2. HITUNG PANJANG NAMA
console.log(nama.length, "(=====LENGTH=====)"); 

// 3. UBAH NAMA MENJADI HURUF BESAR
const resultUpper = nama.toUpperCase()
console.log(resultUpper, "(=====TO UPPER CASE=====)");

// 4. UBAH NAMA MENJADI HURUF KECIL
const resultLower = nama.toLowerCase()
console.log(resultLower, "(=====TO LOWER CASE=====)");

// 5. AMBIL HURUF PERTAMA DARI VAR NAMA
const firstChar = nama[0]
console.log(firstChar, "(=====FIRST CHARACTER=====)");

const firstCharSubstring = nama.substring(0, 1)
console.log(firstCharSubstring, "(=====FIRST CHARACTER SUBSTRING=====)");

// 6. AMBIL POTONGAN NAMA PERTAMA
const firstNameSlice = nama.slice(0, 8)
console.log(firstNameSlice, "(=====FIRST NAME SLICE=====)");


const firstNameSplit = nama.split(" ")[0]
console.log(firstNameSplit, "(=====FIRST NAME SPLIT=====)");

// 7. GABUNG POTONGAN NAMA DENGAN STRING "LOVE JAVASCRIPT"
const concate = firstNameSplit + " " + "Love Javascript"
console.log(concate, "(===== + STRING LOVE JS=====)");

// 8. PRINT HURUF TERAKHIR DARI VARIABLE NAMA
const lastChar = nama[15]
console.log(lastChar, "(=====LAST CHARACTER=====)");

const lastCharSubstring = nama.substring(15, 16)
console.log(lastCharSubstring, "(=====LAST CHARACTER SUBSTRING=====)");

const lastCharDinamic = nama[nama.length-1]
console.log(lastCharDinamic, "(=====LAST CHARACTER DINAMIC=====)");



// MENGUBAH TIPE DATA

// 1. BUAT VARIABLE UMUR
let umur = "26"
console.log(umur, "(=====UMUR STRING=====)");

// 2. UBAH STRING MENJADI NUMBER
umur = parseInt(umur)
console.log(umur, "(=====UMUR NUMBER=====)");

// 3. BUAT VARIABLE TINGGI
let tinggi = "158"
console.log(tinggi, "(=====TINGGI STRING=====)");

// 4. UBAH STRING MENJADI DATA FLOAT
tinggi = parseFloat(tinggi)
console.log(tinggi, "(=====TINGGI FLOAT=====)");


// PENGECEKAN TIPE DATA

let dataString = "Abel";
let dataNumber = 26;
let dataBoolean = true;
let dataUndefined = undefined;
let dataNull = null;
let dataObject = {course: "FSW", wave: "38"};
let dataFunction =() => {};
let dataArray = [1,2,3,4,5]

console.log(typeof dataString);
console.log(typeof dataNumber);
console.log(typeof dataBoolean);
console.log(typeof dataUndefined);
console.log(typeof dataNull);
console.log(typeof dataObject);
console.log(typeof dataFunction);
console.log(typeof dataArray, Array.isArray(dataArray));


// NUMBER (PENJUMLAHAN DAN PENGURANGAN)

const num1 = 10
const num2 = 5
console.log(num1 + num2, "(=====PENJUMLAHAN 10+5=====)");
console.log(num1 - num2, "(=====PENGURANGAN 10-5=====)");

//  NUMBER (PERKALIAN DAN PEMBAGIAN)

const num3 = 6
const num4 = 2
console.log(num3 * num4, "(=====PERKALIAN 6*2=====)");
console.log(num3 / num4, "(=====PEMBAGIAN 6/2=====)");

// NUMBER (PANGKAT BILANGAN)

const base = 3
const exponent = 4
console.log(Math.pow (base, exponent), "(=====PANGKAT 3^4=====)");
