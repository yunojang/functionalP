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
