const sqr = x => x * x;

// cache
const cache = fn => {
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

const cachedSqr = cache(sqr);
console.log(cachedSqr(10));
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

const conver_sqr = convertFn;
