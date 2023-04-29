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

export const keyButton = (data) => {
  for (let i = 0; i < data.length; i++) {
    let button = data[i].eng.pressDown;
    return button;
  }
}

export const firstRow = keyButton(keys[0]);
export const secondRow = keyButton(keys[1]);
export const thirdRow = keyButton(keys[2]);
export const fourRow = keyButton(keys[3]);
export const fiveRow = keyButton(keys[4]);
console.log(secondRow);