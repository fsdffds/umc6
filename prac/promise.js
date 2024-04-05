'use strict';

// Promise is a JavaScript object for asyncronous operation.
// State : pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files...)
  console.log('doing something...');
  setTimeout(() => {
    // resolve('ellie');              // 성공했다면...
    reject(new Error('no network'));  // 실패했다면...
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise
  .then((value) => {
    console.log(value); // ellie
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');   // 성공,실패와 상관 없음
  })

// 3. Promise chaining
const fetchNumber = new Promise ((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)       // 2
.then(num => num * 3)       // 6
.then(num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num - 1), 1000);  // 5
  });
})
.then(num => console.log(num));  // 5

// 4. Error Handling
const getHen = () => 
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('닭'), 1000);
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => 계란`), 1000);
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 후라이`), 1000);
  });

// getHen()
// .then(hen => getEgg(hen))
// .then(egg => cook(egg))
// .then(meal => console.log(meal));

getHen() //
.then(getEgg)
.then(cook)
.then(console.log);