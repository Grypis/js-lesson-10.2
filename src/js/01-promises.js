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
    const rand = Math.round(Math.random());
    const isActive = Boolean(rand);

    if (isActive) {
      resolve('Борщ');
    } else {
      reject('Гроші');
    }
  }, 100);
});

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
Promise.then(message => {
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
  });
