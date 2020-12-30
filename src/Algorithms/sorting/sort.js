export const insertSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let idx = i;
    while (idx > 0 && arr[idx - 1] > arr[idx]) {
      [arr[idx], arr[idx - 1]] = [arr[idx - 1], arr[idx]];
      idx--;
    }
  }
};

export const choiceSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
};

export const bubbleSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
};

