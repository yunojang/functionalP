import { map } from '../1_start/mapfilter';

const constant = (v: any) => () => v;

const always10 = constant(10);

console.log(always10());
console.log(always10());
console.log(always10());

const callWith = (v1: any) => (v2: any, func: (...args: any[]) => any) =>
  func(v1, v2);
const callWith10 = callWith(10);
console.log(callWith10(5, (a: number, b: number) => a + b));

// 숫자가 아닌 값도 사용할 수 있다.
console.log(callWith([1, 2, 3])((x: number) => x * 10, map));
