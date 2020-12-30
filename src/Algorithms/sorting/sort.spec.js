import {
  bubbleSort,
  choiceSort,
  insertSort } from 'src/Algorithms/sorting/sort';

describe('Algorithm sort', () => {
  it('Should sort a list with an insert sort algorithm', () => {
    const mockList = [10, 8, 7, 9, 6, 4, 3, 5, 2, 1];
    const sortedListList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    insertSort(mockList);
    expect(mockList).toEqual(sortedListList);
  });

  it('Should sort a list with an choice sort algorithm', () => {
    const mockList = [10, 8, 7, 9, 6, 4, 3, 5, 2, 1];
    const sortedListList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    choiceSort(mockList);
    expect(mockList).toEqual(sortedListList);
  });

  it('Should sort a list with an bubble sort algorithm', () => {
    const mockList = [10, 8, 7, 9, 6, 4, 3, 5, 2, 1];
    const sortedListList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    bubbleSort(mockList);
    expect(mockList).toEqual(sortedListList);
  });
});
