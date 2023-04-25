//#1
// let number = +prompt("введите числа от 1 до 9");
// switch (number) {
//   case 1:
//     console.log("I");
//     break;
//   case 2:
//     console.log("II");
//     break;
//   case 3:
//     console.log("III");
//     break;
//   case 4:
//     console.log("VI");
//     break;
//   case 5:
//     console.log("V");
//     break;
//   case 6:
//     console.log("VI");
//     break;
//   case 7:
//     console.log("VII");
//     break;
//   case 8:
//     console.log("VIII");
//     break;
//   case 9:
//     console.log("IX");
//     break;
//   default:
//     alert("вы ыыели не то число");
// }

//#2
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 !== 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0 && i % 3 !== 0) {
//     console.log("Buzz");
//   } else if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else {
//     console.log(i);
//   }
// }

//#3
// let number = +prompt("введите число от 2 до 10");
// for (let i = 1; i <= 10; i++) {
//   console.log(number + "*" + i + "=" + number * i);
// }

//#4
let number = +prompt("введите число от 1 до 9");
number === 1
  ? console.log("Меркурий")
  : number === 2
  ? console.log("Венера")
  : number === 3
  ? console.log("Земля")
  : number === 4
  ? console.log("Марс")
  : number === 5
  ? console.log("Юпитер")
  : number === 6
  ? console.log("Сатурн")
  : number === 7
  ? console.log("Уран")
  : number === 8
  ? console.log("Нептун")
  : number === 9
  ? console.log("Плутон")
  : alert("вы ввели друго число");
