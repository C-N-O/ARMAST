export const arrayMethods = [
  {
    name: 'push',
    function:
      'Adds one or more elements to the end of an array and returns the new length of the array. The orginal array is mutated',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push',
    mod: true,
    returnValue: 'New length of the array, as a number',
  },
  {
    name: 'unshift',
    function:
      'Adds one or more elements to the beginning of an array and returns the new length of the array. The orginal array is mutated',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift',
    mod: true,
    returnValue: 'New length of the array, as a number',
  },
  {
    name: 'pop',
    function:
      'Removes the last element from an array and returns that element. This method changes the length of the array.',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop',
    mod: true,
    returnValue: 'The element that was removed',
  },
  {
    name: 'splice',
    function:
      'Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice',
    mod: true,
    returnValue: 'An array containing the deleted elements',
  },

  {
    name: 'reverse',
    function:
      'Reverses an array in place, where first array element becomes the last, and the last array element becomes the first.',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse',
    mod: true,
    returnValue: 'The reversed array',
  },
  {
    name: 'sort',
    function:
      'Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort',
    mod: true,
    returnValue: 'The sorted array',
  },
  {
    name: 'fill',
    function:
      'Changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It mutates and returns the modified array.',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill',
    mod: true,
    returnValue: 'The filled array',
  },
  {
    name: 'map',
    function:
      'This method creates a new array populated with the results of calling a provided function on every element in the calling array.',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map',
    mod: false,
    returnValue:
      'A new array with each element being the result of the callback function.',
  },
  {
    name: 'filter',
    function:
      'This method creates a new array with all elements that pass the test implemented by the provided function.',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter',
    mod: false,
    returnValue:
      'A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.',
  },
  {
    name: 'slice',
    function:
      'This method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice',
    mod: false,
    returnValue: 'A new array containing the extracted elements.',
  },
  {
    name: 'concat',
    function:
      'This method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat',
    mod: false,
    returnValue: 'A new Array instance.',
  },
  {
    name: 'flat',
    function:
      'This method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.',
    reference:
      'https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Array/flat',
    mod: false,
    returnValue:
      'A new array with the sub-array elements concatenated into it.',
  },
  {
    name: 'flatMap',
    function:
      'This method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1, but slightly more efficient than calling those two methods separately.',
    reference:
      'https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap',
    mod: false,
    returnValue:
      'A new array with each element being the result of the callback function and flattened to a depth of 1.',
  },
  {
    name: 'indexOf',
    function:
      'This method returns the first index at which a given element can be found in the array, or -1 if it is not present.',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf',
    mod: false,
    returnValue:
      'The first index of the element in the array; -1 if not found.',
  },
  {
    name: 'findIndex',
    function:
      'This method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.',
    reference:
      'https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex',
    mod: false,
    returnValue:
      'The index of the first element in the array that passes the test. Otherwise, -1.',
  },
  {
    name: 'lastIndex',
    function:
      'This method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards.',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf',
    mod: false,
    returnValue: 'The last index of the element in the array; -1 if not found.',
  },
  {
    name: 'find',
    function:
      'This method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfies the testing function, undefined is returned.',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find',
    mod: false,
    returnValue:
      'The value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.',
  },
  {
    name: 'copyWithin',
    function:
      'This method shallow copies part of an array to another location in the same array and returns it without modifying its length.',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin',
    mod: true,
    returnValue: 'The modified array.',
  },
  {
    name: 'includes',
    function:
      'This method determines whether an array includes a certain value among its entries, returning true or false as appropriate.',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes',
    mod: false,
    returnValue:
      'A boolean. True if the value is found in the array, else false.',
  },
  {
    name: 'some',
    function:
      'This method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some',
    mod: false,
    returnValue:
      'A boolean. True if atleast one value passes the test, else false.',
  },
  {
    name: 'every',
    function:
      'This method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every',
    mod: false,
    returnValue: 'A boolean. True if all values pass the test, else false.',
  },
  {
    name: 'join',
    function:
      'This method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join',
    mod: false,
    returnValue: 'A string with all array elements joined',
  },
  {
    name: 'reduce',
    function:
      'This method executes a reducer function (that you provide) on each element of the array, resulting in single output value.',
    reference:
      'https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce',
    mod: false,
    returnValue: 'The single value that results from the reduction.',
  },
  {
    name: 'forEach',
    function:
      'This method executes a provided function once for each array element.',
    reference:
      'https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach',
    mod: false,
    returnValue: 'undefined',
  },
  {
    name: 'keys',
    function:
      'This method returns a new Array Iterator object that contains the keys for each index in the array.',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys',
    mod: false,
    returnValue: 'A new Array iterator object.',
  },
  {
    name: 'values',
    function:
      'This method returns a new Array Iterator object that contains the values for each index in the array.',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values',
    mod: false,
    returnValue: 'A new Array iterator object.',
  },
  {
    name: 'entries',
    function:
      'This method returns a new Array Iterator object that contains the key/value pairs for each index in the array.',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries',
    mod: false,
    returnValue: 'A new Array iterator object.',
  },
];

export const stringMethods = [
  {
    name: 'at',
    function:
      'The at() method takes an integer value and returns a new String consisting of the single UTF-16 code unit located at the specified offset.',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/at',
    mod: false,
    returnValue:
      'A String consisting of the single UTF-16 code unit located at the specified position. Returns undefined if the given index can not be found.',
  },
];

export const mathMethods = [
  {
    name: 'abs',
    function: 'This function returns the absolute value of a number.',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs',
    mod: false,
    returnValue: 'The absolute value of the given number.',
  },
  {
    name: 'ceil',
    function:
      'This function always rounds a number up to the next largest integer.',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil',
    mod: false,
    returnValue:
      'The smallest integer greater than or equal to the given number.',
  },
];
