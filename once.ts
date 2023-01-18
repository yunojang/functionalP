const getSpm = (spm_a: any, spm_b: any) => {
  return [spm_a, spm_b];
};

// partial function -> flexable default value
const getSpmb = (spm_b: any) => {
  //
  return getSpm(1000, spm_b);
};

const once = (fn: Function) => {
  let done = false;

  return function () {
    return done ? undefined : ((done = true), fn.apply(null, arguments));
  };
};

const limit = (fn: Function, count: number) => {
  let called = 0;

  return function () {
    return called >= count ? undefined : (called++, fn.apply(null, arguments));
  };
};

// comma, test
const x = 5,
  y = 10,
  z = 2;

console.log(x), console.log(y), console.log(z);
// comma, test

const initData = once(() => {
  console.log('Initialize data');
});

// call fn
initData();

// 호출되지 않음
initData();
initData();
initData();

const getData = limit(() => {
  console.log('fetching data...');
}, 3);

setInterval(() => {
  getData();
}, 500);
