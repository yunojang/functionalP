import {
  _compact,
  _every,
  _filter,
  _find,
  _find_index,
  _get,
  _go,
  _identity,
  _keys,
  _map,
  _max,
  _max_by,
  _min,
  _min_by,
  _plunk,
  _reduce,
  _reject,
  _some,
  _values,
} from '../../utils/_';
import { users } from '../constant';

// 수집하기 - collect (map, values, plunk)
// console.log(_map(users, user => user.name));
console.log(_keys(users[1]));
console.log(_values(users[1]));
console.log(_plunk(users, 'name'));
// console.log(_plunk(users, 'age'));

// 거르기 - filter (reject, compact)
console.log(_filter(users, user => user.age >= 30));
console.log(_reject(users, user => user.age >= 30));
console.log(_compact([0, 1, 2, 3, null, false, true]));

// 찾아내기 - find (find_index, some, every)
console.log(_find(users, user => user.id === 4));
console.log(_find_index(users, user => user.id === 4));

_go([0, 1, 2, null], _some(_identity), console.log);
_go([1, 2], _every(_identity), console.log);

// 접기
_go(users, _plunk('age'), _max, console.log);
_go(users, _plunk('age'), _min, console.log);

_go(
  users,
  _min_by(u => u.age),
  console.log
);

_go(
  users,
  _max_by(u => u.age),
  console.log
);
