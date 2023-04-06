import { _bvalue, _keys, _map, _plunk, _values } from '../../utils/_';
import { users } from '../constant';

console.log(_map(users, user => user.name));
console.log(_keys(users[1]));
console.log(_values(users[1]));

console.log(_plunk(users, 'name'));
console.log(_plunk(users, 'age'));
