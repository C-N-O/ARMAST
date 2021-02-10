import { arrayMethods } from './data.js';
import { stringMethods } from './data.js';
import { mathMethods } from './data.js';
('use strict');

//const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const centerParent = document.querySelector('.center--parent');
const centerArray = document.querySelector('.center--array');
const centerString = document.querySelector('.center--string');
const centerMath = document.querySelector('.center--math');

const homeCategories = document.querySelector('.home--categories');

const usageBTNs = document.querySelector('.usageBtns');
const btnModify = document.querySelector('.btn--modify');
const btnNotModify = document.querySelector('.btn--non-modify');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
let close = document.querySelector('.close-modal');
const modOriArrEl = document.querySelector('.modifiesOriginalArray');
const returnValueEl = document.querySelector('.return--value');

const methodName = document.querySelector('.method--name');
const methodUsage = document.querySelector('.method--usage');

const methodReference = document.querySelector('.method--reference');
const usageMsg = document.querySelector('.usage--msg');
const usagePage = document.querySelector('.usage--page');

const ParentEl = document.querySelector('.parentEl');
const MessageEl = document.querySelector('.message');

const CurrDateEl = document.querySelector('.currDate');
const CurrTimeEl = document.querySelector('.currTime');
let date = '';
let methodGroup = '';
let groupName = '';

// setInterval(() => {
//   date = new Date();
//   console.log(date);
//   CurrDateEl.textContent = `${date.getDay().toString().padStart(2, '0')}/${(
//     date.getMonth() + 1
//   )
//     .toString()
//     .padStart(2, '0')}/${date.getFullYear()}`;
//   CurrTimeEl.textContent = `${date
//     .getHours()
//     .toString()
//     .padStart(2, '0')} : ${date
//     .getMinutes()
//     .toString()
//     .padStart(2, '0')} : ${date.getSeconds()}`;
// }, 1000);

const openModal = function (
  method_Name,
  method_Usage = 'to be updated',
  method_Reference = 'to be updated',
  modifies = false,
  returnValue = ''
) {
  methodName.textContent = method_Name;
  methodUsage.textContent = method_Usage;
  methodReference.setAttribute('href', method_Reference);
  methodReference.setAttribute('target', '_blank');
  methodReference.textContent = 'Reference';
  modOriArrEl.textContent = 'Modifies The Original Array: ' + modifies;
  returnValueEl.textContent = 'Return Value: ' + returnValue;

  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
};

//render Arrays
function renderArrayList(result, str) {
  ParentEl.innerHTML = '';
  MessageEl.textContent = str;
  result.forEach(function (element) {
    const html = `<div class="one--method">${element.name}</div>`;
    ParentEl.insertAdjacentHTML('afterbegin', html);
  });
}

//show all methods that modify the original array
function showModifiers() {
  const str = `See ${groupName} methods that will modify the original ${groupName}`;
  const result = methodGroup.filter(el => el.mod === true);
  renderArrayList(result, str);
}

//show all methods that do not  modify the original array
function showNonModifiers() {
  const str = `See ${groupName} methods that will not modify the original ${groupName}`;
  const result = methodGroup.filter(el => el.mod === false);
  renderArrayList(result, str);
}

//update the displays when menu btns are clicked
function updateStyles(className) {
  if (className === 'home') {
    homeCategories.style.display = 'flex';
    centerArray.style.display = 'none';
    centerString.style.display = 'none';
    centerMath.style.display = 'none';
    usagePage.style.display = 'none';
  }

  if (className === 'usage') {
    if (groupName === '') {
      usagePage.style.display = 'block';
      homeCategories.style.display = 'none';
      usageBTNs.style.display = 'none';
      usageMsg.textContent =
        'No result 💥💥: Go back to the Home Page and select a category first';
      return;
    }

    usageMsg.textContent = `Some ${groupName} methods modify the original ${groupName}, but some do not.`;
    ParentEl.innerHTML = '';
    usageBTNs.style.display = 'flex';
    btnModify.textContent = `These ${groupName} methods modify the original ${groupName}`;
    btnNotModify.textContent = `These ${groupName} methods will not modify the original ${groupName}`;
    MessageEl.textContent = '';
    centerArray.style.display = 'none';
    centerString.style.display = 'none';
    centerMath.style.display = 'none';
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
      methodGroup = arrayMethods;
      groupName = 'Array';
      usageMsg.textContent = `Some ${groupName} methods modify the original ${groupName}, but some do not.`;
      centerArray.style.opacity = 1;
      homeCategories.style.display = 'none';
      usagePage.style.display = 'none';
      centerArray.style.display = 'grid';
      centerArray.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
      centerArray.style.gridTemplateRows = '100px 100px';
    }

    // If the String methods button is clicked
    if (btn.classList.contains('string--methods')) {
      methodGroup = stringMethods;
      groupName = 'String';
      usageMsg.textContent = `Some ${groupName} methods modify the original ${groupName}, but some do not.`;
      centerString.style.opacity = 1;
      centerString.style.display = 'grid';
      centerString.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
      centerString.style.gridTemplateRows = '100px 100px';
      homeCategories.style.display = 'none';
    }
    if (btn.classList.contains('math--methods')) {
      methodGroup = mathMethods;
      groupName = 'Math';
      usageMsg.textContent = `Some ${groupName} methods modify the original ${groupName}, but some do not.`;
      centerMath.style.opacity = 1;
      centerMath.style.display = 'grid';
      centerMath.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
      centerMath.style.gridTemplateRows = '100px 100px';
      homeCategories.style.display = 'none';
      usagePage.style.display = 'none';
    }
  });

//Using Event Propagation to add event listener to all array buttons
centerParent.addEventListener('click', function (e) {
  const btn = e.target.textContent;
  methodGroup.forEach(function (el) {
    if (el.name === btn)
      openModal(el.name, el.function, el.reference, el.mod, el.returnValue);
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
  if (methodGroup === '') return;
  if (btn.classList.contains('btn--modify')) showModifiers();
  if (btn.classList.contains('btn--non-modify')) showNonModifiers();
});

ParentEl.addEventListener('click', function (e) {
  const btn = e.target.closest('.one--method');
  if (!btn) return;
  const found = arrayMethods.find(el => el.name === btn.textContent);
  openModal(
    found.name,
    found.function,
    found.reference,
    found.mod,
    found.returnValue
  );
});
