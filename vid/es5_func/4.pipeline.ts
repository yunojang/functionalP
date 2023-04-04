import { users } from '../constant';
import { _bvalue, _filter, _go, _map, _pipe } from '../../utils/_';

const f1 = _pipe(
  (v: number) => v + 1,
  (v: number) => v * 2,
  (v: number) => v * v
);

console.log(f1(2));
console.log(f1(4));

_go(
  1,
  (v: number) => v + 1,
  (v: number) => v * 2,
  (v: number) => v * v,
  console.log
);

_go(
  users,
  _filter(user => user.age >= 30),
  _map(_bvalue('name')),
  console.log
);

_go(
  users,
  _filter(user => user.age < 30),
  _map(_bvalue('age')),
  console.log
);
