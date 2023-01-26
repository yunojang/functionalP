const products = [
  { id: 1, name: 'coke', price: 1500 },
  { id: 2, name: 'gum', price: 500 },
  { id: 3, name: 'bear', price: 55000 },
  { id: 4, name: 'cake', price: 35000 },
  { id: 5, name: 'juice', price: 500 },
];

const map = <T>(list: T[], iteratee: (v: T) => any) => {
  const result = [];

  for (const item of list) {
    result.push(iteratee(item));
  }

  return result;
};

const filter = <T>(list: T[], predicate: (v: T) => boolean) => {
  const result = [];

  for (const item of list) {
    if (predicate(item)) result.push(item);
  }

  return result;
};

interface Lengty {
  length: number;
}

const log_length = (v: Lengty) => {
  console.log(v.length);

  return v.length;
};

console.log(filter(products, p => p.price > 500));
log_length(filter(products, p => p.price > 500));

interface Pricy {
  price: number;
}

interface Namely {
  name: string;
}

const over_500 = (p: Pricy) => p.price > 500;
const under_500 = (p: Pricy) => p.price <= 500;

console.log(filter(products, over_500));
console.log(filter(products, under_500));

const bvalue =
  <T extends object>(key: keyof T) =>
  (obj: T) =>
    obj[key];

console.log(map(products, bvalue('name')));
console.log(map(products, bvalue('id')));

const prices = <T extends Pricy>(list: T[]) => map(list, bvalue('price'));
const names = <T extends Namely>(list: T[]) => map(list, bvalue('name'));

console.log(prices(filter(products, over_500)));
console.log(names(filter(products, under_500)));

const bvalues =
  <T extends object>(key: keyof T) =>
  (list: T[]) =>
    map(list, bvalue(key));

const prices2 = bvalues('price');
const names2 = bvalues('name');

console.log(prices2(filter(products, over_500)));
console.log(names2(filter(products, under_500)));
