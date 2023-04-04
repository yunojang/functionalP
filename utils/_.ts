export const _filter = <T>(
  list: ArrayLike<T>,
  predicate: (v: T) => boolean
) => {
  const result: T[] = [];

  _each(list, v => {
    if (predicate(v)) result.push(v);
  });

  return result;
};

export const _map = <T, U>(list: ArrayLike<T>, mapper: (v: T) => U) => {
  const result: U[] = [];

  _each(list, v => result.push(mapper(v)));

  return result;
};

export const _each = <T>(
  list: ArrayLike<T>,
  iter: (v: T, idx: number) => void
) => {
  for (let i = 0; i < list.length; i++) {
    iter(list[i], i);
  }

  return list;
};

export const _curry =
  (fn: (...args: any[]) => any) =>
  (...argsA: any[]) =>
    argsA.length >= 2 ? fn(...argsA) : (argB: any) => fn(...argsA, argB);

export const _curryr =
  (fn: (...args: any[]) => any) =>
  (...argsA: any[]) =>
    argsA.length >= 2 ? fn(...argsA) : (b: any) => fn(b, ...argsA);

export const _get = <T extends object>(obj: T, key: keyof T) =>
  obj ? obj[key] : obj;

// export const _bvalue = _curryr(_get);

export const _bvalue =
  <T extends object>(key: keyof T) =>
  (obj: T) =>
    obj[key];

export function _reduce<T>(
  list: ArrayLike<T>,
  accumulate: (previous: T, current: T, currentIndex: number) => T
): T;
export function _reduce<T>(
  list: ArrayLike<T>,
  accumulate: (previous: T, current: T, currentIndex: number) => T,
  initial: T
): T;
export function _reduce<T, U>(
  list: ArrayLike<T>,
  accumulate: (previous: U, current: T, currentIndex: number) => U,
  initial: U
): T;
export function _reduce<T, U>(
  list: ArrayLike<T>,
  accumulate: (prev: T | U, cur: T, idx: number) => T | U,
  initial?: T | U
) {
  if (initial === undefined) {
    initial = list[0];
    list = Array.prototype.slice.call(list, 1);
  }

  _each(list, (v, idx) => (initial = accumulate(initial!, v, idx)));
  return initial;
}

// define
// reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
// reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
// reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
