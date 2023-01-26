const products = [
  { id: 1, name: 'coke', price: 1500 },
  { id: 2, name: 'gum', price: 500 },
  { id: 3, name: 'bear', price: 55000 },
  { id: 4, name: 'cake', price: 35000 },
  { id: 5, name: 'juice', price: 500 },
];

const map = <T>(list: T[], iter: (v: T) => any) => {
  const result = [];

  for (const item of list) {
    result.push(iter(item));
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

const log_length = (v: Lengty) => console.log(v.length);
