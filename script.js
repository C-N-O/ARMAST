'use strict';

const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const center = document.querySelector('.center');

const homeCategories = document.querySelector('.home--categories');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
let close = document.querySelector('.close-modal');
const modOriArrEl = document.querySelector('.modifiesOriginalArry');
const returnsEl = document.querySelector('.returns');
const returnValueEl = document.querySelector('.return--value');

const methodName = document.querySelector('.method--name');
const methodUsage = document.querySelector('.method--usage');

const methodReference = document.querySelector('.method--reference');
const usageMsg = document.querySelector('.usage--msg');
const usagePage = document.querySelector('.usage--page');

const openModal = function (
  method_Name,
  method_Usage = 'to be updated',
  method_Reference = 'to be updated',
  modifies = false,
  returns = false,
  returnValue = ''
) {
  methodName.textContent = method_Name;
  methodUsage.textContent = method_Usage;
  methodReference.setAttribute('href', method_Reference);
  methodReference.setAttribute('target', '_blank');
  methodReference.textContent = 'Reference';
  modOriArrEl.textContent = 'Modifies The Original Array: ' + modifies;
  returnsEl.textContent = 'Returns: ' + returns;
  returnValueEl.textContent = 'Return Value: ' + returnValue;

  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
};

const arrayMethods = [
  {
    name: 'push',
    function:
      'Adds one or more elements to the end of an array and returns the new length of the array. The orginal array is mutated',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push',
    mod: true,
    returns: true,
    returnValue: 'New length of the array, as a number',
  },
  {
    name: 'unshift',
    function:
      'Adds one or more elements to the beginning of an array and returns the new length of the array. The orginal array is mutated',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift',
    mod: true,
    returns: true,
    returnValue: 'New length of the array, as a number',
  },
  {
    name: 'pop',
    function:
      'Removes the last element from an array and returns that element. This method changes the length of the array.',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop',
    mod: true,
    returns: true,
    returnValue: 'The element that was removed',
  },
  {
    name: 'splice',
    function:
      'Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice',
    mod: true,
    returns: true,
    returnValue: 'An array containing the deleted elements',
  },

  {
    name: 'reverse',
    function:
      'Reverses an array in place, where first array element becomes the last, and the last array element becomes the first.',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse',
    mod: true,
    returns: true,
    returnValue: 'The reversed array',
  },
  {
    name: 'sort',
    function:
      'Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort',
    mod: true,
    returns: true,
    returnValue: 'The sorted array',
  },
  {
    name: 'fill',
    function:
      'Changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It mutates and returns the modified array.',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill',
    mod: true,
    returns: true,
    returnValue: 'The filled array',
  },
  {
    name: 'map',
    function:
      'This method creates a new array populated with the results of calling a provided function on every element in the calling array.',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map',
    mod: false,
    returns: true,
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
    returns: true,
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
    returns: true,
    returnValue: 'A new array containing the extracted elements.',
  },
  {
    name: 'concat',
    function:
      'This method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat',
    mod: false,
    returns: true,
    returnValue: 'A new Array instance.',
  },
  {
    name: 'flat',
    function:
      'This method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.',
    reference:
      'https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Array/flat',
    mod: false,
    returns: true,
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
    returns: true,
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
    returns: true,
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
    returns: true,
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
    returns: true,
    returnValue: 'The last index of the element in the array; -1 if not found.',
  },
  {
    name: 'find',
    function:
      'This method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfies the testing function, undefined is returned.',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find',
    mod: false,
    returns: true,
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
    returns: true,
    returnValue: 'The modified array.',
  },
  {
    name: 'includes',
    function:
      'This method determines whether an array includes a certain value among its entries, returning true or false as appropriate.',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes',
  },
  {
    name: 'some',
    function:
      'This method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some',
  },
  {
    name: 'every',
    function:
      'This method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every',
  },
  {
    name: 'join',
    function:
      'This method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join',
  },
  {
    name: 'reduce',
    function:
      'This method executes a reducer function (that you provide) on each element of the array, resulting in single output value.',
    reference:
      'https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce',
  },
  {
    name: 'forEach',
    function:
      'This method executes a provided function once for each array element.',
    reference:
      'https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach',
  },
  {
    name: 'keys',
    function:
      'This method returns a new Array Iterator object that contains the keys for each index in the array.',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys',
  },
  {
    name: 'values',
    function:
      'This method returns a new Array Iterator object that contains the values for each index in the array.',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values',
  },
  {
    name: 'entries',
    function:
      'This method returns a new Array Iterator object that contains the key/value pairs for each index in the array.',
    reference:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries',
  },
];

//show all methods that modify the original array
function showModifiers() {
  const result = arrayMethods.filter(el => el.mod === true);
  console.log(result);
}

//show all methods that return a value
function showReturners() {
  const result = arrayMethods.filter(el => el.returns === true);
  console.log(result);
}

//show all methods that modify the original array and return a value
function showModifiersAndReturners() {
  const result = arrayMethods.filter(
    el => el.mod === true && el.returns === true
  );
  console.log(result);
}

//update the displays when menu btns are clicked
function updateStyles(className) {
  if (className === 'home') {
    homeCategories.style.display = 'block';
    center.style.display = 'none';
    usagePage.style.display = 'none';
  }

  if (className === 'usage') {
    center.style.display = 'none';
    usagePage.style.display = 'block';
    homeCategories.style.display = 'none';
  }
}

//Using Event Propagation to add event listener to menu items
document.querySelector('.menu').addEventListener('click', function (e) {
  if (e.target.classList.contains('menu--link')) {
    const className = e.target.classList[0];
    updateStyles(className);
  }
});

//Using Event Propagation to add event listener to home categories btns
document
  .querySelector('.home--categories')
  .addEventListener('click', function (e) {
    const btn = e.target;

    if (btn.classList.contains('array--methods')) {
      center.style.opacity = 1;
      homeCategories.style.display = 'none';
      usagePage.style.display = 'none';
      center.style.display = 'grid';
      center.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
      center.style.gridTemplateRows = '100px 100px';
    }

    if (btn.classList.contains('string--methods')) console.log();
    if (btn.classList.contains('math--methods')) console.log();
  });

//Using Event Propagation to add event listener to all array buttons
center.addEventListener('click', function (e) {
  const btn = e.target.textContent;
  arrayMethods.forEach(function (el) {
    if (el.name === btn)
      openModal(
        el.name,
        el.function,
        el.reference,
        el.mod,
        el.returns,
        el.returnValue
      );
  });
});

//close modal button
close.addEventListener('click', function () {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
});

//Add event listeners to the usage btns
usagePage.addEventListener('click', function (e) {
  const btn = e.target;
  if (btn.classList.contains('btn--modify')) showModifiers();
  if (btn.classList.contains('btn--return')) showReturners();
  if (btn.classList.contains('btn--modify_and_return'))
    showModifiersAndReturners();
});
