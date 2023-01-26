import { products } from './value';

export const find = <T>(list: T[], predicate: (item: T) => boolean) => {
  for (const item of list) {
    if (predicate(item)) return item;
  }
};

console.log(find(products, p => p.price > 40000));

console.log('==== bmatch ====');

export const bmatch =
  <T extends object>(key: keyof T, val: any) =>
  (obj: T) =>
    obj[key] === val;

console.log(find(products, bmatch('name', 'gum')));
console.log(find(products, bmatch('price', 55000)));

export const match = <T extends object>(obj: T, target: T) => {
  for (const key in target) {
    if (obj[key] !== target[key]) return false;
  }

  return true;
};

export const bmatches =
  <T extends object>(target: T) =>
  (obj: T) =>
    match(obj, target);

export const findIndex = <T>(
  list: T[],
  predicate: (v: T, idx: number, list: T[]) => boolean
) => {
  for (const idx in list) {
    const item = list[idx];

    if (predicate(item, +idx, list)) return idx;
  }

  return -1;
};

console.log(findIndex(products, bmatches({ name: 'juice', price: 500 })));
