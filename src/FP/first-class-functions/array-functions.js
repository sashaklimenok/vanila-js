const maockArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const votes = ['Adam', 'Alex', 'Aaron', 'Ben', 'Carl',
  'Dan', 'David', 'Adam', 'Fred', 'George',
  'George', 'Walter', 'Adam', 'Jack', 'Otto', 'Jack',
  'Walter', 'Jack', 'Monte', 'Adam', 'Mark', 'Otto',
  'Otto', 'George', 'Otto', 'Otto', 'Roger', 'Jack',
  'Adam', 'Tim', 'Ty', 'George', 'Walter'];

const map = (arr, callback) => {
  const resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    resultArray.push(callback(arr[i], i, arr));
  }
  return resultArray;
};

// map(maockArray, (item) => {
//   console.log(item);
//   return item + 2;
// });

const countVotes = (names) => {
  return names.reduce((acc, name) => ({
    ...acc,
    [name]: acc[name] ? acc[name] +1 : 1,
  }), {});
};

countVotes(votes);

