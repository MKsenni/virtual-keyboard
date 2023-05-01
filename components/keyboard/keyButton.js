import keys from '../../keys.js';
import * as KeyBoard from './keyboard.js';

// const cssClasses = {
//   KEY: 'key',
//   ENG: 'eng',
//   RUS: 'rus',
//   DOWN: 'pressDown',
//   UP: 'pressUp',
//   CAPS: 'caps',
//   SHIFTCAPS: 'shiftCaps',
// }

const keyButtonEngDown = (data) => {
  const btnsFirstRow = [];
  for (let i = 0; i < data.length; i += 1) {
    const button = data[i].eng.pressDown;
    btnsFirstRow.push(button);
  }
  return btnsFirstRow;
};

const keyButtonEngUp = (data) => {
  const btnsFirstRow = [];
  for (let i = 0; i < data.length; i += 1) {
    const button = data[i].eng.pressUp;
    btnsFirstRow.push(button);
  }
  return btnsFirstRow;
};

const keyButtonEngCaps = (data) => {
  const btnsFirstRow = [];
  for (let i = 0; i < data.length; i += 1) {
    const button = data[i].eng.caps;
    btnsFirstRow.push(button);
  }
  return btnsFirstRow;
};

const keyButtonEngShiftCaps = (data) => {
  const btnsFirstRow = [];
  for (let i = 0; i < data.length; i += 1) {
    const button = data[i].eng.shiftCaps;
    btnsFirstRow.push(button);
  }
  return btnsFirstRow;
};

export const firstRow = keyButtonEngDown(keys[0]);
export const secondRow = keyButtonEngDown(keys[1]);
export const thirdRow = keyButtonEngDown(keys[2]);
export const fourRow = keyButtonEngDown(keys[3]);
export const fiveRow = keyButtonEngDown(keys[4]);

export const firstRowUp = keyButtonEngUp(keys[0]);
export const secondRowUp = keyButtonEngUp(keys[1]);
export const thirdRowUp = keyButtonEngUp(keys[2]);
export const fourRowUp = keyButtonEngUp(keys[3]);
export const fiveRowUp = keyButtonEngUp(keys[4]);

export const firstRowCaps = keyButtonEngCaps(keys[0]);
export const secondRowCaps = keyButtonEngCaps(keys[1]);
export const thirdRowCaps = keyButtonEngCaps(keys[2]);
export const fourRowCaps = keyButtonEngCaps(keys[3]);
export const fiveRowCaps = keyButtonEngCaps(keys[4]);

export const firstRowShiftCaps = keyButtonEngShiftCaps(keys[0]);
export const secondRowShiftCaps = keyButtonEngShiftCaps(keys[1]);
export const thirdRowShiftCaps = keyButtonEngShiftCaps(keys[2]);
export const fourRowShiftCaps = keyButtonEngShiftCaps(keys[3]);
export const fiveRowShiftCaps = keyButtonEngShiftCaps(keys[4]);

const keyButtonRusDown = (data) => {
  const btnsFirstRow = [];
  for (let i = 0; i < data.length; i += 1) {
    const button = data[i].rus.pressDown;
    btnsFirstRow.push(button);
  }
  return btnsFirstRow;
};

const keyButtonRusUp = (data) => {
  const btnsFirstRow = [];
  for (let i = 0; i < data.length; i += 1) {
    const button = data[i].rus.pressUp;
    btnsFirstRow.push(button);
  }
  return btnsFirstRow;
};

const keyButtonRusCaps = (data) => {
  const btnsFirstRow = [];
  for (let i = 0; i < data.length; i += 1) {
    const button = data[i].rus.caps;
    btnsFirstRow.push(button);
  }
  return btnsFirstRow;
};

const keyButtonRusShiftCaps = (data) => {
  const btnsFirstRow = [];
  for (let i = 0; i < data.length; i += 1) {
    const button = data[i].rus.shiftCaps;
    btnsFirstRow.push(button);
  }
  return btnsFirstRow;
};

export const firstRowRus = keyButtonRusDown(keys[0]);
export const secondRowRus = keyButtonRusDown(keys[1]);
export const thirdRowRus = keyButtonRusDown(keys[2]);
export const fourRowRus = keyButtonRusDown(keys[3]);
export const fiveRowRus = keyButtonRusDown(keys[4]);

export const firstRowUpRus = keyButtonRusUp(keys[0]);
export const secondRowUpRus = keyButtonRusUp(keys[1]);
export const thirdRowUpRus = keyButtonRusUp(keys[2]);
export const fourRowUpRus = keyButtonRusUp(keys[3]);
export const fiveRowUpRus = keyButtonRusUp(keys[4]);

export const firstRowCapsRus = keyButtonRusCaps(keys[0]);
export const secondRowCapsRus = keyButtonRusCaps(keys[1]);
export const thirdRowCapsRus = keyButtonRusCaps(keys[2]);
export const fourRowCapsRus = keyButtonRusCaps(keys[3]);
export const fiveRowCapsRus = keyButtonRusCaps(keys[4]);

export const firstRowShiftCapsRus = keyButtonRusShiftCaps(keys[0]);
export const secondRowShiftCapsRus = keyButtonRusShiftCaps(keys[1]);
export const thirdRowShiftCapsRus = keyButtonRusShiftCaps(keys[2]);
export const fourRowShiftCapsRus = keyButtonRusShiftCaps(keys[3]);
export const fiveRowShiftCapsRus = keyButtonRusShiftCaps(keys[4]);

export const createSpanLanguage = (buttonNumberRow, cssClasses) => {
  const element = KeyBoard.createElement('span', cssClasses);
  buttonNumberRow.append(element);
  return element;
};
