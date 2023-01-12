const curry =
  <T, R>(fn: (...args: T[]) => R) =>
  (arg1: T) =>
  (...args: T[]) =>
    fn(arg1, ...args);

const add = (a: number, b: number) => a + b;

const add10 = curry(add)(10);
console.log(add10(5)); // 15
console.log(add10(6)); // 16
console.log(add10(7)); // 17

const sqr = (cnt: number, x: number) => {
  let result = 1;

  for (let i = 0; i < cnt; i++) {
    result *= x;
  }

  return result;
};

const sqrTripple = curry(sqr)(3);
console.log(sqrTripple(2));
console.log(sqrTripple(3));
console.log(sqrTripple(4));
