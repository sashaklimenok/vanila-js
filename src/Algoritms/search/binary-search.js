let list = [];
for(let i = 1; i <= 100; i++ ) {
  list.push(i);
}

const binarySearch = (list, item) => {
  let low = 0;
  let hight = list.length - 1;
  let steps = 0;
  while (low <= hight) {
    steps++;
    let mid = Math.floor((low + hight) / 2);
    let guess = list[mid];
    console.log(`mid= ${mid}`);
    if (guess === item) {
      console.log(`algoritm did ${steps} steps`);
      return mid;
    }
    if(guess > item) {
      hight = mid - 1;
    }else {
      low = mid + 1;
    }
  }

  return -1
}

console.log(binarySearch(list, 73));