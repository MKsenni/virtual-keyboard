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
    throw TypeError(console.log('ERROR'));
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

  let arrLettersEngDown = new Array();
  let arrLettersEngUp = new Array();
  let arrLettersEngCaps = new Array();
  let arrLettersRusDown = new Array();
  let arrLettersRusUp = new Array();
  // let specialsSymbols = new Array();
  
  for (let i = 0; i < 14; i += 1) {
    const buttonFirstRow  = createElement('button', cssClasses.KEY);
    rowArr[0].append(buttonFirstRow);

    const spanEng = KeyButton.createSpanLanguage(buttonFirstRow, cssClasses.ENG);

    const pressDown =  createElement('span', cssClasses.DOWN);
    arrLettersEngDown.push(pressDown);
    pressDown.textContent = KeyButton.firstRow[i];

    const pressUp =  createElement('span', cssClasses.UP);
    arrLettersEngUp.push(pressUp);
    pressUp.classList.add('hidden');
    pressUp.textContent = KeyButton.firstRowUp[i];

    const caps = createElement('span', cssClasses.CAPS);
    caps.classList.add('hidden');
    arrLettersEngCaps.push(caps);
    caps.textContent = KeyButton.firstRowCaps[i];

    const shiftCaps = createElement('span', cssClasses.SHIFTCAPS);
    shiftCaps.classList.add('hidden');
    shiftCaps.textContent = KeyButton.firstRowShiftCaps[i];

    spanEng.append(pressDown, pressUp, caps, shiftCaps);

    const spanRus = KeyButton.createSpanLanguage(buttonFirstRow, cssClasses.RUS);
    spanRus.classList.add('hidden');

    const pressDownRus =  createElement('span', cssClasses.DOWN);
    arrLettersRusDown.push(pressDownRus);
    pressDownRus.textContent = KeyButton.firstRowRus[i];

    const pressUpRus =  createElement('span', cssClasses.UP);
    pressUpRus.classList.add('hidden');
    arrLettersRusUp.push(pressUpRus);
    pressUpRus.textContent = KeyButton.firstRowUpRus[i];

    const capsRus = createElement('span', cssClasses.CAPS);
    capsRus.classList.add('hidden');
    capsRus.textContent = KeyButton.firstRowCapsRus[i];

    const shiftCapsRus = createElement('span', cssClasses.SHIFTCAPS);
    shiftCapsRus.classList.add('hidden');
    shiftCapsRus.textContent = KeyButton.firstRowShiftCapsRus[i];

    spanRus.append(pressDownRus, pressUpRus, capsRus, shiftCapsRus);

  }

  for (let i = 0; i < 15; i += 1) {
    const buttonSecondRow  = createElement('button', cssClasses.KEY);
    rowArr[1].append(buttonSecondRow);

    const spanEng = KeyButton.createSpanLanguage(buttonSecondRow, cssClasses.ENG);
    const pressDown =  createElement('span', cssClasses.DOWN);
    arrLettersEngDown.push(pressDown);
    pressDown.textContent = KeyButton.secondRow[i];

    const pressUp =  createElement('span', cssClasses.UP);
    arrLettersEngUp.push(pressUp);
    pressUp.classList.add('hidden');
    pressUp.textContent = KeyButton.secondRowUp[i];

    const caps = createElement('span', cssClasses.CAPS);
    caps.classList.add('hidden');
    arrLettersEngCaps.push(caps);
    caps.textContent = KeyButton.secondRowCaps[i];

    const shiftCaps = createElement('span', cssClasses.SHIFTCAPS);
    shiftCaps.classList.add('hidden');
    shiftCaps.textContent = KeyButton.secondRowShiftCaps[i];

    spanEng.append(pressDown, pressUp, caps, shiftCaps);

    const spanRus = KeyButton.createSpanLanguage(buttonSecondRow, cssClasses.RUS);
    spanRus.classList.add('hidden');

    const pressDownRus =  createElement('span', cssClasses.DOWN);
    arrLettersRusDown.push(pressDownRus);
    pressDownRus.textContent = KeyButton.secondRowRus[i];

    const pressUpRus =  createElement('span', cssClasses.UP);
    pressUpRus.classList.add('hidden');
    arrLettersRusUp.push(pressUpRus);
    pressUpRus.textContent = KeyButton.secondRowUpRus[i];

    const capsRus = createElement('span', cssClasses.CAPS);
    capsRus.classList.add('hidden');
    capsRus.textContent = KeyButton.secondRowCapsRus[i];

    const shiftCapsRus = createElement('span', cssClasses.SHIFTCAPS);
    shiftCapsRus.classList.add('hidden');
    shiftCapsRus.textContent = KeyButton.secondRowShiftCapsRus[i];

    spanRus.append(pressDownRus, pressUpRus, capsRus, shiftCapsRus);
  }
  
  for (let i = 0; i < 14; i += 1) {
    const buttonThirdRow  = createElement('button', cssClasses.KEY);
    rowArr[2].append(buttonThirdRow);
    const spanEng = KeyButton.createSpanLanguage(buttonThirdRow, cssClasses.ENG);
    const pressDown =  createElement('span', cssClasses.DOWN);
    arrLettersEngDown.push(pressDown);
    pressDown.textContent = KeyButton.thirdRow[i];

    const pressUp =  createElement('span', cssClasses.UP);
    arrLettersEngUp.push(pressUp);
    pressUp.classList.add('hidden');
    pressUp.textContent = KeyButton.thirdRowUp[i];

    const caps = createElement('span', cssClasses.CAPS);
    caps.classList.add('hidden');
    arrLettersEngCaps.push(caps);
    caps.textContent = KeyButton.thirdRowCaps[i];

    const shiftCaps = createElement('span', cssClasses.SHIFTCAPS);
    shiftCaps.classList.add('hidden');
    shiftCaps.textContent = KeyButton.thirdRowShiftCaps[i];

    spanEng.append(pressDown, pressUp, caps, shiftCaps);

    const spanRus = KeyButton.createSpanLanguage(buttonThirdRow, cssClasses.RUS);
    spanRus.classList.add('hidden');

    const pressDownRus =  createElement('span', cssClasses.DOWN);
    arrLettersRusDown.push(pressDownRus);
    pressDownRus.textContent = KeyButton.thirdRowRus[i];

    const pressUpRus =  createElement('span', cssClasses.UP);
    pressUpRus.classList.add('hidden');
    arrLettersRusUp.push(pressUpRus);
    pressUpRus.textContent = KeyButton.thirdRowUpRus[i];

    const capsRus = createElement('span', cssClasses.CAPS);
    capsRus.classList.add('hidden');
    capsRus.textContent = KeyButton.thirdRowCapsRus[i];

    const shiftCapsRus = createElement('span', cssClasses.SHIFTCAPS);
    shiftCapsRus.classList.add('hidden');
    shiftCapsRus.textContent = KeyButton.thirdRowShiftCapsRus[i];

    spanRus.append(pressDownRus, pressUpRus, capsRus, shiftCapsRus);
  }
  
  for (let i = 0; i < 13; i += 1) {
    const buttonFourRow  = createElement('button', cssClasses.KEY);
    rowArr[3].append(buttonFourRow);
    const spanEng = KeyButton.createSpanLanguage(buttonFourRow, cssClasses.ENG);
    const pressDown =  createElement('span', cssClasses.DOWN);
    arrLettersEngDown.push(pressDown);
    pressDown.textContent = KeyButton.fourRow[i];

    const pressUp =  createElement('span', cssClasses.UP);
    arrLettersEngUp.push(pressUp);
    pressUp.classList.add('hidden');
    pressUp.textContent = KeyButton.fourRowUp[i];

    const caps = createElement('span', cssClasses.CAPS);
    caps.classList.add('hidden');
    arrLettersEngCaps.push(caps);
    caps.textContent = KeyButton.fourRowCaps[i];

    const shiftCaps = createElement('span', cssClasses.SHIFTCAPS);
    shiftCaps.classList.add('hidden');
    shiftCaps.textContent = KeyButton.fourRowShiftCaps[i];

    spanEng.append(pressDown, pressUp, caps, shiftCaps);

    const spanRus = KeyButton.createSpanLanguage(buttonFourRow, cssClasses.RUS);
    spanRus.classList.add('hidden');

    const pressDownRus =  createElement('span', cssClasses.DOWN);
    arrLettersRusDown.push(pressDownRus);
    pressDownRus.textContent = KeyButton.fourRowRus[i];

    const pressUpRus =  createElement('span', cssClasses.UP);
    pressUpRus.classList.add('hidden');
    arrLettersRusUp.push(pressUpRus);
    pressUpRus.textContent = KeyButton.fourRowUpRus[i];

    const capsRus = createElement('span', cssClasses.CAPS);
    capsRus.classList.add('hidden');
    capsRus.textContent = KeyButton.fourRowCapsRus[i];

    const shiftCapsRus = createElement('span', cssClasses.SHIFTCAPS);
    shiftCapsRus.classList.add('hidden');
    shiftCapsRus.textContent = KeyButton.fourRowShiftCapsRus[i];

    spanRus.append(pressDownRus, pressUpRus, capsRus, shiftCapsRus);

    
    
  }
  console.log(keys[1][0].eng.pressUp);
  console.log( typeof Array.from(rowArr[1].childNodes));
  
  for (let i = 0; i < 9; i += 1) {
    const buttonFiveRow  = createElement('button', cssClasses.KEY);
    rowArr[4].append(buttonFiveRow);
    const spanEng = KeyButton.createSpanLanguage(buttonFiveRow, cssClasses.ENG);
    const pressDown =  createElement('span', cssClasses.DOWN);
    arrLettersEngDown.push(pressDown);
    pressDown.textContent = KeyButton.fiveRow[i];

    const pressUp =  createElement('span', cssClasses.UP);
    arrLettersEngUp.push(pressUp);
    pressUp.classList.add('hidden');
    pressUp.textContent = KeyButton.fiveRowUp[i];

    const caps = createElement('span', cssClasses.CAPS);
    caps.classList.add('hidden');
    arrLettersEngCaps.push(caps);
    caps.textContent = KeyButton.fiveRowCaps[i];

    const shiftCaps = createElement('span', cssClasses.SHIFTCAPS);
    shiftCaps.classList.add('hidden');
    shiftCaps.textContent = KeyButton.fiveRowShiftCaps[i];

    spanEng.append(pressDown, pressUp, caps, shiftCaps);

    const spanRus = KeyButton.createSpanLanguage(buttonFiveRow, cssClasses.RUS);
    spanRus.classList.add('hidden');

    const pressDownRus =  createElement('span', cssClasses.DOWN);
    arrLettersRusDown.push(pressDownRus);
    pressDownRus.textContent = KeyButton.fiveRowRus[i];

    const pressUpRus =  createElement('span', cssClasses.UP);
    pressUpRus.classList.add('hidden');
    arrLettersRusUp.push(pressUpRus);
    pressUpRus.textContent = KeyButton.fiveRowUpRus[i];

    const capsRus = createElement('span', cssClasses.CAPS);
    capsRus.classList.add('hidden');
    capsRus.textContent = KeyButton.fiveRowCapsRus[i];

    const shiftCapsRus = createElement('span', cssClasses.SHIFTCAPS);
    shiftCapsRus.classList.add('hidden');
    shiftCapsRus.textContent = KeyButton.fiveRowShiftCapsRus[i];

    spanRus.append(pressDownRus, pressUpRus, capsRus, shiftCapsRus);
  }

  rowArr[3].firstChild.addEventListener('mousedown', () => {
    for (let i = 0; i < arrLettersEngUp.length; i += 1) {
      arrLettersEngUp[i].classList.remove('hidden');
    }
    for (let i = 0; i < arrLettersEngDown.length; i += 1) {
      arrLettersEngDown[i].classList.add('hidden');
    }
  })

  rowArr[3].lastChild.addEventListener('mousedown', () => {
    for (let i = 0; i < arrLettersEngUp.length; i += 1) {
      arrLettersEngUp[i].classList.remove('hidden');
    }
    for (let i = 0; i < arrLettersEngDown.length; i += 1) {
      arrLettersEngDown[i].classList.add('hidden');
    }
  })

  rowArr[3].firstChild.addEventListener('mouseup', () => {
    for (let i = 0; i < arrLettersEngUp.length; i += 1) {
      arrLettersEngUp[i].classList.add('hidden');
    }
    for (let i = 0; i < arrLettersEngDown.length; i += 1) {
      arrLettersEngDown[i].classList.remove('hidden');
    }
  })

  rowArr[3].lastChild.addEventListener('mouseup', () => {
    for (let i = 0; i < arrLettersEngUp.length; i += 1) {
      arrLettersEngUp[i].classList.add('hidden');
    }
    for (let i = 0; i < arrLettersEngDown.length; i += 1) {
      arrLettersEngDown[i].classList.remove('hidden');
    }
  })

  rowArr[2].firstChild.addEventListener('click', () => {
    for (let i = 0; i < arrLettersEngCaps.length; i += 1) {
      arrLettersEngCaps[i].classList.toggle('hidden');
    }
    for (let i = 0; i < arrLettersEngDown.length; i += 1) {
      arrLettersEngDown[i].classList.toggle('hidden');
    } 
  })

  
  document.addEventListener('keydown', (event) => {
    event.preventDefault();
    // console.log('hm');
    if (event.altKey && event.ctrlKey) {
      console.log('yeeeeeah');
    }

  })

  document.addEventListener('keydown', (event) => {
    event.preventDefault();
    if (event.code == 'CapsLock') {
      for (let i = 0; i < arrLettersEngCaps.length; i += 1) {
        arrLettersEngCaps[i].classList.toggle('hidden');
      }
      for (let i = 0; i < arrLettersEngDown.length; i += 1) {
        arrLettersEngDown[i].classList.toggle('hidden');
      } 
    }
  })

  return keyboard;
}

export const createElement = (tagName, className) => {
  const element = document.createElement(tagName);
  element.classList.add(className);
  return element;
}