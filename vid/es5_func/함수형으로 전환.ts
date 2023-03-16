const users2 = [
  { name: 'man_a', age: 30 },
  { name: 'man_b', age: 29 },
  { name: 'woman_a', age: 32 },
  { name: 'woman_b', age: 25 },
  { name: 'man_c', age: 39 },
];

const _filter = <T>(list: T[], predicate: (v: T) => boolean) => {
  const result = [];

  for (const item of list) {
    if (predicate(item)) {
      result.push(item);
    }
  }

  return result;
};

console.log(_filter(users2, user => user.age >= 30));
console.log(_filter(users2, user => user.age < 30));

const _map = <T>(list: T[], iteratee: (v: T) => any) => {
  const result = [];

  for (const item of list) {
    result.push(iteratee(item));
  }

  return result;
};

console.log(_map(users2, user => user.age));

const _bvalue =
  <T extends object>(key: keyof T) =>
  (obj: T) =>
    obj[key];

console.log(_map(users2, _bvalue('name')));

interface Namely {
  name: string;
}
const names = <T extends Namely>(list: T[]) => _map(list, _bvalue('name'));

console.log(names(users2));
