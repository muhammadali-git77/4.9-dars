// Array1. n natural soni berilgan. 2 sonining dastlabki n ta darajasidan tashkil topgan massivni qaytaruvchi getLevel2(n) nomli funksiya tuzing.
// Input: 5
// Output: [2, 4, 16, 32, 62]
console.log("1 ----------------------------------------------");

let arr1 = [];
function getLevel2(n) {
  for (let i = 1; i <= n; i++) {
    arr1.push(2 ** i);
  }
}
getLevel2(8);
console.log(arr1);

// Array2. n natural soni va A, B butun sonlari berilgan (n > 2). a[0] = A; a[1] = B; boshqa elementlari o'zidan oldingi barcha elementlari yig'indisiga teng bo'lgan massivni hosil qiling va elementlarini chiqaring.
// Input: n = 5, A = 2, B = 3
// Output: [2, 3, 5, 10, 20]
console.log("2 ----------------------------------------------");

function func2(n, a, b) {
  let arr2 = [a, b];
  let counter2 = a + b;

  for (let i = 0; i < n; i++) {
    arr2.push(counter2);
    counter2 += arr2[i];
  }
  console.log(arr2);
}

func2(5, 2, 3);

// Array3. n ta elementdan tashkil topgan massiv berilgan. Uning elementlarini teskari tartibda chiqaruvchi programma tuzilsin.
console.log("3 ----------------------------------------------");

let n = 5;
let arr3 = [];

for (let i = 0; i <= n; i++) {
  arr3.push(i);
}

console.log(arr3.reverse());

// Array4. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan toqlarini indekslari o'sish tartibida chiqaruvchi va ularning sonini chiqaruvchi programma tuzilsin.
// Massiv elementlar: 4 5 7 8 6 9
// Natija: 5 7 9 toqlar soni = 3
console.log("4 ----------------------------------------------");

let arr4 = [4, 59, 6, 7, 8, 9];
let newArr2 = [];
function func4() {
  for (let i = 0; i < arr4.length; i++) {
    if (i % 2 == 1) {
      newArr2.push(arr4[i]);
    }
  }
  console.log(newArr2.sort((a, b) => a - b));
}

func4();

// Array5. n ta elementdan tashkil topgan massiv berilgan. Dastlab massiv elementlari orasidan juftlarini indekslari o'sish tartibida chiqaruvchi, keyin massiv elementlari orasidan toqlarini indekslari kamayish tartibida chiqaruvchi programma tuzilsin.
// Massiv elementlar: 4 5 7 8 6 9
// Natija: 4 8 6 9 7 5
console.log("5 ----------------------------------------------");

let arr5 = [4, 5, 7, 8, 6, 9];
let arrUmumiy = [];
function func5() {
  for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] % 2 == 0) {
      arrUmumiy.push(arr5[i]);
    }
  }
  for (let i = arr5.length - 1; i >= 0; i--) {
    // console.log(i);
    if (arr5[i] % 2 == 1) {
      arrUmumiy.push(arr5[i]);
    }
  }
}

func5();
console.log(arrUmumiy);

// Array6. n ta elementdan tashkil topgan massiv berilgan (n juft son). Massiv elementlari orasidan quyidagilarini chiqaruvchi programma tuzilsin. A[0], A[2], A[4], ... Shart operatori ishlatilmasin.
console.log("6 ----------------------------------------------");

let arr6 = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < arr6.length; i += 2) {
  console.log(arr6[i]);
}

// Array7. n ta elementdan tashkil topgan massiv berilgan (n juft son). Massiv elementlari orasidan quyidagilarini chiqaruvchi programma tuzilsin. A[n-1], A[n-3], ... A[1]. Shart operatori ishlatilmasin.
console.log("7 ----------------------------------------------");

let arr7 = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < arr7.length; i += 2) {
  console.log(arr7[arr7.length - 1 - i]);
}

// Array8. n ta elementdan tashkil topgan massiv berilgan. Dastlab massiv elementlari orasidan juft indekslilarini keyin toq indekslilarini chiqaruvchi programma tuzilsin.
// A[0], A[2], A[4], ... A[1], A[3], A[5],.... Shart operatori ishlatilmasin.
console.log("8 ----------------------------------------------");

let arr8 = [1, 2, 3, 4, 5, 6, 7, 8];

console.log("Juft indexlar:");
for (let i = 0; i < arr8.length; i += 2) {
  console.log(" ", arr8[i]);
}

console.log("Toq indexlar:");
for (let i = 1; i < arr8.length; i += 2) {
  console.log(" ", arr8[i]);
}

// Array9. n ta elementdan tashkil topgan massiv berilgan (n juft son). Dastlab massiv elementlari orasidan toq indekslilarini o'shish tartibida keyin juft indekslilarini kamayish tartibida chiqaruvchi programma tuzilsin. A[1], A[3], A[5],.. A[6], A[4], A[2], A[0]. Shart operatori ishlatilmasin.
console.log("9 ----------------------------------------------");

let arr9 = [1, 2, 3, 4, 5, 6, 7, 8];

console.log("Toq indexlar:");
for (let i = 1; i < arr9.length; i += 2) {
  console.log(" ", arr9[i]);
}

console.log("Juft indexlar:");
for (let i = arr9.length - 2; i >= 0; i -= 2) {
  console.log(" ", arr9[i]);
}

// Array10. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini quyidagicha chiqaruvchi programma tuzilsin. A[0], A[1], A[n-1], A[n-2], A[2], A[3], A[n-3], A[n-4], ...
console.log("10 ---------------------------------------------");

let arr10 = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0, j = arr10.length - 1; i < j; i += 2, j -= 2) {
  console.log(arr10[i]);
  console.log(arr10[i + 1]);
  console.log(arr10[j]);
  console.log(arr10[j - 1]);
}

// Array11. N ta elementdan tashkil topgan arr nomli massiv va K, L butun sonlari berilgan. (0 <= K <= L < N). Massivning K va L indekslari orasidagi elementlaridan tashqari elementlari yig'indisini qaytaruvchi rangeOutSum(arr) nomli funksiya tuzilsin.
console.log("11 ---------------------------------------------");

// let arr11 = [1, 2, 3, 4, 5, 6];
// let newarr11 = [];

// function rangeOutSum(k, l) {
//   for (let i = 0; i < arr11.length; i++) {                 //Ishlay olmadim
//     if (i >= k && i <= l) {
//       newarr11.push(arr11[i]);
//     } else {
//     }
//   }
// }

// rangeOutSum(2, 5);
// console.log(newarr11);

// Array12. Massivga kiritilgan qiymatlardan truthy va falsy elementlaridan iborat alohida 2 ta massiv hosil qiling.
// Input: [10, false, “”, “Abdulaziz”, null]
// Output:
// Truthy: [10, “Abdulaziz”]
// Falsy: [false, “”, null]
console.log("12 ---------------------------------------------");

let arr12 = [10, false, "", "Abdulaziz", null];
let truthy = [];
let falsy = [];

for (const i of arr12) {
  if (i) {
    truthy.push(i);
  } else {
    falsy.push(i);
  }
}

console.log("Truthy value:", truthy);
console.log("Falsy value", falsy);

// Array13. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv juft indeksli elementlari orasidan kichigini aniqlovchi getEvenIndexMin(arr) nomli funksiya tuzilsin.
console.log("13 ---------------------------------------------");

let arr13 = [3, 4, 5, 2, 6, 7, 8, 1];

function getEvenIndexMin() {
  let min = arr13[0];
  for (let i = 0; i < arr13.length; i++) {
    if (i % 2 == 0) {
      if (arr13[i] < min) {
        min = arr13[i];
      }
    }
  }
  return min;
}

console.log(getEvenIndexMin());

// Array14. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv toq indeksli elementlari orasidan kattasini aniqlovchi getOddIndexMax(arr) tuzilsin.
console.log("14 ---------------------------------------------");

let arr14 = [3, 4, 5, 2, 6, 7, 8, 1];

function getOddIndexMax() {
  let max = arr13[0];
  for (let i = 0; i < arr13.length; i++) {
    if (i % 2 == 1) {
      if (arr13[i] > max) {
        max = arr13[i];
      }
    }
  }
  return max;
}

console.log(getOddIndexMax());

// Array15. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan oxirgi lokal maksimum elementi indeksini chiqaruvchi programma tuzilsin. Lokal maksimum - o'ng va chap qo'shinisidan katta bo'lgan element.
console.log("15 ---------------------------------------------");

let arr15 = [1, 3, 2, 4, 1, 5, 3];
let local = -1;

for (let i = 1; i < arr15.length - 1; i++) {
  if (arr15[i] > arr15[i - 1] && arr15[i] > arr15[i + 1]) {
    local = i;
  }
}

console.log("Oxirgi lokal maksimum indeksi: ", local);

// Array16. n ta elementdan tashkil topgan massiv va R butun soni berilgan. Massiv elementlari orasidan R soniga eng yaqin sonni topuvchi programma tuzilsin.
console.log("16 ---------------------------------------------");

let arr16 = [3, 4, 5, 2, 6, 7, 8, 1];

//O'zim qilgan variant
function func16b(r) {
  let sonlar = [];
  let natija;

  for (let i = 0; i < arr16.length; i++) {
    sonlar.push(Math.abs(arr16[i] - r));
  }

  let yaqin = sonlar[0];

  for (let i = 0; i < sonlar.length; i++) {
    if (yaqin > sonlar[i]) {
      yaqin = sonlar[i];
    }
  }
  for (let i = 0; i < arr16.length; i++) {
    if (Math.abs(arr16[i] - r) == yaqin) {
      natija = arr16[i];
    }
  }
  return natija;
}

//gpt optimallashtirib bergan variant
function func16(r) {
  let yaqinFarq = Math.abs(arr16[0] - r);
  let natija = arr16[0];

  for (let i = 1; i < arr16.length; i++) {
    let currentFarq = Math.abs(arr16[i] - r);
    if (currentFarq < yaqinFarq) {
      yaqinFarq = currentFarq;
      natija = arr16[i];
    }
  }

  return natija;
}

console.log(func16(190));
console.log(func16b(190));

// Array17. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan yig'indisi eng katta bo'ladigan 2 ta qo'shni elementni chiqaruvchi programma tuzilsin.
console.log("17 ---------------------------------------------");

let arr17 = [3, 4, 5, 2, 6, 7, 8, 1];
let sum = arr17[0] + arr17[1];
let element = [arr17[0], arr17[1]];

for (let i = 0; i < arr17.length - 1; i++) {
  if (sum < arr17[i] + arr17[i + 1]) {
    sum = arr17[i] + arr17[i + 1];
    element = [arr17[i], arr17[i + 1]];
  }
}

console.log(`${element} juftliklari yigindisi eng kattasi: ${sum}`);

// Array18. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasida aniq 2 ta bir xil qiymatli element bor. Shu bir xil qiymatli elementlar indeksini chiqaruvchi programma tuzilsin.
console.log("18 ---------------------------------------------");

let arr18 = [3, 4, 5, 2, 6, 7, 8, 1, 4];

for (let i = 0; i < arr18.length; i++) {
  for (let j = 0; j < arr18.length; j++) {
    if (arr18[i] == arr18[j] && i != j) {
      console.log(i, j);
    }
  }
}

// Array19. n ta elementdan tashkil topgan massiv berilgan. Massivda eng ko'p qatnashgan bir xil qiymatli elementni va uning sonini chiqaruvchi programma tuzilsin.
console.log("19 ---------------------------------------------");

let arr19 = [3, 4, 5, 2, 6, 7, 4, 8, 1, 4];

//ishlay olmadim

// Array20. n ta elementdan iborat butun sonlardan tashkil topgan a massiv berilgan. a massivning juft elementlaridan tashkil topgan b massivini hosil qiling. b massiv elementlari soni va elementlari chiqarilsin.
console.log("20 ---------------------------------------------");

let arr20 = [3, 4, 5, 2, 6, 7, 4, 8, 1, 4];
let b = [];

for (let i = 0; i < arr20.length; i++) {
  if (arr20[i] % 2 == 0) {
    b.push(arr20[i]);
  }
}

console.log(b, `B massivi elementlari soni ${b.length} ta.`);

// Array21. n ta butun sonlardan iborat a massiv va k butun soni berilgan. Massivning har bir elementini k ga orttiruvchi programma tuzilsin.
console.log("21 ---------------------------------------------");

let arr21 = [3, 4, 5, 2, 6, 7, 4, 8, 1, 4];
let newarr21 = [];

function func21(k) {
  for (let i = 0; i < arr21.length; i++) {
    newarr21.push(arr21[i] + k);
  }
  return newarr21;
}

console.log(func21(2));

// Array22. n ta elementdan iborat massiv berilgan (n juft son). Massivning birinchi yarmi va ikkinchi yarmi qiymatlari almashtirilsin.
console.log("22 ---------------------------------------------");

let arr22 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let birinchiYarim = [];
let ikkinchiYarim = [];
let umumiyArr = [];

for (let i = 0; i < arr22.length / 2; i++) {
  birinchiYarim.push(arr22[i]);
}
for (let i = arr22.length / 2; i < arr21.length; i++) {
  ikkinchiYarim.push(arr22[i]);
}

umumiyArr.push(...ikkinchiYarim, ...birinchiYarim);

console.log(umumiyArr);

// Array23. n ta element iborat massiv berilgan. Massivning elementlari teskari tartibda joylashtirilsin. (DIQQAT: Sizdan teskari tartibda chiqarish talab qilinayotgani yo'q. a[0] element a[n-1] bilan almashsin, va hakazo, teskari tartibda joylashtirish talab qilinyapti)
console.log("23 ---------------------------------------------");
let arr23 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr23.length / 2; i++) {
  let vaqtincha = arr23[i];
  arr23[i] = arr23[arr23.length - 1 - i];
  arr23[arr23.length - 1 - i] = vaqtincha;
}
console.log(arr23);

// Array24. n ta butun sonlardan iborat a massiv berilgan. Massivning eng kichik va eng katta elementlari orasidagilarini nolga almashtiruvchi programma tuzilsin. Eng kichik va eng katta elementlari o'zgarishsiz qoldirilsin.
console.log("24 ---------------------------------------------");

let arr24 = [5, 2, 3, 6, 1, 4, 7, 10, 9, 8];
let min = arr24[0];
let max = arr24[0];
let minIndex = 0;
let maxIndex = 0;

for (let i = 0; i < arr24.length; i++) {
  if (max < arr24[i]) {
    max = arr24[i];
    maxIndex = i;
  }
  if (min > arr24[i]) {
    min = arr24[i];
    minIndex = i;
  }
}
let start = Math.min(minIndex, maxIndex) + 1;
let end = Math.max(minIndex, maxIndex);

for (let i = start; i < end; i++) {
  arr24[i] = 0;
}

console.log(arr24);

// Array25. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini bir qadam chapga siklik siljituvchi programma tuzilsin. a[n-1] element qiymati a[n-2] ga o'tadi, a[n-2] esa a[n-3] ga, ... a[0] esa a [n-1] ga o'tadi.
console.log("25 ---------------------------------------------");

let arr25 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let birinchi = arr25[0];

for (let i = 0; i < arr25.length; i++) {
  arr25[i] = arr25[i + 1];
}

arr25[arr25.length - 1] = birinchi;

console.log(arr25);

// Array26. n ta elementdan tashkil topgan massiv va k butun soni berilgan (0<= k < n). Indeksi k ga teng bo'lgan elementni o'chiruvchi va yangi massiv qaytaruvchi deleteElementWithIndex(arr, k) nomli funksiya tuzilsin.
console.log("26 ---------------------------------------------");

let arr26 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newarr26 = [];

function deleteElementWithIndex(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    if (0 <= k && k < arr.length) {
      if (i !== k) {
        newarr26.push(arr[i]);
      }
    } else {
      console.log("kiritgan qiymatiz xato!");

      return arr26;
    }
  }
  return newarr26;
}

console.log(deleteElementWithIndex(arr26, 3));

// Array27. n ta elementdan tashkil topgan massiv va k, m butun sonlari berilgan (0< k < m < n). Indeksi k dan m gacha bo'lgan elementlarni o'chiruvchi programma tuzilsin. Hosil bo'lgan massiv elementlar soni va elementlari chiqarilsin.
console.log("27 ---------------------------------------------");

let arr27 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newarr27 = [];

function deleteElementWithIndexToM(array, k, m) {
  if (0 < k && k < m && m < array.length) {
    for (let i = 0; i < array.length; i++) {
      if (k > i || i > m) {
        newarr27.push(array[i]);
      }
    }
  }
  return newarr27;
}

console.log(deleteElementWithIndexToM(arr27, 2, 5));

// Array28. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan bir xil qo'shnilarning birini o'chiruvchi programma tuzilsin.
console.log("28 ---------------------------------------------");

let arr28 = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10];
let newarr28 = [];

for (let i = 0; i < arr28.length; i++) {
  if (arr28[i] === arr28[i + 1]) {
    continue;
  }
  newarr28.push(arr28[i]);
}

console.log(newarr28);

// Array29. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv elementlari orasidan faqat 1 marta ishtirok etganlaridan iborat yangi massiv qaytaruvchi getElementsOneTime(arr) nomli funksiya tuzing.
// Input: [1, 5, 6, 1, 5, 7, 2]
// Output: [6, 7, 2]
console.log("29 ---------------------------------------------");

let arr29 = [1, 5, 6, 1, 5, 7, 2];

function namgetElementsOneTime(array) {
  let newarr = [];
  for (let i = 0; i < array.length; i++) {
    let counter = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j]) {
        counter++;
      }
    }
    if (counter == 1) {
      newarr.push(array[i]);
    }
  }
  return newarr;
}

console.log(namgetElementsOneTime(arr29));

console.log("30 ---------------------------------------------");

// Array30. arr nomli massivda k qiymatli bir nech element mavjude. Shu elementlar indekslari massividan iborat qiymat qaytaruvchid searchAllElements(arr) nomli funksiya hosil qiling !

function searchAllElements(arr, k) {
  let indexes = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
      indexes.push(i);
    }
  }
  return indexes;
}

let arr30 = [1, 5, 6, 1, 5, 7, 2, 5];
console.log(searchAllElements(arr30, 5));
