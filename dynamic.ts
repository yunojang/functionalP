const factorial = (num: number): number => {
  if (num < 2) {
    return num;
  }

  return num * factorial(num - 1);
};

// console.log(factorial(5));

// 동적 프로그래밍 - 동적 계획법 / 메모리에 기억하기
const cache = (fn: Function) => {
  const saved = new Map();
  return (num: number) => {
    if (saved.has(num)) {
      return saved.get(num);
    }

    const result = fn(num);
    saved.set(num, result);

    return result;
  };
};

const fac = cache(factorial);

console.log(fac(5));
console.log(fac(6));
