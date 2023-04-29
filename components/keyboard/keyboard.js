import * as KeyButton from './keyButton.js';

const cssClasses = {
  KEYBOARD: 'keyboard',
  TEXTAREA: 'textarea',
  WRAPPER: 'keyboard__wrapper',
  ROW: 'keyboard__row',
  KEY: 'key',
}

export const createKeyboard = (keys) => {
  if (!Array.isArray(keys)) {
    throw TypeError(console.log('EROR'));
  }

  const keyboard  = createElement('section', cssClasses.KEYBOARD);
  
  const textArea  = createElement('textarea', cssClasses.TEXTAREA);
  keyboard.append(textArea);
  
  const wrapper  = createElement('div', cssClasses.WRAPPER);
  keyboard.append(wrapper);
  
  let rowArr = new Array();
  for (let i = 0; i < 5; i += 1) {
    const row = createElement('div', cssClasses.ROW);
    wrapper.append(row);
    rowArr.push(row);
  }
  
  for (let i = 0; i < 14; i += 1) {
    const buttonFirstRow  = createElement('button', cssClasses.KEY);
    rowArr[0].append(buttonFirstRow);
    buttonFirstRow.textContent = KeyButton.firstRow[i];
  }

  for (let i = 0; i < 15; i += 1) {
    const buttonSecondRow  = createElement('button', cssClasses.KEY);
    rowArr[1].append(buttonSecondRow);
    buttonSecondRow.textContent = KeyButton.secondRow[i];
  }
  
  for (let i = 0; i < 14; i += 1) {
    const buttonThirdRow  = createElement('button', cssClasses.KEY);
    rowArr[2].append(buttonThirdRow);
    buttonThirdRow.textContent = KeyButton.thirdRow[i];
  }
  
  for (let i = 0; i < 13; i += 1) {
    const buttonFourRow  = createElement('button', cssClasses.KEY);
    rowArr[3].append(buttonFourRow);
    buttonFourRow.textContent = KeyButton.fourRow[i];
  }
  
  for (let i = 0; i < 9; i += 1) {
    const buttonFiveRow  = createElement('button', cssClasses.KEY);
    rowArr[4].append(buttonFiveRow);
    buttonFiveRow.textContent = KeyButton.fiveRow[i];
  }
  
  return keyboard;
}

const createElement = (tagName, className) => {
  const element = document.createElement(tagName);
  element.classList.add(className);
  return element;
}
