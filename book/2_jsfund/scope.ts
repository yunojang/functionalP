const num = 1;

function parent1() {
  const num = 10;
  bar();
}

function bar() {
  console.log(num);
}

parent1(); // 1
