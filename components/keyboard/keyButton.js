import { keys } from "../../keys.js";

// const getArrayFromData = () => {
//   for (let i = 0; i < keys.length; i++) {
//     let row = keys[i];
//     return row;
//   }
// }

// let firstRow = getArrayFromData();
// console.log(firstRow);
// const firstRow = keys[0];

export const keyButtonEngDown = (data) => {
  for (let i = 0; i < data.length; i++) {
    let button = data[i].eng.pressDown;
    return button;
  }
};

const keyButtonEngUp = (data) => {
  for (let i = 0; i < data.length; i++) {
    let button = data[i].eng.pressUp;
    return button;
  }
};

const keyButtonRusDown = (data) => {
  for (let i = 0; i < data.length; i++) {
    let button = data[i].rus.pressDown;
    return button;
  }
};

const keyButtonRusUp = (data) => {
  for (let i = 0; i < data.length; i++) {
    let button = data[i].rus.pressDown;
    return button;
  }
};

export const firstRow = keyButtonEngDown(keys[0]);
export const secondRow = keyButtonEngDown(keys[1]);
export const thirdRow = keyButtonEngDown(keys[2]);
export const fourRow = keyButtonEngDown(keys[3]);
export const fiveRow = keyButtonEngDown(keys[4]);
