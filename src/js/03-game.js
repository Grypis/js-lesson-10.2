const startBtn = document.querySelector('.start-btn');
const container = document.querySelector('.container');
const resultElem = document.querySelector('.result');

function createPromise(delay) {
  const status = Math.random() > 0.5;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) resolve('🤑');
      else reject('👿');
    }, delay);
  });

  return promise;
}

/* const p1 = createPromise(100);
const p2 = createPromise(200);
const p3 = createPromise(300);

p1.then(onFulfilled).catch(onRejected);
p2.then(onFulfilled).catch(onRejected);
p3.then(onFulfilled).catch(onRejected); */

startBtn.addEventListener('click', () => {
  resultElem.textContent = '';
  container.children[0].textContent = '';
  container.children[1].textContent = '';
  container.children[2].textContent = '';

  const arr = [];

  for (let i = 0; i < 3; i++) {
    const promise = createPromise((i + 1) * 100);
    promise
      .then(smile => {
        container.children[i].textContent = smile;
      })
      .catch(smile => {
        container.children[i].textContent = smile;
      });

    arr.push(promise);
  }
  Promise.allSettled(arr).then(result => {
    const isWinner = result
      .map(el => el.value || el.reason)
      .every(el => el === '🤑');

    resultElem.textContent = isWinner ? 'Winner' : 'Loser';
  });
});

console.log();

/* function onFulfilled(smile) {
  console.log(smile);
}

function onRejected(smile) {
  console.log(smile);
} */
