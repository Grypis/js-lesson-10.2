//! ==============================================
/* function foo() {
  const arr = {};
  return arr;
}

function createPromise() {
  const promise = new Promise();
  return promise;
} */

//! ==============================================
/* const promise1 = new Promise((resolve, reject) => {
  const rand = Math.round(Math.random());
  setTimeout(() => {
    if (rand) resolve('Hello world1');
    else reject('error');
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  const rand = Math.round(Math.random());
  setTimeout(() => {
    if (rand) resolve('Hello world2');
    else reject('error');
  }, 3000);
});
const promise3 = new Promise((resolve, reject) => {
  const rand = Math.round(Math.random());
  setTimeout(() => {
    if (rand) resolve('Hello world3');
    else reject('error');
  }, 5000);
});

promise1.then(onFulfilled).catch(onRejected);
promise2.then(onFulfilled).catch(onRejected);
promise3.then(onFulfilled).catch(onRejected); */

//! ==============================================
/* function createPromise(value, delay, status) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) resolve(value);
      else reject(value);
    }, delay);
  });

  return promise;
}

const promise1 = createPromise('Hello1', 3000, true);
const promise2 = createPromise('Hello2', 5000, true);
const promise3 = createPromise('Hello3', 1000, true);

promise1.then(onFulfilled).catch(onRejected);
promise2.then(onFulfilled).catch(onRejected);
promise3.then(onFulfilled).catch(onRejected); */
//! ==============================================
/* function onFulfilled(message) {
  console.log(message);
  console.log('Yummy');
}
function onRejected(message) {
  console.log(message);
  console.log('Refund');
} */

//! ==============================================
/* function foo() {
  const arr = [1, 2, 3, 4, 1];
  return arr;
}

foo().filter(); */

//! ==============================================
/* function fetch1(url) {
  const promise = new Promise(resolve => {
    resolve(url);
  });
  return promise;
}

fetch1('Hello').then(result => {
  console.log(result);
}); */

//! ==============================================
/* function foo() {
  const arr = [1, 2, 3, 4, 21, 31, 4];
  arr.splice();

  //   const promise = new Promise(resolve => {
  //     resolve(arr);
  //   });
  return Promise.resolve(arr);
}

foo()
  .then(res => {
    console.log(res);
    if (res.length > 10) {
      return res;
    } else {
      Promise.reject('test');
    }
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => console.log(err)); */

//! ==============================================
/* function createPromise(value, delay, status) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) resolve(value);
      else reject(value);
    }, delay);
  });

  return promise;
}

function promiseGenerate() {
  const len = 5;
  for (let i = 0; i < len; i++) {
    const rand = Boolean(Math.round(Math.random()));
    const promise = createPromise(rand, i * 1000, rand);
    promise.then(onFulfilled).catch(onRejected);
  }
}
promiseGenerate(); */

//! ==============================================
/* function onFulfilled(message) {
  console.log('+', message);
}
function onRejected(message) {
  console.log('-', message);
} */

//! ==============================================
/* function createPromise(value, delay, status) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) resolve(value);
      else reject(value);
    }, delay);
  });

  return promise;
}

const p1 = createPromise('Data1', 5000, true);
const p2 = createPromise('Data2', 4000, true);
const p3 = createPromise('Data3', 2000, false);
const p4 = createPromise('Data4', 3000, true);
const p5 = createPromise('Data5', 1000, true);

const arr = [p1, p2, p3, p4, p5]; */

/* Promise.all(arr)
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  }); */

/* Promise.allSettled(arr).then(data => {
  console.log(data);
}); */

/* Promise.race(arr)
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  }); */
