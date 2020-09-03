const isDevelopment = true;
const mockDataFetch = async () => Promise.resolve({
  firstName: 'First',
  lastName: 'Last',
});

const realDataFetch = async () => fetch('');
const fetchData = isDevelopment ? mockDataFetch : realDataFetch;

fetchData().then((result) => result);

const increment = (x, y) => x + y;
const decrement = (x, y) => x - y;

const calc = (func) => (x, y) => func(x, y);

const resultInc = calc(increment)(10, 20);
const resultDec = calc(decrement)(20, 10);
console.log(resultInc);
console.log(resultDec);

const divide = (x, y) => x / y;
const divideIsntZero = (func) => (...args) => {
  if (args.some((arg) => arg === 0)) {
    console.log('Divided is not be zero');
    return null;
  }
  return func(...args);
};

const safeDivide = divideIsntZero(divide);
console.log(safeDivide(4, 2));

