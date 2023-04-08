function tong(a, b) {
  return a + b;
}
console.log(tong(3, 5));
// arrow function
const tong2 = (a, b) => {
  return a + b;
};
console.log(tong2(3, 5));
// arrow function dac biet nếu có 1 tham số được bỏ dấu 2 ngoặc
const increase = (a) => a + 5;

console.log(increase(12));
