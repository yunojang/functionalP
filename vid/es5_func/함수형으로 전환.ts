import { _bvalue, _filter, _map } from '../../utils/_';

const users2 = [
  { name: 'man_a', age: 30 },
  { name: 'man_b', age: 29 },
  { name: 'woman_a', age: 32 },
  { name: 'woman_b', age: 25 },
  { name: 'man_c', age: 39 },
];

console.log(_filter(users2, user => user.age >= 30));
console.log(_filter(users2, user => user.age < 30));

console.log(_map(users2, user => user.age));

console.log(_map(users2, _bvalue('name')));

interface Namely {
  name: string;
}
const map_name = <T extends Namely>(list: T[]) => _map(list, _bvalue('name'));
console.log(map_name(users2));

console.log(_map([1, 2, 3], v => v * 2));
// console.log(_map(document.querySelectorAll('*'), node => node.nodeName));
