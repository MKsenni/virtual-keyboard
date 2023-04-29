import * as KeyButton from './keyButton.js';

const cssClasses = {
  KEYBOARD: 'keyboard',
  TEXTAREA: 'textarea',
  WRAPPER: 'keyboard__wrapper',
  ROW: 'keyboard__row',
  KEY: 'key',
  ENG: 'eng',
  RUS: 'rus',
  DOWN: 'pressDown',
  UP: 'pressUp',
  CAPS: 'caps',
  SHIFTCAPS: 'shiftCaps',
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

    const spanEng = KeyButton.createSpanEng(buttonFirstRow);
    const pressDown =  KeyButton.createPress(cssClasses.DOWN);
    spanEng.append(pressDown);
    KeyButton.createVariationsPressHidden(spanEng);
    pressDown.textContent = KeyButton.firstRow[i];

    const spanRus = KeyButton.createSpanRus(buttonFirstRow);
    spanRus.classList.add('hidden');
    const pressDownRus =  KeyButton.createPress(cssClasses.DOWN);
    spanRus.append(pressDownRus);
    KeyButton.createVariationsPressHidden(spanRus);
    pressDownRus.textContent = KeyButton.firstRow[i];
  }

  for (let i = 0; i < 15; i += 1) {
    const buttonSecondRow  = createElement('button', cssClasses.KEY);
    rowArr[1].append(buttonSecondRow);

    const spanEng = KeyButton.createSpanEng(buttonSecondRow);
    const pressDown =  KeyButton.createPress(cssClasses.DOWN)
    spanEng.append(pressDown);

    KeyButton.createVariationsPressHidden(spanEng);

    pressDown.textContent = KeyButton.secondRow[i];
  }
  
  for (let i = 0; i < 14; i += 1) {
    const buttonThirdRow  = createElement('button', cssClasses.KEY);
    rowArr[2].append(buttonThirdRow);
    const spanEng = KeyButton.createSpanEng(buttonThirdRow);
    const pressDown =  KeyButton.createPress(cssClasses.DOWN)
    spanEng.append(pressDown);

    KeyButton.createVariationsPressHidden(spanEng);

    pressDown.textContent = KeyButton.thirdRow[i];
  }
  
  for (let i = 0; i < 13; i += 1) {
    const buttonFourRow  = createElement('button', cssClasses.KEY);
    rowArr[3].append(buttonFourRow);
    const spanEng = KeyButton.createSpanEng(buttonFourRow);
    const pressDown =  KeyButton.createPress(cssClasses.DOWN)
    spanEng.append(pressDown);

    KeyButton.createVariationsPressHidden(spanEng);

    pressDown.textContent = KeyButton.fourRow[i];
  }
  
  for (let i = 0; i < 9; i += 1) {
    const buttonFiveRow  = createElement('button', cssClasses.KEY);
    rowArr[4].append(buttonFiveRow);
    const spanEng = KeyButton.createSpanEng(buttonFiveRow);
    const pressDown =  KeyButton.createPress(cssClasses.DOWN)
    spanEng.append(pressDown);

    KeyButton.createVariationsPressHidden(spanEng);

    pressDown.textContent = KeyButton.fiveRow[i];
  }
  
  return keyboard;
}

export const createElement = (tagName, className) => {
  const element = document.createElement(tagName);
  element.classList.add(className);
  return element;
}
