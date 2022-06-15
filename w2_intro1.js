// 1.	Buat variabel dengan nama biodata bertipe data object, dimana value dan tipe data-nya sudah ditentukan.
// !Privasi


// 2.	
// Program menghitung rata-rata UN beserta gradenya,
// validasi: semua nilai tersebut harus diisi,
// ketetapan: ada kondisi grade dan 4 nama mata pelajaran.
{
// Nama mata pelajaran dan nilai variabelnya
const mtk = 80; // 80
const bahasaIndonesia = 90; // 80
const bahasaInggris = 89; // 80
const ipa = 69; // 69

const avgAndGrade = (n1, n2, n3, n4) => {
  
  // Validasi angka agar value-nya bukan "" / undefined / selain angka  
  if( n1 == "" || n1 == undefined || n2 == "" || n2 == undefined ||
      n3 == "" || n3 == undefined || n4 == "" || n4 == undefined ||
      isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4) ) {
        console.log("Nilai-nilai seluruhnya harus angka !");

  } else {
    // Nilai rata-rata
    let avg = (Number(n1) + Number(n2) + Number(n3) + Number(n4))/4;
    console.log(`Rata-rata = ${avg}`);
    
    // Grade A - E
    let grade = "";
    switch(true){
      case (avg >= 90 && avg <= 100): grade = "A";
        break;
      case (avg >= 80 && avg <= 90): grade = "B";
        break;
      case (avg >= 70 && avg <= 80): grade = "C";
        break;
      case (avg >= 60 && avg <= 70): grade = "D";
        break;
      case (avg >= 0 && avg <= 59): grade = "E";
        break;
      default:
        return "PERIKSA KEMBALI PROGRAM !!!";
        break;
    }
    console.log(`Grade = ${grade}`);

  }
};
// avgAndGrade(mtk, bahasaIndonesia, bahasaInggris, ipa);
}

// 3. Program yang memiliki satu variabel dengan nama “printSegitiga”,
// berisi tipe data number, yang menghasilkan output segitiga terbalik
// yang berisi angka.
{
// const printSegitiga = 5;
// // const printSegitiga = "tiga"; // “Data harus number”

// // Validasi inputan harus number/angka
// if(isNaN(printSegitiga)){
//   console.log("Data harus number");
// } else {
//   // Segitiga terbalik yang berisi angka
//   for(i = printSegitiga ; i > 0 ; i--) {
//     let x = "";
//     for(j=0 ; j < i ; j++){
//       x = `${x}${(j+1)} `;
//     }
//     console.log(x);
//   }
// } 
}

// 4.	Dari data dibawah ini..
let data = {
  id: 1,
  "name": "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
}
{// a.	Ubahlah data tersebut menggunakan spread operator menjadi: 
let dataKu = {
  "name": "Krisiadi Prabowo",
  email: "kristiadiprabowo@gmail.com",
  hobby: [
    "Mendengarkan musik",
    "Menonton film",
    "Bermain video gim",
  ],
};
data = {...data, ...dataKu};
// console.log(data);
}
{// b.	Ambilah data “street dan city” tersebut menggunakan destructuring
// ambilData(data);
function ambilData({ address: { street, city } }) {
  console.log(street + ' dan ' + city + '.');
}
}
