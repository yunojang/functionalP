const factorial = (num: number): number => {
  if (num < 2) {
    return num;
  }

  return num * factorial(num - 1);
};

// console.log(factorial(5));

// 동적 프로그래밍 - 동적 계획법 / 메모리에 기억하기
const memo = (fn: Function) => {
  const cache: { [k: string]: any } = {};

  return (arg: any) => (cache[arg] ? undefined : (cache[arg] = fn(arg)));
};

const fac = memo(factorial);

console.log(fac(5));
console.log(fac(6));

// 1 1 2 3 4
const fibonacci = (() => {
  const cache: { [k: string]: any } = {};

  return (num: number): number => {
    if (num < 2) {
      return 1;
    }

    const result1 = cache[num - 1] ?? (cache[num - 1] = fibonacci(num - 1));
    const result2 = cache[num - 2] ?? (cache[num - 2] = fibonacci(num - 2));

    console.log(cache);

    return result1 + result2;
  };
})();

console.log(fibonacci(21));
console.log(fibonacci(22));
