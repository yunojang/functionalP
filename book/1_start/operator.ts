import { bvalue, filter } from './mapfilter';
import { find, findIndex } from './find';

const identity = (v: any) => v;

const not = (v: any) => !v;

const beq = (target: any) => (v: any) => target === v;

const some = <T>(list: T[]) => !!find(list, identity);
console.log(some([0, null, undefined]));

const every = <T>(list: T[]) =>
  bvalue('length')(filter(list, identity)) === bvalue('length')(list);
console.log(every([1, 2, 3, 0]));

const positive = <T>(list: T[]) => find(list, identity);
const negativeIndex = <T>(list: T[]) => findIndex(list, not);

const some2 = <T>(list: T[]) => not(not(positive(list)));
console.log(some2([null, 3]));

const every2 = <T>(list: T[]) => beq(-1)(negativeIndex(list));
console.log(every2([1, 2, 3, 0]));
