import { keys } from "../../keys.js";
import * as KeyBoard from './keyboard.js';

const cssClasses = {
  KEY: 'key',
  ENG: 'eng',
  RUS: 'rus',
  DOWN: 'pressDown',
  UP: 'pressUp',
  CAPS: 'caps',
  SHIFTCAPS: 'shiftCaps',
}

const keyButtonEngDown = (data) => {
  let btnsFirstRow = new Array();
  for (let i = 0; i < data.length; i += 1) {
    let button = data[i].eng.pressDown;
    btnsFirstRow.push(button);
  }
  return btnsFirstRow;
};

const keyButtonEngUp = (data) => {
  let btnsFirstRow = new Array();
  for (let i = 0; i < data.length; i += 1) {
    let button = data[i].eng.pressUp;
    btnsFirstRow.push(button);
  }
  return btnsFirstRow;
};

const keyButtonEngCaps = (data) => {
  let btnsFirstRow = new Array();
  for (let i = 0; i < data.length; i += 1) {
    let button = data[i].eng.caps;
    btnsFirstRow.push(button);
  }
  return btnsFirstRow;
};

const keyButtonEngShiftCaps = (data) => {
  let btnsFirstRow = new Array();
  for (let i = 0; i < data.length; i += 1) {
    let button = data[i].eng.shiftCaps;
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
console.log(firstRowUp);
export const secondRowUp = keyButtonEngUp(keys[1]);
export const thirdRowUp = keyButtonEngUp(keys[2]);
export const fourRowUp = keyButtonEngUp(keys[3]);
export const fiveRowUp = keyButtonEngUp(keys[4]);

export const firstRowCaps = keyButtonEngCaps(keys[0]);
console.log(firstRowCaps);
export const secondRowCaps = keyButtonEngCaps(keys[1]);
export const thirdRowCaps = keyButtonEngCaps(keys[2]);
export const fourRowCaps = keyButtonEngCaps(keys[3]);
export const fiveRowCaps = keyButtonEngCaps(keys[4]);

export const firstRowShiftCaps = keyButtonEngShiftCaps(keys[0]);
console.log(firstRowShiftCaps);
export const secondRowShiftCaps = keyButtonEngShiftCaps(keys[1]);
export const thirdRowShiftCaps = keyButtonEngShiftCaps(keys[2]);
export const fourRowShiftCaps = keyButtonEngShiftCaps(keys[3]);
export const fiveRowShiftCaps = keyButtonEngShiftCaps(keys[4]);

export const createSpanEng = (buttonNumberRow) => {
  const element = KeyBoard.createElement('span', cssClasses.ENG);
  buttonNumberRow.append(element);
  return element;
}

export const createSpanRus = (buttonNumberRow) => {
  const element = KeyBoard.createElement('span', cssClasses.RUS);
  buttonNumberRow.append(element);
  return element;
}

export const createPress = (cssClass) => {
  const press = KeyBoard.createElement('span', cssClass);
  return press;
}

export const createVariationsPressHidden = (element) => {
  const pressUp =  createPress(cssClasses.UP);
  pressUp.classList.add('hidden');
  // pressUp.textContent = firstRowUp;

  const caps = createPress(cssClasses.CAPS);
  caps.classList.add('hidden');
  // for (let i = 0; i < firstRowCaps.length; i += 1) {
  //   caps.textContent = firstRowCaps[i];
  // }

  const shiftCaps = createPress(cssClasses.SHIFTCAPS);
  shiftCaps.classList.add('hidden');
  // for (let i = 0; i < firstRowShiftCaps.length; i += 1) {
  //   shiftCaps.textContent = firstRowShiftCaps[i];
  // }

  element.append( pressUp, caps, shiftCaps);
}