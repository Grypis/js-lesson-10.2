//! ====================================
/* const promise = new Promise((resolve, reject) => {
  console.log('Create promise');
  setTimeout(() => {
    reject();
  }, 3000);
});

console.log(promise); */

//! ====================================
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);
});

//! ====================================
promise.then(onFulfilled, onRejected);

function onFulfilled() {
  console.log('Yummy');
}
function onRejected() {
  console.log('Refund');
}
