const sqr = x => x * x;

// cache
const cacheDecorator = fn => {
  const storage = new Map();

  return x => {
    let result;

    if (storage.has(x)) {
      console.log('cached');
      result = storage.get(x);
    } else {
      result = fn(x);
      storage.set(x, result);
    }

    return result;
  };
};

const cachedSqr = cacheDecorator(sqr);
console.log(cachedSqr(10));
console.log(cachedSqr(10));
console.log(cachedSqr(2));
console.log(cachedSqr(2));

// convert
const convertNumber = x => {
  if (typeof x === 'number') {
    return x;
  } else {
    const num = +x;
    return isNaN(num) ? 0 : num;
  }
};

const convertSqr = convetFn => x => {
  const y = convetFn(x);
  return y * y;
};

const numberSqr = convertSqr(convertNumber);
console.log(numberSqr(10));
console.log(numberSqr('asd'));
console.log(numberSqr('25'));
