// Array2. arr nomli massiv berilgan. Massiv elementlari orasidan juftlarini indekslari kamayish tartibidan hosil bo’lgan massivni qaytaruvchi getEvenReverse(arr) programma tuzilsin.
// Input: [4, 5, 7, 8, 6, 9]
// Output: [6, 8, 4]

let arr = [4, 5, 7, 8, 6, 9];
let arr2 = [];

function namegetEvenReverse(arr) {
  for (const i of arr) {
    if (arr[i] % 2 == 0) {
      arr2.push(arr[i]);
    }
  }
}

// Array3. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini quyidagicha chiqaruvchi programma tuzilsin.
// A[0], A[n-1], A[1], A[n-2], A[2], A[n-3],...
// Input:  [4, 5, 7, 8, 6, 9]
// Output: 4, 9, 5, 6, 7, 8, 8, 7, 6, 5, 9, 4

// let nArr = [4, 5, 7, 8, 6, 9];
// let newNarr = []

// function birnima(n) {
//     for (const key of nArr) {
//         newNarr[]
//     }
// }
// nArr[0]

// Array4. N ta elementdan tashkil topgan arr nomli massiv va K, L butun sonlari berilgan. (0 <= K <= L < N). Massivning K va L indekslari orasidagi elementlari yig'indisini chiqaruvchi rangeSum(arr, K, L) programma tuzilsin.
// Input: arr = [1, 6, 9, 5, 8, 10, 15];
// Ouput: rangeSum(arr, 2, 5) => 32
let arr4 = [1, 6, 9, 5, 8, 10, 15];
let counter = 0;

function rangeSum(arr, k, l) {
  for (let i = k; i <= l; i++) {
    counter += arr[i];
  }
}

rangeSum(arr4, 0, 3);

// Array6. n ta elementdan iborat massiv berilgan. Massivning eng kichik va eng katta elementlari topilsin va o'rni almashtirilsin.
// Input: [7, 4, 9, 2, 3, 1, 5]
// Output:
// Max: 9
// Min: 1
// [7, 4, 1, 2, 3, 9, 5]

let arr6 = [7, 4, 9, 2, 3, 1, 5];

function salom() {
  let misolUchun = arr6[0];

  for (let i = 0; i < arr6.length; i++) {
    if (misolUchun < arr6[i]) {
        misolUchun =  arr
    }
  }
}
