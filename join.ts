class Result {
  constructor(public ok: any, public err: any) {
    this.ok = ok;
    this.err = err;
  }

  isOk() {
    return this.err === null || this.err === undefined;
  }

  map(fn: (r: Result) => Result) {
    return this.isOk()
      ? Result.of(fn(this.ok), this.err)
      : Result.of(this.ok, fn(this.err));
  }

  flatMap(fn: (r: Result) => Result) {
    return this.map(fn).join();
  }

  join() {
    if (this.isOk()) {
      return this.ok;
    } else {
      return this.err;
    }
  }

  static of(ok: any, err: any) {
    return new Result(ok, err);
  }
}

const isNum = (x: any) => typeof x === 'number' || !isNaN(+x);

const sqr2_result = (x: any) => {
  if (isNum(x)) {
    return Result.of(x * x, undefined);
  } else {
    return Result.of(undefined, 0);
  }
};

console.log(Result.of(4.4, undefined).map(sqr2_result).join());
console.log(Result.of('a', undefined).flatMap(sqr2_result));
console.log(Result.of('123', undefined).flatMap(sqr2_result));
