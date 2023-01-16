const convertNumber = (x: any) => (isNaN(+x) ? 0 : +x);
const inNum = (x: any) => typeof x === 'number' || !isNaN(+x);

class MaybeNumber {
  constructor(private x: any) {
    this.x = x;
  }

  map(fn: (x: any) => any) {
    if (inNum(this.x)) {
      return new MaybeNumber(fn(this.x));
    } else {
      return new MaybeNumber(fn(0));
    }
  }

  get value() {
    return this.x;
  }

  static of(x: any) {
    return new MaybeNumber(x);
  }
}

const sqr2 = (x: number) => x * x;

// console.log(Math.sin(undefined));
console.log(MaybeNumber.of(undefined).map(Math.cos).map(sqr2).map(sqr2).value);
console.log(MaybeNumber.of(23).map(sqr2).map(sqr2).value);
