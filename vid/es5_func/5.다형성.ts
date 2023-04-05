import { _each, _filter, _go, _map } from '../../utils/_';
import { users } from '../constant';

// console.log(_filter(null, v => v));
// console.log(_map(null, v => v));

_go(
  users,
  _map(user => user.name),
  console.log
);

_go(
  { 1: users[1], 3: users[3], 5: users[5] },
  _map(user => user.name),
  _map(name => name.toUpperCase()),
  console.log
);
