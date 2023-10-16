//맵 기본 문법
let arr = ["a", "b", "c"];
let list = arr.map((item) => {
  return `<li>${item}<li>`;
});

let list2 = arr.map((item) => {
  return `<li>${item}<li>`;
});
let list3 = arr.map((item) => {
  return `<li>${item}<li>`;
});
let list4 = arr.map((item) => {
  return `<li>${item}<li>`;
});

console.log(list);

let arr1 = [1, 2];
arr1.push(3);

let arr1Es6 = [...arr1, 3]; //spread 연산자를 통해 ES6문법으로 전환

let arr2 = [4, 5];

let arrnew = [arr1[0], arr1[1], arr2[0], arr2[1]];

let arrnewEs6 = [...arr1, ...arr2]; //spread 연산자를 통해 ES6문법으로 전환

let arrnew1 = arr.concat(arr2);

let arrnew2 = [].concat(arr1, arr2); //빈 배열에다가 arr1, arr2를 더하라
