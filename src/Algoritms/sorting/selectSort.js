const list = [4, 7, 1, 5, 9, 0, 3, 2, 8, 6];

function selectSort(list) {
  for (let i = 0; i < list.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < list[min]) {
        min = j;
      }
    }
    let dummy = list[i];
    list[i] = list[min];
    list[min] = dummy;
  }
  return list;
}

console.log(selectSort(list));