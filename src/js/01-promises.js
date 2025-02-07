//! ====================================
/* const promise = new Promise((resolve, reject) => {
  console.log('Create promise');
  setTimeout(() => {
    reject();
  }, 3000);
});

console.log(promise); */

//! ====================================
/* const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const rand = Math.round(Math.random());
    const isActive = Boolean(rand);

    if (isActive) {
      resolve('Борщ');
    } else {
      reject('Гроші');
    }
  }, 100);
}); */

//! ====================================
/* promise.then(onFulfilled, onRejected);

function onFulfilled(message) {
  console.log(message);
  console.log('Yummy');
}
function onRejected(message) {
  console.log(message);
  console.log('Refund');
} */

//! ====================================
/* promise
  .then(message => {
    console.log(message);
    console.log('Yummy');
  })
  .catch(message => {
    console.log(message);
    console.log('Reject');
  })
  .finally(() => {
    console.log('Have a good day');
    console.log('Bless you');
    console.log('Happy day');
  }); */

//! ====================================
/* const arr = [1, 22, 3, 4, 1, 2, 4, 5, 6, 7, 8, 9, 6, 3, 1, 21, 12, 24];

arr
  .filter(el => el % 2 == 0)
  .filter(el > 1)
  .filter(el < 10); */

//! ====================================
/* const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const rand = Math.round(Math.random());
    const isActive = Boolean(rand);

    if (isActive) {
      resolve(rand);
    } else {
      reject(rand);
    }
  }, 100);
});

promise
  .catch(err => {
    console.log('err', err);
  })
  .then(res1 => {
    console.log('res1', res1);
    return '1';
  })
  .then(res2 => {
    console.log('res2', res2);
    return '2';
  })
  .then(res3 => {
    console.log('res3', res3);
    return '3';
  })
  .then(res4 => {
    console.log('res4', res4);
    return '4';
  })
  .then(res5 => {
    console.log('res5', res5);
    return '5';
  }); */
