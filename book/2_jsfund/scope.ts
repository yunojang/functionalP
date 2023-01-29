const num = 1;

function foo() {
  const num = 10;
  bar();
}

function bar() {
  console.log(num);
}

foo(); // 1
