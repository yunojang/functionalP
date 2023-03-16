export const _filter = <T>(list: T[], predicate: (v: T) => boolean) => {
  const result: T[] = [];

  _each(list, v => {
    if (predicate(v)) result.push(v);
  });

  return result;
};

export const _map = <T, U>(list: T[], iter: (v: T) => U) => {
  const result: U[] = [];

  _each(list, v => result.push(iter(v)));

  return result;
};

export const _each = <T>(list: T[], iter: (v: T) => void) => {
  for (const item of list) {
    iter(item);
  }

  return list;
};
