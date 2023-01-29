function f() {
  let a = 10;

  const f2 = () => {
    console.log(a);
  };

  a = 5;

  return f2;
}

f()();
