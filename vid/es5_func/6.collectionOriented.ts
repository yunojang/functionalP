import {
  _bvalue,
  _compact,
  _filter,
  _keys,
  _map,
  _plunk,
  _reject,
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
