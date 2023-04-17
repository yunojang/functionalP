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

export const _filter = _curryr(<T>(list: T, predicate: (v: T) => boolean) => {
  const result: T[] = [];

  _each(list, v => {
    if (predicate(v)) result.push(v);
  });

  return result;
});

export const _map = _curryr(<T, U>(list: T, mapper: (v: T) => U) => {
  const result: U[] = [];

  _each(list, v => result.push(mapper(v)));

  return result;
});

export const _bvalue =
  <T extends object>(key: keyof T) =>
  (obj: T) =>
    obj[key];

const _length = _curryr(_get)('length');

export const _each = <T>(
  list: Iterable<T>,
  iter: (v: T, idx: number) => unknown
) => {
  const keys = _keys(list);

  // list 이터러블로 만든 제너레이터 반복?
  for (let i = 0, len = keys.length; i < len; i++) {
    iter(list[keys[i]], i);
  }

  return list;
};

// export const _bvalue = _curryr(_get);

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

// 인자로 받은 함수를 연속 실행하는 함수를 리턴
// type PureFunction = (v: any) => any;
export const _pipe =
  <T>(...fns: Function[]) =>
  (arg: T) =>
    _reduce(fns, (acc, fn) => fn(acc), arg);

export const _go = <T>(arg: T, ...fns: Function[]) => _pipe(...fns)(arg);

export const _isObject = (obj: any): boolean =>
  typeof obj === 'object' && !!obj;

export const _keys = (v: any) => (_isObject(v) ? Object.keys(v) : []);

export const _values = _map(_identity);

export const _plunk = <T>(list: T[], key: keyof T) => _map(list, _bvalue(key));

export function _identity<T>(v: T) {
  return v;
}

export function _negate(func: Function) {
  return (...args: any[]) => !func(...args);
}

export const _reject = <T>(list: T, predi: (v: any) => boolean) =>
  _filter(list, _negate(predi));

export const _compact = _filter(_identity);

// 해당값을 처음 만날 때 리턴 - Iterable<T> -> 이터러블이 아니라도 처리하고싶지만 그런 경우는 잘 없긴함 = 저렇게 해야 처리가능...
export const _find = _curryr(
  <T>(data: Iterable<T>, predi: (v: T) => unknown) => {
    const keys = _keys(data);

    for (let i = 0, len = keys.length; i < len; i++) {
      const v = data[keys[i]];
      if (predi(v)) return v;
    }
  }
);

export const _find_index = _curryr(
  <T>(data: Iterable<T>, predi: (v: T) => unknown) => {
    const keys = _keys(data);

    for (let i = 0, len = keys.length; i < len; i++) {
      const v = data[keys[i]];
      if (predi(v)) return i;
    }

    return -1;
  }
);

export const _some = _curryr(
  <T>(data: Iterable<T>, predi: (v: T) => boolean) =>
    _find_index(data, predi) !== -1
);

type AnyFuntion = (...args: any[]) => any;

export const _every = _curryr(
  <T>(data: Iterable<T>, predi: (v: T) => boolean) =>
    _find_index(data, _negate(predi)) === -1
);
