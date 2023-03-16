export const _filter = <T>(list: T[], predicate: (v: T) => boolean) => {
  const result = [];

  for (const item of list) {
    if (predicate(item)) {
      result.push(item);
    }
  }

  return result;
};

export const _map = <T>(list: T[], iteratee: (v: T) => any) => {
  const result = [];

  for (const item of list) {
    result.push(iteratee(item));
  }

  return result;
};
