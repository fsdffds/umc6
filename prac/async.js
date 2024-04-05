// async & await
// clear style of using Promise
// 오래 걸리는 일들은 비동기적으로 처리하는 것이 효과적이다!!!!


// 1. async
// function fetchUser() {
//   return new Promise ((resolve, reject) => {
//     // do networkk request in 10 secs..
//     resolve('ellie');
//   });
// }

async function fetchUser() {
  // do networkk request in 10 secs..
  return 'ellie';
}

const user = fetchUser();
user.then(console.log);

// 2. await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return 'apple';
}

async function getBanana() {
  await delay(1000);
  return 'banana';
}

// function pickFruits() {
//   return getApple().then(apple => {
//     return getBanana().then(banana => `${apple}, ${banana}`);
//   });
// }

async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();

  const apple = await applePromise;
  const banana = await bananaPromise;

  // const apple = await getApple();
  // const banana = await getBanana();

  return `${apple}, ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then(fruits =>
    fruits.join(', '));
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);