import { _bvalue, _curryr, _reduce } from '../../utils/_';
import { users } from '../constant';

const add = (a: number, b: number) => a + b;

interface Agely {
  age: number;
}
const add_age = (a: number, b: Agely) => a + b.age;

console.log(_reduce(users, add_age, 0));
console.log(_reduce([1, 2, 3, 4, 5], add, 0));
