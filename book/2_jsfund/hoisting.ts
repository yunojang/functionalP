console.log(add1(10, 20));

function add1(a: any, b: any) {
  return a + b;
}

// 활용

console.log(add(10, 10));

function add(a: number, b: number) {
  return valid() ? a + b : new Error();

  function valid() {
    return Number.isInteger(a) && Number.isInteger(b);
  }
}

const users = [{ id: 1 }];
const reviewers = [{ id: 1 }];

users.filter(user => !reviewers.find(r => r.id === user.id));
