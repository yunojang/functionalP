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

export const _bvalue =
  <T extends object>(key: keyof T) =>
  (obj: T) =>
    obj[key];
