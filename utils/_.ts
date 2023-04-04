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

export const _each = <T>(list: ArrayLike<T>, iter: (v: T) => void) => {
  for (let i = 0; i < list.length; i++) {
    iter(list[i]);
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

export const _reduce = <T, U>(
  list: T[],
  accumulate: (acc: U, cur: T) => U,
  memo: U
) => {
  let result = memo;

  for (const item of list) {
    result = accumulate(result, item);
  }

  return result;
};
