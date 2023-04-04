import { _reduce } from '../../utils/_';
import { users } from '../constant';

const add = (a: number, b: number) => a + b;

console.log(_reduce(users, (acc, cur) => acc + cur.age, 0));
console.log(_reduce([1, 2, 3, 4, 5], add, 0));
