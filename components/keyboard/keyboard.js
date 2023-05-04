import * as KeyButton from './keyButton.js';

const cssClasses = {
  KEYBOARD: 'keyboard',
  TITLE: 'title',
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
  DESCR: 'descr',
  LANG: 'lang',
};

export const createElement = (tagName, className) => {
  const element = document.createElement(tagName);
  element.classList.add(className);
  return element;
};

export const createKeyboard = (keys) => {
  if (!Array.isArray(keys)) {
    throw TypeError('ERROR');
  }

  const highlight = (button) => {
    button.classList.add('highlight');
  };

  const deleteHighlight = (button) => {
    if (button.classList.contains('highlight')) {
      button.classList.remove('highlight');
    }
  };

  const keyboard = createElement('section', cssClasses.KEYBOARD);

  const title = createElement('h1', cssClasses.TITLE);
  keyboard.append(title);
  title.textContent = 'RSS Виртуальная клавиатура';

  const textArea = createElement('textarea', cssClasses.TEXTAREA);
  keyboard.append(textArea);
  textArea.setAttribute('autofocus', '');

  const wrapper = createElement('div', cssClasses.WRAPPER);
  keyboard.append(wrapper);

  const description = createElement('p', cssClasses.DESCR);
  keyboard.append(description);
  description.textContent = 'Клавиатура создана в операционной системе Windows';

  const lang = createElement('p', cssClasses.LANG);
  description.append(lang);
  lang.textContent = 'Для переключения языка комбинация: ctrl + alt';

  const rowArr = [];
  for (let i = 0; i < 5; i += 1) {
    const row = createElement('div', cssClasses.ROW);
    wrapper.append(row);
    rowArr.push(row);
  }

  const arrButtons = [];
  const arrButtonsRows = [];
  const arrButtonsFirstRow = [];
  arrButtonsRows.push(arrButtonsFirstRow);
  const arrButtonsSecondRow = [];
  arrButtonsRows.push(arrButtonsSecondRow);
  const arrButtonsThirdRow = [];
  arrButtonsRows.push(arrButtonsThirdRow);
  const arrButtonsFourRow = [];
  arrButtonsRows.push(arrButtonsFourRow);
  const arrButtonsFivetRow = [];
  arrButtonsRows.push(arrButtonsFivetRow);

  const arrSpanEng = [];
  const arrLettersEngDown = [];
  const arrLettersEngUp = [];
  const arrLettersEngCaps = [];
  const arrLettersEngShiftCaps = [];

  const arrSpanRus = [];
  const arrLettersRusDown = [];
  const arrLettersRusUp = [];
  const arrLettersRusCaps = [];
  const arrLettersRusShiftCaps = [];

  // const specialsSymbols = [];

  const changeLanguage = (event) => {
    if (event.altKey && event.ctrlKey) {
      event.preventDefault();
      for (let i = 0; i < arrSpanEng.length; i += 1) {
        arrSpanEng[i].classList.toggle('hidden');
        arrSpanRus[i].classList.toggle('hidden');
      }
    }
  };

  for (let i = 0; i < 14; i += 1) {
    const buttonFirstRow = createElement('button', cssClasses.KEY);
    arrButtonsFirstRow.push(buttonFirstRow);
    arrButtons.push(buttonFirstRow);
    rowArr[0].append(buttonFirstRow);

    const spanEng = KeyButton.createSpanLanguage(buttonFirstRow, cssClasses.ENG);
    arrSpanEng.push(spanEng);

    const pressDown = createElement('span', cssClasses.DOWN);
    arrLettersEngDown.push(pressDown);
    pressDown.textContent = KeyButton.firstRow[i];

    const pressUp = createElement('span', cssClasses.UP);
    arrLettersEngUp.push(pressUp);
    pressUp.classList.add('hidden');
    pressUp.textContent = KeyButton.firstRowUp[i];

    const caps = createElement('span', cssClasses.CAPS);
    caps.classList.add('hidden');
    arrLettersEngCaps.push(caps);
    caps.textContent = KeyButton.firstRowCaps[i];

    const shiftCaps = createElement('span', cssClasses.SHIFTCAPS);
    shiftCaps.classList.add('hidden');
    arrLettersEngShiftCaps.push(shiftCaps);
    shiftCaps.textContent = KeyButton.firstRowShiftCaps[i];

    spanEng.append(pressDown, pressUp, caps, shiftCaps);

    const spanRus = KeyButton.createSpanLanguage(buttonFirstRow, cssClasses.RUS);
    spanRus.classList.add('hidden');
    arrSpanRus.push(spanRus);

    const pressDownRus = createElement('span', cssClasses.DOWN);
    arrLettersRusDown.push(pressDownRus);
    pressDownRus.textContent = KeyButton.firstRowRus[i];

    const pressUpRus = createElement('span', cssClasses.UP);
    pressUpRus.classList.add('hidden');
    arrLettersRusUp.push(pressUpRus);
    pressUpRus.textContent = KeyButton.firstRowUpRus[i];

    const capsRus = createElement('span', cssClasses.CAPS);
    capsRus.classList.add('hidden');
    arrLettersRusCaps.push(capsRus);
    capsRus.textContent = KeyButton.firstRowCapsRus[i];

    const shiftCapsRus = createElement('span', cssClasses.SHIFTCAPS);
    shiftCapsRus.classList.add('hidden');
    arrLettersRusShiftCaps.push(shiftCapsRus);
    shiftCapsRus.textContent = KeyButton.firstRowShiftCapsRus[i];

    spanRus.append(pressDownRus, pressUpRus, capsRus, shiftCapsRus);
  }

  for (let i = 0; i < 15; i += 1) {
    const buttonSecondRow = createElement('button', cssClasses.KEY);
    arrButtons.push(buttonSecondRow);
    arrButtonsSecondRow.push(buttonSecondRow);
    rowArr[1].append(buttonSecondRow);

    const spanEng = KeyButton.createSpanLanguage(buttonSecondRow, cssClasses.ENG);
    arrSpanEng.push(spanEng);
    const pressDown = createElement('span', cssClasses.DOWN);
    arrLettersEngDown.push(pressDown);
    pressDown.textContent = KeyButton.secondRow[i];

    const pressUp = createElement('span', cssClasses.UP);
    arrLettersEngUp.push(pressUp);
    pressUp.classList.add('hidden');
    pressUp.textContent = KeyButton.secondRowUp[i];

    const caps = createElement('span', cssClasses.CAPS);
    caps.classList.add('hidden');
    arrLettersEngCaps.push(caps);
    caps.textContent = KeyButton.secondRowCaps[i];

    const shiftCaps = createElement('span', cssClasses.SHIFTCAPS);
    shiftCaps.classList.add('hidden');
    arrLettersEngShiftCaps.push(shiftCaps);
    shiftCaps.textContent = KeyButton.secondRowShiftCaps[i];

    spanEng.append(pressDown, pressUp, caps, shiftCaps);

    const spanRus = KeyButton.createSpanLanguage(buttonSecondRow, cssClasses.RUS);
    spanRus.classList.add('hidden');
    arrSpanRus.push(spanRus);

    const pressDownRus = createElement('span', cssClasses.DOWN);
    arrLettersRusDown.push(pressDownRus);
    pressDownRus.textContent = KeyButton.secondRowRus[i];

    const pressUpRus = createElement('span', cssClasses.UP);
    pressUpRus.classList.add('hidden');
    arrLettersRusUp.push(pressUpRus);
    pressUpRus.textContent = KeyButton.secondRowUpRus[i];

    const capsRus = createElement('span', cssClasses.CAPS);
    capsRus.classList.add('hidden');
    arrLettersRusCaps.push(capsRus);
    capsRus.textContent = KeyButton.secondRowCapsRus[i];

    const shiftCapsRus = createElement('span', cssClasses.SHIFTCAPS);
    shiftCapsRus.classList.add('hidden');
    arrLettersRusShiftCaps.push(shiftCapsRus);
    shiftCapsRus.textContent = KeyButton.secondRowShiftCapsRus[i];

    spanRus.append(pressDownRus, pressUpRus, capsRus, shiftCapsRus);
  }

  for (let i = 0; i < 13; i += 1) {
    const buttonThirdRow = createElement('button', cssClasses.KEY);
    arrButtons.push(buttonThirdRow);
    arrButtonsThirdRow.push(buttonThirdRow);
    rowArr[2].append(buttonThirdRow);
    const spanEng = KeyButton.createSpanLanguage(buttonThirdRow, cssClasses.ENG);
    arrSpanEng.push(spanEng);
    const pressDown = createElement('span', cssClasses.DOWN);
    arrLettersEngDown.push(pressDown);
    pressDown.textContent = KeyButton.thirdRow[i];

    const pressUp = createElement('span', cssClasses.UP);
    arrLettersEngUp.push(pressUp);
    pressUp.classList.add('hidden');
    pressUp.textContent = KeyButton.thirdRowUp[i];

    const caps = createElement('span', cssClasses.CAPS);
    caps.classList.add('hidden');
    arrLettersEngCaps.push(caps);
    caps.textContent = KeyButton.thirdRowCaps[i];

    const shiftCaps = createElement('span', cssClasses.SHIFTCAPS);
    shiftCaps.classList.add('hidden');
    arrLettersEngShiftCaps.push(shiftCaps);
    shiftCaps.textContent = KeyButton.thirdRowShiftCaps[i];

    spanEng.append(pressDown, pressUp, caps, shiftCaps);

    const spanRus = KeyButton.createSpanLanguage(buttonThirdRow, cssClasses.RUS);
    spanRus.classList.add('hidden');
    arrSpanRus.push(spanRus);

    const pressDownRus = createElement('span', cssClasses.DOWN);
    arrLettersRusDown.push(pressDownRus);
    pressDownRus.textContent = KeyButton.thirdRowRus[i];

    const pressUpRus = createElement('span', cssClasses.UP);
    pressUpRus.classList.add('hidden');
    arrLettersRusUp.push(pressUpRus);
    pressUpRus.textContent = KeyButton.thirdRowUpRus[i];

    const capsRus = createElement('span', cssClasses.CAPS);
    capsRus.classList.add('hidden');
    arrLettersRusCaps.push(capsRus);
    capsRus.textContent = KeyButton.thirdRowCapsRus[i];

    const shiftCapsRus = createElement('span', cssClasses.SHIFTCAPS);
    shiftCapsRus.classList.add('hidden');
    arrLettersRusShiftCaps.push(shiftCapsRus);
    shiftCapsRus.textContent = KeyButton.thirdRowShiftCapsRus[i];

    spanRus.append(pressDownRus, pressUpRus, capsRus, shiftCapsRus);
  }

  for (let i = 0; i < 13; i += 1) {
    const buttonFourRow = createElement('button', cssClasses.KEY);
    arrButtons.push(buttonFourRow);
    arrButtonsFourRow.push(buttonFourRow);
    rowArr[3].append(buttonFourRow);
    const spanEng = KeyButton.createSpanLanguage(buttonFourRow, cssClasses.ENG);
    arrSpanEng.push(spanEng);
    const pressDown = createElement('span', cssClasses.DOWN);
    arrLettersEngDown.push(pressDown);
    pressDown.textContent = KeyButton.fourRow[i];

    const pressUp = createElement('span', cssClasses.UP);
    arrLettersEngUp.push(pressUp);
    pressUp.classList.add('hidden');
    pressUp.textContent = KeyButton.fourRowUp[i];

    const caps = createElement('span', cssClasses.CAPS);
    caps.classList.add('hidden');
    arrLettersEngCaps.push(caps);
    caps.textContent = KeyButton.fourRowCaps[i];

    const shiftCaps = createElement('span', cssClasses.SHIFTCAPS);
    shiftCaps.classList.add('hidden');
    arrLettersEngShiftCaps.push(shiftCaps);
    shiftCaps.textContent = KeyButton.fourRowShiftCaps[i];

    spanEng.append(pressDown, pressUp, caps, shiftCaps);

    const spanRus = KeyButton.createSpanLanguage(buttonFourRow, cssClasses.RUS);
    spanRus.classList.add('hidden');
    arrSpanRus.push(spanRus);

    const pressDownRus = createElement('span', cssClasses.DOWN);
    arrLettersRusDown.push(pressDownRus);
    pressDownRus.textContent = KeyButton.fourRowRus[i];

    const pressUpRus = createElement('span', cssClasses.UP);
    pressUpRus.classList.add('hidden');
    arrLettersRusUp.push(pressUpRus);
    pressUpRus.textContent = KeyButton.fourRowUpRus[i];

    const capsRus = createElement('span', cssClasses.CAPS);
    capsRus.classList.add('hidden');
    arrLettersRusCaps.push(capsRus);
    capsRus.textContent = KeyButton.fourRowCapsRus[i];

    const shiftCapsRus = createElement('span', cssClasses.SHIFTCAPS);
    shiftCapsRus.classList.add('hidden');
    arrLettersRusShiftCaps.push(shiftCapsRus);
    shiftCapsRus.textContent = KeyButton.fourRowShiftCapsRus[i];

    spanRus.append(pressDownRus, pressUpRus, capsRus, shiftCapsRus);
  }

  for (let i = 0; i < 9; i += 1) {
    const buttonFiveRow = createElement('button', cssClasses.KEY);
    arrButtons.push(buttonFiveRow);
    arrButtonsFivetRow.push(buttonFiveRow);
    rowArr[4].append(buttonFiveRow);
    const spanEng = KeyButton.createSpanLanguage(buttonFiveRow, cssClasses.ENG);
    arrSpanEng.push(spanEng);
    const pressDown = createElement('span', cssClasses.DOWN);
    arrLettersEngDown.push(pressDown);
    pressDown.textContent = KeyButton.fiveRow[i];

    const pressUp = createElement('span', cssClasses.UP);
    arrLettersEngUp.push(pressUp);
    pressUp.classList.add('hidden');
    pressUp.textContent = KeyButton.fiveRowUp[i];

    const caps = createElement('span', cssClasses.CAPS);
    caps.classList.add('hidden');
    arrLettersEngCaps.push(caps);
    caps.textContent = KeyButton.fiveRowCaps[i];

    const shiftCaps = createElement('span', cssClasses.SHIFTCAPS);
    shiftCaps.classList.add('hidden');
    arrLettersEngShiftCaps.push(shiftCaps);
    shiftCaps.textContent = KeyButton.fiveRowShiftCaps[i];

    spanEng.append(pressDown, pressUp, caps, shiftCaps);

    const spanRus = KeyButton.createSpanLanguage(buttonFiveRow, cssClasses.RUS);
    spanRus.classList.add('hidden');
    arrSpanRus.push(spanRus);

    const pressDownRus = createElement('span', cssClasses.DOWN);
    arrLettersRusDown.push(pressDownRus);
    pressDownRus.textContent = KeyButton.fiveRowRus[i];

    const pressUpRus = createElement('span', cssClasses.UP);
    pressUpRus.classList.add('hidden');
    arrLettersRusUp.push(pressUpRus);
    pressUpRus.textContent = KeyButton.fiveRowUpRus[i];

    const capsRus = createElement('span', cssClasses.CAPS);
    capsRus.classList.add('hidden');
    arrLettersRusCaps.push(capsRus);
    capsRus.textContent = KeyButton.fiveRowCapsRus[i];

    const shiftCapsRus = createElement('span', cssClasses.SHIFTCAPS);
    shiftCapsRus.classList.add('hidden');
    arrLettersRusShiftCaps.push(shiftCapsRus);
    shiftCapsRus.textContent = KeyButton.fiveRowShiftCapsRus[i];

    spanRus.append(pressDownRus, pressUpRus, capsRus, shiftCapsRus);
  }
  // SHIFT to mouse
  rowArr[3].firstChild.addEventListener('mousedown', () => {
    for (let i = 0; i < arrLettersEngUp.length; i += 1) {
      if (!arrSpanEng[i].classList.contains('hidden')) {
        if (arrLettersEngCaps[i].classList.contains('hidden')) {
          arrLettersEngDown[i].classList.add('hidden');
          arrLettersEngUp[i].classList.remove('hidden');
        } else if (!(arrLettersEngCaps[i].classList.contains('hidden'))) {
          arrLettersEngCaps[i].classList.add('hidden');
          arrLettersEngDown[i].classList.add('hidden');
          arrLettersEngShiftCaps[i].classList.remove('hidden');
        }
      } else if (!arrSpanRus[i].classList.contains('hidden')) {
        if (arrLettersRusCaps[i].classList.contains('hidden')) {
          arrLettersRusDown[i].classList.add('hidden');
          arrLettersRusUp[i].classList.remove('hidden');
        } else if (!(arrLettersRusCaps[i].classList.contains('hidden'))) {
          arrLettersRusCaps[i].classList.add('hidden');
          arrLettersRusDown[i].classList.add('hidden');
          arrLettersRusShiftCaps[i].classList.remove('hidden');
        }
      }
    }
  });
  // SHIFT to mouse
  rowArr[3].firstChild.addEventListener('mouseup', () => {
    for (let i = 0; i < arrLettersEngUp.length; i += 1) {
      if (!arrSpanEng[i].classList.contains('hidden')) {
        if (!(arrLettersEngShiftCaps[i].classList.contains('hidden'))) {
          arrLettersEngShiftCaps[i].classList.add('hidden');
        }
        if (arrLettersEngCaps[i].classList.contains('hidden')) {
          arrLettersEngDown[i].classList.remove('hidden');
          arrLettersEngUp[i].classList.add('hidden');
        }
      } else if (!arrSpanRus[i].classList.contains('hidden')) {
        if (!(arrLettersRusShiftCaps[i].classList.contains('hidden'))) {
          arrLettersRusShiftCaps[i].classList.add('hidden');
        }
        if (arrLettersRusCaps[i].classList.contains('hidden')) {
          arrLettersRusDown[i].classList.remove('hidden');
          arrLettersRusUp[i].classList.add('hidden');
        }
      }
    }
  });
  // SHIFT to mouse
  rowArr[3].lastChild.addEventListener('mousedown', () => {
    for (let i = 0; i < arrLettersEngUp.length; i += 1) {
      if (!arrSpanEng[i].classList.contains('hidden')) {
        if (arrLettersEngCaps[i].classList.contains('hidden')) {
          arrLettersEngDown[i].classList.add('hidden');
          arrLettersEngUp[i].classList.remove('hidden');
        } else if (!(arrLettersEngCaps[i].classList.contains('hidden'))) {
          arrLettersEngCaps[i].classList.add('hidden');
          arrLettersEngDown[i].classList.add('hidden');
          arrLettersEngShiftCaps[i].classList.remove('hidden');
        }
      } else if (!arrSpanRus[i].classList.contains('hidden')) {
        if (arrLettersRusCaps[i].classList.contains('hidden')) {
          arrLettersRusDown[i].classList.add('hidden');
          arrLettersRusUp[i].classList.remove('hidden');
        } else if (!(arrLettersRusCaps[i].classList.contains('hidden'))) {
          arrLettersRusCaps[i].classList.add('hidden');
          arrLettersRusDown[i].classList.add('hidden');
          arrLettersRusShiftCaps[i].classList.remove('hidden');
        }
      }
    }
  });

  // SHIFT to mouse
  rowArr[3].lastChild.addEventListener('mouseup', () => {
    for (let i = 0; i < arrLettersEngUp.length; i += 1) {
      if (!arrSpanEng[i].classList.contains('hidden')) {
        if (!(arrLettersEngShiftCaps[i].classList.contains('hidden'))) {
          arrLettersEngShiftCaps[i].classList.add('hidden');
        }
        if (arrLettersEngCaps[i].classList.contains('hidden')) {
          arrLettersEngDown[i].classList.remove('hidden');
          arrLettersEngUp[i].classList.add('hidden');
        }
      } else if (!arrSpanRus[i].classList.contains('hidden')) {
        if (!(arrLettersRusShiftCaps[i].classList.contains('hidden'))) {
          arrLettersRusShiftCaps[i].classList.add('hidden');
        }
        if (arrLettersRusCaps[i].classList.contains('hidden')) {
          arrLettersRusDown[i].classList.remove('hidden');
          arrLettersRusUp[i].classList.add('hidden');
        }
      }
    }
  });

  // capslock mouse
  rowArr[2].firstChild.addEventListener('click', (event) => {
    event.preventDefault();

    for (let i = 0; i < arrLettersEngCaps.length; i += 1) {
      if (!arrSpanEng[i].classList.contains('hidden')) {
        arrLettersEngCaps[i].classList.toggle('hidden');
        arrLettersEngDown[i].classList.toggle('hidden');
      } else if (!arrSpanRus[i].classList.contains('hidden')) {
        arrLettersRusCaps[i].classList.toggle('hidden');
        arrLettersRusDown[i].classList.toggle('hidden');
      }
    }
  });

  // tab by mouse
  rowArr[1].firstChild.addEventListener('click', (event) => {
    const { target } = event;
    if (target) {
      textArea.value += '\t';
    }
  });

  // enter by mouse
  rowArr[2].lastChild.addEventListener('click', (event) => {
    const { target } = event;
    if (target) {
      textArea.value += '\n';
    }
  });

  // backspace mouse
  rowArr[0].lastChild.addEventListener('click', (event) => {
    const { target } = event;
    const cursorStart = textArea.selectionStart;
    const cursorEnd = textArea.selectionEnd;

    if (target) {
      if (cursorStart !== 0 && cursorStart === cursorEnd) {
        textArea.value = (textArea.value.substring(0, cursorStart - 1)
        + textArea.value.substring(cursorStart + 1));
        textArea.setSelectionRange(cursorStart - 1, cursorStart - 1);
      }
    }
  });

  // delete mouse
  rowArr[1].lastChild.addEventListener('click', (event) => {
    const { target } = event;
    const cursorStart = textArea.selectionStart;

    if (target) {
      textArea.value = (textArea.value.substring(0, cursorStart)
      + textArea.value.substring(cursorStart + 1));
      textArea.setSelectionRange(cursorStart, cursorStart);
    }
  });

  // highlight onkeydown
  document.addEventListener('keydown', (event) => {
    for (let i = 0; i < keys.length; i += 1) {
      for (let j = 0; j < keys[i].length; j += 1) {
        if (event.code === keys[i][j].className) {
          highlight(arrButtonsRows[i][j]);
        }
      }
    }
  });

  // capslock, shift on buttons, change language on buttons, tab, enter. backspace
  document.addEventListener('keydown', (event) => {
    event.preventDefault();

    const cursorStart = textArea.selectionStart;
    const cursorEnd = textArea.selectionEnd;

    changeLanguage(event);

    if (event.code === 'CapsLock') {
      for (let i = 0; i < arrLettersEngCaps.length; i += 1) {
        if (!arrSpanEng[i].classList.contains('hidden')) {
          arrLettersEngCaps[i].classList.toggle('hidden');
          arrLettersEngDown[i].classList.toggle('hidden');
        } else if (!arrSpanRus[i].classList.contains('hidden')) {
          arrLettersRusCaps[i].classList.toggle('hidden');
          arrLettersRusDown[i].classList.toggle('hidden');
        }
      }
    }

    if (event.key === 'Shift') {
      for (let i = 0; i < arrLettersEngUp.length; i += 1) {
        if (!arrSpanEng[i].classList.contains('hidden')) {
          arrLettersEngDown[i].classList.add('hidden');
          arrLettersEngUp[i].classList.remove('hidden');
          arrLettersEngCaps[i].classList.add('hidden');
        } else if (!arrSpanRus[i].classList.contains('hidden')) {
          arrLettersRusDown[i].classList.add('hidden');
          arrLettersRusUp[i].classList.remove('hidden');
          arrLettersRusCaps[i].classList.add('hidden');
        }
      }
    }

    if (event.code === 'Enter') {
      textArea.value += '\n';
    }

    if (event.code === 'Tab') {
      textArea.value += '\t';
    }

    if (event.code === 'Backspace') {
      if (cursorStart !== 0 && cursorStart === cursorEnd) {
        textArea.value = (textArea.value.substring(0, cursorStart - 1)
        + textArea.value.substring(cursorStart + 1));
        textArea.setSelectionRange(cursorStart - 1, cursorStart - 1);
      }
    }

    if (event.code === 'Space') {
      textArea.value += ' ';
    }

    if (event.code === 'Delete') {
      textArea.value = (textArea.value.substring(0, cursorStart)
      + textArea.value.substring(cursorStart + 1));
      textArea.setSelectionRange(cursorStart, cursorStart);
    }

    textArea.focus();
  });
  // on highlight mouse
  wrapper.addEventListener('mousedown', (event) => {
    event.preventDefault();
    const button = event.target.closest('button');
    // const mains = !button.classList.contains('.hidden');

    if (!button) return;

    if (!wrapper.contains(button)) return;

    // if (!(button.closest('.hidden'))) {
    //   // console.log('pppppp');
    // }

    highlight(button);
  });
  // off  highlight mouse
  wrapper.addEventListener('mouseup', (event) => {
    event.preventDefault();
    const button = event.target.closest('button');
    deleteHighlight(button);
  });

  // add text in textarea onmouse
  wrapper.addEventListener('click', (event) => {
    const clickButton = event.target.closest('button');
    if (!clickButton) return;
    if (clickButton) {
      if (clickButton.innerText === '') {
        textArea.value += ' ';
      }
      if (clickButton.innerText === 'CapsLock') {
        if (clickButton.innerText === 'Shift') {
          textArea.value += '';
        }
      }
      if (clickButton.innerText === 'Backspace' || clickButton.innerText === 'Enter' || clickButton.innerText === 'Tab' || clickButton.innerText === 'Del' || clickButton.innerText === 'CapsLock' || clickButton.innerText === 'Shift' || clickButton.innerText === 'Alt' || clickButton.innerText === 'Win' || clickButton.innerText === 'Ctrl') {
        textArea.value += '';
      } else {
        textArea.value += clickButton.innerText;
      }
    }
    textArea.focus();
  });

  // add text in textarea onkeydown
  document.addEventListener('keydown', (event) => {
    event.preventDefault();

    const clickButton = event;

    if (!clickButton) return;

    for (let i = 0; i < keys.length; i += 1) {
      for (let j = 0; j < keys[i].length; j += 1) {
        if (!arrSpanEng[i].classList.contains('hidden')) {
          if (clickButton.code === keys[i][j].className && event.shiftKey) {
            if (clickButton.code === 'Backspace' || clickButton.code === 'Enter' || clickButton.code === 'Tab' || clickButton.code === 'Delete' || clickButton.code === 'CapsLock' || clickButton.code === 'ShiftLeft' || clickButton.code === 'ShiftRight' || clickButton.code === 'AltLeft' || clickButton.code === 'MetaLeft' || clickButton.code === 'ControlLeft' || clickButton.code === 'Space' || clickButton.code === 'AltRight') {
              textArea.value += '';
            } else {
              textArea.value += keys[i][j].eng.pressUp;
            }
          } else if (clickButton.code === keys[i][j].className) {
            if (clickButton.code === 'Backspace' || clickButton.code === 'Enter' || clickButton.code === 'Tab' || clickButton.code === 'Delete' || clickButton.code === 'CapsLock' || clickButton.code === 'ShiftLeft' || clickButton.code === 'ShiftRight' || clickButton.code === 'AltLeft' || clickButton.code === 'MetaLeft' || clickButton.code === 'ControlLeft' || clickButton.code === 'Space' || clickButton.code === 'AltRight') {
              textArea.value += '';
            } else if (clickButton.code === keys[i][j].className && !(arrLettersEngCaps[i].classList.contains('hidden'))) {
              textArea.value += keys[i][j].eng.caps;
            } else {
              textArea.value += keys[i][j].eng.pressDown;
            }
          }
        } else if (!arrSpanRus[i].classList.contains('hidden')) {
          if (clickButton.code === keys[i][j].className && event.shiftKey) {
            if (clickButton.code === 'Backspace' || clickButton.code === 'Enter' || clickButton.code === 'Tab' || clickButton.code === 'Delete' || clickButton.code === 'CapsLock' || clickButton.code === 'ShiftLeft' || clickButton.code === 'ShiftRight' || clickButton.code === 'AltLeft' || clickButton.code === 'MetaLeft' || clickButton.code === 'ControlLeft' || clickButton.code === 'Space' || clickButton.code === 'AltRight') {
              textArea.value += '';
            } else {
              textArea.value += keys[i][j].rus.pressUp;
            }
          } else if (clickButton.code === keys[i][j].className) {
            if (clickButton.code === 'Backspace' || clickButton.code === 'Enter' || clickButton.code === 'Tab' || clickButton.code === 'Delete' || clickButton.code === 'CapsLock' || clickButton.code === 'ShiftLeft' || clickButton.code === 'ShiftRight' || clickButton.code === 'AltLeft' || clickButton.code === 'MetaLeft' || clickButton.code === 'ControlLeft' || clickButton.code === 'Space' || clickButton.code === 'AltRight') {
              textArea.value += '';
            } else if (clickButton.code === keys[i][j].className && !(arrLettersRusCaps[i].classList.contains('hidden'))) {
              textArea.value += keys[i][j].rus.caps;
            } else {
              textArea.value += keys[i][j].rus.pressDown;
            }
          }
        }
      }
    }
  });

  document.addEventListener('keyup', (event) => {
    event.preventDefault();

    for (let i = 0; i < keys.length; i += 1) {
      for (let j = 0; j < keys[i].length; j += 1) {
        if (event.code === keys[i][j].className) {
          deleteHighlight(arrButtonsRows[i][j]);
        }
      }
    }

    if (event.key === 'Shift') {
      for (let i = 0; i < arrLettersEngUp.length; i += 1) {
        if (!arrSpanEng[i].classList.contains('hidden')) {
          arrLettersEngDown[i].classList.remove('hidden');
          arrLettersEngUp[i].classList.add('hidden');
        } else if (!arrSpanRus[i].classList.contains('hidden')) {
          arrLettersRusDown[i].classList.remove('hidden');
          arrLettersRusUp[i].classList.add('hidden');
        }
      }
    }
  });

  return keyboard;
};
