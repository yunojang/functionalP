import { _bvalue, _curry, _curryr, _filter, _map } from '../../utils/_';
import { users } from '../constant';

const add = _curry((a: number, b: number) => a + b);
// console.log(add(10, 5));
// console.log(add(10)(5));

const add10 = add(10);
console.log(add10(15));

const sub = _curryr((a: number, b: number) => a - b);
// console.log(sub(10, 2));

const sub5 = sub(5);
console.log(sub5(10));

console.log(
  _map(
    _filter(users, user => user.age >= 30),
    _bvalue('age')
  )
);

console.log(
  _map(
    _filter(users, user => user.age < 30),
    _bvalue('name')
  )
);
