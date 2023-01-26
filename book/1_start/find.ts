const products = [
  { id: 1, name: 'coke', price: 1500 },
  { id: 2, name: 'gum', price: 500 },
  { id: 3, name: 'bear', price: 55000 },
  { id: 4, name: 'cake', price: 35000 },
  { id: 5, name: 'juice', price: 500 },
];

const find = <T>(list: T[], predicate: (item: T) => boolean) => {
  for (const item of list) {
    if (predicate(item)) return item;
  }
};

console.log(find(products, p => p.price > 40000));

console.log('==== bmatch ====');

const bmatch =
  <T extends object>(key: keyof T, val: any) =>
  (obj: T) =>
    obj[key] === val;

console.log(find(products, bmatch('name', 'gum')));
console.log(find(products, bmatch('price', 55000)));

const match = <T extends object>(obj: T, target: T) => {
  for (const key in target) {
    if (obj[key] !== target[key]) return false;
  }

  return true;
};

const bmatches =
  <T extends object>(target: T) =>
  (obj: T) =>
    match(obj, target);

const findIndex = <T>(
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
