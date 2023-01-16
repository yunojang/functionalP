const convertNumber = (x: any) => (isNaN(+x) ? 0 : +x);

class MaybeNumber {
  constructor(private x: any) {
    this.x = x;
  }

  map(fn: (x: any) => any) {
    return new MaybeNumber(fn(convertNumber(this.x)));
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
console.log(new MaybeNumber(undefined).value);
