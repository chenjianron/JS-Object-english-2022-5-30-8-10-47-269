var fruit = {
  apple: 20,
  pear: 20,
  peach: 10,
};
var total = 0;
for (item in fruit) {
  total += fruit[item];
}
console.log(total);
