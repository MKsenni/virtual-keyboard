import { keyButton } from "./keyButton.js";
// import { keys } from "../../keys.js";
import { firstRow, secondRow, thirdRow, fourRow, fiveRow } from "./keyButton.js";

const cssClasses = {
  KEYBOARD: 'keyboard',
  TEXTAREA: 'textarea',
  WRAPPER: 'keyboard__wrapper',
  ROW: 'keyboard__row',
  // ROW: ['keyboard__first-row', 'keyboard__second-row', 'keyboard__third-row', 'keyboard__four-row', 'keyboard__five-row'],
  KEY: 'key',
}

// let arr = keys;

export const createKeyboard = (keys) => {
  if (!Array.isArray(keys)) {
    throw TypeError(console.log('EROR'));
  }

  // let template = '';

  const keyboard  = createElement('section', cssClasses.KEYBOARD);
  
  const textArea  = createElement('textarea', cssClasses.TEXTAREA);
  keyboard.append(textArea);
  
  const wrapper  = createElement('div', cssClasses.WRAPPER);
  keyboard.append(wrapper);
  
  let rowArr = [];
  for (let i = 0; i < 5; i++) {
    const row = createElement('div', cssClasses.ROW);
    wrapper.append(row);
    rowArr.push(row);
    console.log(rowArr);
  }

  const buttonFirstRow  = createElement('button', cssClasses.KEY);
  rowArr[0].append(buttonFirstRow);
  buttonFirstRow.textContent = firstRow;
  
  const buttonSecondRow  = createElement('button', cssClasses.KEY);
  rowArr[1].append(buttonSecondRow);
  buttonSecondRow.textContent = secondRow;

  const buttonThirdRow  = createElement('button', cssClasses.KEY);
  rowArr[2].append(buttonThirdRow);
  buttonThirdRow.textContent = thirdRow;

  const buttonFourRow  = createElement('button', cssClasses.KEY);
  rowArr[3].append(buttonFourRow);
  buttonFourRow.textContent = fourRow;

  const buttonFiveRow  = createElement('button', cssClasses.KEY);
  rowArr[4].append(buttonFiveRow);
  buttonFiveRow.textContent = fiveRow;

  
  // template += `<span class=>${firstRow}`;
  // template += '</span>';

  // cssClasses.ROW.map(row => {
  //   template += `<div class=${row}>`;

  //     template += `<div class=${cssClasses.KEY}>`;

  //       template += `<span class=>${firstRow}`;
  //       template += '</span>';

  //     template += '</div>';
    
  //   template += '</div>';

    // template += `<div class=${row}>`;

    //   template += `<div class=${cssClasses.KEY}>`;

    //     template += `<span class=>${thirdRow}`;
    //     template += '</span>';

    //   template += '</div>';
    
    // template += '</div>';
  // }
  // );

  
  // wrapper.innerHTML = template;
  

  return keyboard;
}

const createElement = (tagName, className) => {
  const element = document.createElement(tagName);
  element.classList.add(className);
  return element;
}


// const buttons = Object.keys