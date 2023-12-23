/*1*/
// function engKattaEngKichikTopib(array) {
//   if (array.length === 0) {
//     // Agar array bo'sh bo'lsa, null qaytarib qo'yamiz
//     return null;
//   }

//   let engKatta = array[0];
//   let engKichik = array[0];

//   for (let i = 1; i < array.length; i++) {
//     if (array[i] > engKatta) {
//       engKatta = array[i];
//     }
//     if (array[i] < engKichik) {
//       engKichik = array[i];
//     }
//   }

//   return { engKatta, engKichik };
// }

// // Misol
// let sonlarArray = [3, 7, 9, 11, 1, 7];
// let natija = engKattaEngKichikTopib(sonlarArray);
// console.log("Eng katta:", natija.engKatta);
// console.log("Eng kichik:", natija.engKichik);

/*2*/

// let num = [2, 5, 1, 66, 12, 34, 56];
// let numNew = num.filter(function (item) {
//   if (item > 2) {
//     return item;
//   }
// });
// console.log(numNew);

/*3*/

// let num = [
//   892, 1831, 87, 89, 1, 46, 81, 7, 264, 73, 6, 9, 647, 731, 890, 384, 76, 38, 9,
// ];
// let jcount = 0;
// let tcount = 0;

// num.forEach(function (item) {
//   if (item % 2 == 0) {
//     jcount++;
//   } else {
//     tcount++;
//   }
// });
// console.log("juft" + "=", jcount);
// console.log("toq" + "=", tcount);

/*4*/

// function yigindi(...args) {
//   return args.reduce((sum, current) => sum + current, 0);
// }

// let result = yigindi(1, 2, 3, 4, 5, 6, 7, 8);
// console.log("Yig'indi:", result);

/*5*/

// function engKattaEngKichikTopib(array) {
//     if (array.length === 0) {
//         // Agar array bo'sh bo'lsa, null qaytarib qo'yamiz
//         return null;‍
//     }
// ‍
//     let engKatta = array[0];
//     let engKichik = array[0];‍
// ‍
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] > engKatta) {
//             engKatta = array[i];‍
//         }‍
//         if (array[i] < engKichik) {
//             engKichik = array[i];‍
//         }
//     }
// ‍
//     return { engKatta, engKichik };‍
// }
// ‍
// // Misol
// let sonlarArray = [3, 7, 9, 11, 1, 7];
// let natija = engKattaEngKichikTopib(sonlarArray);
// console.log("Eng katta:", natija.engKatta);
// console.log("Eng kichik:", natija.engKichik);
