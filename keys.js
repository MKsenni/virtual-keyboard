const keys = [
  [
    {
      className: 'Backquote',
      eng: {
        pressDown: '`', pressUp: '~', caps: '`', shiftCaps: '~',
      },
      rus: {
        pressDown: 'ё', pressUp: 'Ё', caps: 'Ё', shiftCaps: 'ё',
      },
    },
    {
      className: 'Digit1',
      eng: {
        pressDown: '1', pressUp: '!', caps: '1', shiftCaps: '!',
      },
      rus: {
        pressDown: '1', pressUp: '!', caps: '1', shiftCaps: '!',
      },
    },
    {
      className: 'Digit2',
      eng: {
        pressDown: '2', pressUp: '@', caps: '2', shiftCaps: '@',
      },
      rus: {
        pressDown: '2', pressUp: '"', caps: '2', shiftCaps: '"',
      },
    },
    {
      className: 'Digit3',
      eng: {
        pressDown: '3', pressUp: '#', caps: '3', shiftCaps: '#',
      },
      rus: {
        pressDown: '3', pressUp: '№', caps: '3', shiftCaps: '№',
      },
    },
    {
      className: 'Digit4',
      eng: {
        pressDown: '4', pressUp: '$', caps: '4', shiftCaps: '$',
      },
      rus: {
        pressDown: '4', pressUp: ';', caps: '4', shiftCaps: ';',
      },
    },
    {
      className: 'Digit5',
      eng: {
        pressDown: '5', pressUp: '%', caps: '5', shiftCaps: '%',
      },
      rus: {
        pressDown: '5', pressUp: '%', caps: '5', shiftCaps: '%',
      },
    },
    {
      className: 'Digit6',
      eng: {
        pressDown: '6', pressUp: '^', caps: '6', shiftCaps: '^',
      },
      rus: {
        pressDown: '6', pressUp: ':', caps: '6', shiftCaps: ':',
      },
    },
    {
      className: 'Digit7',
      eng: {
        pressDown: '7', pressUp: '&', caps: '7', shiftCaps: '&',
      },
      rus: {
        pressDown: '7', pressUp: '?', caps: '7', shiftCaps: '?',
      },
    },
    {
      className: 'Digit8',
      eng: {
        pressDown: '8', pressUp: '*', caps: '8', shiftCaps: '*',
      },
      rus: {
        pressDown: '8', pressUp: '*', caps: '8', shiftCaps: '*',
      },
    },
    {
      className: 'Digit9',
      eng: {
        pressDown: '9', pressUp: '(', caps: '9', shiftCaps: '(',
      },
      rus: {
        pressDown: '9', pressUp: '(', caps: '9', shiftCaps: '(',
      },
    },
    {
      className: 'Digit0',
      eng: {
        pressDown: '0', pressUp: ')', caps: '0', shiftCaps: ')',
      },
      rus: {
        pressDown: '0', pressUp: ')', caps: '0', shiftCaps: ')',
      },
    },
    {
      className: 'Minus',
      eng: {
        pressDown: '-', pressUp: '_', caps: '-', shiftCaps: '_',
      },
      rus: {
        pressDown: '-', pressUp: '_', caps: '-', shiftCaps: '_',
      },
    },
    {
      className: 'Equal',
      eng: {
        pressDown: '=', pressUp: '+', caps: '=', shiftCaps: '+',
      },
      rus: {
        pressDown: '=', pressUp: '+', caps: '=', shiftCaps: '+',
      },
    },
    {
      className: 'Backspace',
      eng: {
        pressDown: 'Backspace', pressUp: 'Backspace', caps: 'Backspace', shiftCaps: 'Backspace',
      },
      rus: {
        pressDown: 'Backspace', pressUp: 'Backspace', caps: 'Backspace', shiftCaps: 'Backspace',
      },
    },
  ],

  [
    {
      className: 'Tab',
      eng: {
        pressDown: 'Tab', pressUp: 'Tab', caps: 'Tab', shiftCaps: 'Tab',
      },
      rus: {
        pressDown: 'Tab', pressUp: 'Tab', caps: 'Tab', shiftCaps: 'Tab',
      },
    },
    {
      className: 'KeyQ',
      eng: {
        pressDown: 'q', pressUp: 'Q', caps: 'Q', shiftCaps: 'q',
      },
      rus: {
        pressDown: 'й', pressUp: 'Й', caps: 'Ц', shiftCaps: 'ц',
      },
    },
    {
      className: 'KeyW',
      eng: {
        pressDown: 'w', pressUp: 'W', caps: 'W', shiftCaps: 'w',
      },
      rus: {
        pressDown: 'ц', pressUp: 'Ц', caps: 'Ц', shiftCaps: 'ц',
      },
    },
    {
      className: 'KeyE',
      eng: {
        pressDown: 'e', pressUp: 'E', caps: 'E', shiftCaps: 'e',
      },
      rus: {
        pressDown: 'у', pressUp: 'У', caps: 'У', shiftCaps: 'У',
      },
    },
    {
      className: 'KeyR',
      eng: {
        pressDown: 'r', pressUp: 'R', caps: 'R', shiftCaps: 'r',
      },
      rus: {
        pressDown: 'к', pressUp: 'К', caps: 'К', shiftCaps: 'к',
      },
    },
    {
      className: 'KeyT',
      eng: {
        pressDown: 't', pressUp: 'T', caps: 'T', shiftCaps: 't',
      },
      rus: {
        pressDown: 'е', pressUp: 'Е', caps: 'Е', shiftCaps: 'е',
      },
    },
    {
      className: 'KeyY',
      eng: {
        pressDown: 'y', pressUp: 'Y', caps: 'Y', shiftCaps: 'y',
      },
      rus: {
        pressDown: 'н', pressUp: 'Н', caps: 'Н', shiftCaps: 'н',
      },
    },
    {
      className: 'KeyU',
      eng: {
        pressDown: 'u', pressUp: 'U', caps: 'U', shiftCaps: 'u',
      },
      rus: {
        pressDown: 'г', pressUp: 'Г', caps: 'Г', shiftCaps: 'г',
      },
    },
    {
      className: 'KeyI',
      eng: {
        pressDown: 'i', pressUp: 'I', caps: 'I', shiftCaps: 'i',
      },
      rus: {
        pressDown: 'ш', pressUp: 'Ш', caps: 'Ш', shiftCaps: 'ш',
      },
    },
    {
      className: 'KeyO',
      eng: {
        pressDown: 'o', pressUp: 'O', caps: 'O', shiftCaps: 'o',
      },
      rus: {
        pressDown: 'щ', pressUp: 'Щ', caps: 'Щ', shiftCaps: 'щ',
      },
    },
    {
      className: 'KeyP',
      eng: {
        pressDown: 'p', pressUp: 'P', caps: 'P', shiftCaps: 'p',
      },
      rus: {
        pressDown: 'з', pressUp: 'З', caps: 'З', shiftCaps: 'з',
      },
    },
    {
      className: 'BracketLeft',
      eng: {
        pressDown: '[', pressUp: '{', caps: '[', shiftCaps: '{',
      },
      rus: {
        pressDown: 'х', pressUp: 'Х', caps: 'Х', shiftCaps: 'х',
      },
    },
    {
      className: 'BracketRight',
      eng: {
        pressDown: ']', pressUp: '}', caps: ']', shiftCaps: '}',
      },
      rus: {
        pressDown: 'ъ', pressUp: 'Ъ', caps: 'Ъ', shiftCaps: 'ъ',
      },
    },
    {
      className: 'Backslash',
      eng: {
        pressDown: '\\', pressUp: '|', caps: '\\', shiftCaps: '|',
      },
      rus: {
        pressDown: '\\', pressUp: '/', caps: '\\', shiftCaps: '/',
      },
    },
    {
      className: 'Delete',
      eng: {
        pressDown: 'Del', pressUp: 'Del', caps: 'Del', shiftCaps: 'Del',
      },
      rus: {
        pressDown: 'Del', pressUp: 'Del', caps: 'Del', shiftCaps: 'Del',
      },
    },
  ],

  [
    {
      className: 'CapsLock',
      eng: {
        pressDown: 'CapsLock', pressUp: 'CapsLock', caps: 'CapsLock', shiftCaps: 'CapsLock',
      },
      rus: {
        pressDown: 'CapsLock', pressUp: 'CapsLock', caps: 'CapsLock', shiftCaps: 'CapsLock',
      },
    },
    {
      className: 'KeyA',
      eng: {
        pressDown: 'a', pressUp: 'A', caps: 'A', shiftCaps: 'a',
      },
      rus: {
        pressDown: 'ф', pressUp: 'Ф', caps: 'Ф', shiftCaps: 'ф',
      },
    },
    {
      className: 'KeyS',
      eng: {
        pressDown: 's', pressUp: 'S', caps: 'S', shiftCaps: 's',
      },
      rus: {
        pressDown: 'ы', pressUp: 'Ы', caps: 'Ы', shiftCaps: 'ы',
      },
    },
    {
      className: 'KeyD',
      eng: {
        pressDown: 'd', pressUp: 'D', caps: 'D', shiftCaps: 'd',
      },
      rus: {
        pressDown: 'в', pressUp: 'В', caps: 'В', shiftCaps: 'в',
      },
    },
    {
      className: 'KeyF',
      eng: {
        pressDown: 'f', pressUp: 'F', caps: 'F', shiftCaps: 'f',
      },
      rus: {
        pressDown: 'а', pressUp: 'А', caps: 'А', shiftCaps: 'а',
      },
    },
    {
      className: 'KeyG',
      eng: {
        pressDown: 'g', pressUp: 'G', caps: 'G', shiftCaps: 'g',
      },
      rus: {
        pressDown: 'п', pressUp: 'П', caps: 'П', shiftCaps: 'п',
      },
    },
    {
      className: 'KeyH',
      eng: {
        pressDown: 'h', pressUp: 'H', caps: 'H', shiftCaps: 'h',
      },
      rus: {
        pressDown: 'р', pressUp: 'Р', caps: 'P', shiftCaps: 'p',
      },
    },
    {
      className: 'KeyJ',
      eng: {
        pressDown: 'j', pressUp: 'J', caps: 'J', shiftCaps: 'j',
      },
      rus: {
        pressDown: 'о', pressUp: 'О', caps: 'О', shiftCaps: 'о',
      },
    },
    {
      className: 'KeyK',
      eng: {
        pressDown: 'k', pressUp: 'K', caps: 'K', shiftCaps: 'k',
      },
      rus: {
        pressDown: 'л', pressUp: 'Л', caps: 'Л', shiftCaps: 'л',
      },
    },
    {
      className: 'KeyL',
      eng: {
        pressDown: 'l', pressUp: 'L', caps: 'L', shiftCaps: 'l',
      },
      rus: {
        pressDown: 'д', pressUp: 'Д', caps: 'Д', shiftCaps: 'д',
      },
    },
    {
      className: 'Semicolon',
      eng: {
        pressDown: ';', pressUp: ':', caps: ';', shiftCaps: ':',
      },
      rus: {
        pressDown: 'ж', pressUp: 'Ж', caps: 'Ж', shiftCaps: 'ж',
      },
    },
    {
      className: 'Quote',
      eng: {
        pressDown: "'", pressUp: '"', caps: "'", shiftCaps: '"',
      },
      rus: {
        pressDown: 'э', pressUp: 'Э', caps: 'Э', shiftCaps: 'э',
      },
    },
    {
      className: 'Enter',
      eng: {
        pressDown: 'Enter', pressUp: 'Enter', caps: 'Enter', shiftCaps: 'Enter',
      },
      rus: {
        pressDown: 'Enter', pressUp: 'Enter', caps: 'Enter', shiftCaps: 'Enter',
      },
    },
  ],

  [
    {
      className: 'ShiftLeft',
      eng: {
        pressDown: 'Shift', pressUp: 'Shift', caps: 'Shift', shiftCaps: 'Shift',
      },
      rus: {
        pressDown: 'Shift', pressUp: 'Shift', caps: 'Shift', shiftCaps: 'Shift',
      },
    },
    {
      className: 'KeyZ',
      eng: {
        pressDown: 'z', pressUp: 'Z', caps: 'Z', shiftCaps: 'z',
      },
      rus: {
        pressDown: 'я', pressUp: 'Я', caps: 'Я', shiftCaps: 'я',
      },
    },
    {
      className: 'KeyX',
      eng: {
        pressDown: 'x', pressUp: 'X', caps: 'X', shiftCaps: 'x',
      },
      rus: {
        pressDown: 'ч', pressUp: 'Ч', caps: 'Ч', shiftCaps: 'ч',
      },
    },
    {
      className: 'KeyC',
      eng: {
        pressDown: 'c', pressUp: 'C', caps: 'C', shiftCaps: 'c',
      },
      rus: {
        pressDown: 'с', pressUp: 'С', caps: 'С', shiftCaps: 'с',
      },
    },
    {
      className: 'KeyV',
      eng: {
        pressDown: 'v', pressUp: 'V', caps: 'V', shiftCaps: 'v',
      },
      rus: {
        pressDown: 'м', pressUp: 'М', caps: 'М', shiftCaps: 'м',
      },
    },
    {
      className: 'KeyB',
      eng: {
        pressDown: 'b', pressUp: 'B', caps: 'B', shiftCaps: 'b',
      },
      rus: {
        pressDown: 'и', pressUp: 'И', caps: 'И', shiftCaps: 'и',
      },
    },
    {
      className: 'KeyN',
      eng: {
        pressDown: 'n', pressUp: 'N', caps: 'N', shiftCaps: 'n',
      },
      rus: {
        pressDown: 'т', pressUp: 'Т', caps: 'Т', shiftCaps: 'т',
      },
    },
    {
      className: 'KeyM',
      eng: {
        pressDown: 'm', pressUp: 'M', caps: 'M', shiftCaps: 'm',
      },
      rus: {
        pressDown: 'ь', pressUp: 'Ь', caps: 'Ь', shiftCaps: 'ь',
      },
    },
    {
      className: 'Comma',
      eng: {
        pressDown: ',', pressUp: '<', caps: ',', shiftCaps: '<',
      },
      rus: {
        pressDown: 'б', pressUp: 'Б', caps: 'Б', shiftCaps: 'б',
      },
    },
    {
      className: 'Period',
      eng: {
        pressDown: '.', pressUp: '>', caps: '.', shiftCaps: '>',
      },
      rus: {
        pressDown: 'ю', pressUp: 'Ю', caps: 'Ю', shiftCaps: 'ю',
      },
    },
    {
      className: 'Slash',
      eng: {
        pressDown: '/', pressUp: '?', caps: '/', shiftCaps: '?',
      },
      rus: {
        pressDown: '.', pressUp: ',', caps: '.', shiftCaps: ',',
      },
    },
    {
      className: 'ArrowUp',
      eng: {
        pressDown: '▲', pressUp: '▲', caps: '▲', shiftCaps: '▲',
      },
      rus: {
        pressDown: '▲', pressUp: '▲', caps: '▲', shiftCaps: '▲',
      },
    },
    {
      className: 'ShiftRight',
      eng: {
        pressDown: 'Shift', pressUp: 'Shift', caps: 'Shift', shiftCaps: 'Shift',
      },
      rus: {
        pressDown: 'Shift', pressUp: 'Shift', caps: 'Shift', shiftCaps: 'Shift',
      },
    },
  ],

  [
    {
      className: 'ControlLeft',
      eng: {
        pressDown: 'Ctrl', pressUp: 'Ctrl', caps: 'Ctrl', shiftCaps: 'Ctrl',
      },
      rus: {
        pressDown: 'Ctrl', pressUp: 'Ctrl', caps: 'Ctrl', shiftCaps: 'Ctrl',
      },
    },
    {
      className: 'MetaLeft',
      eng: {
        pressDown: 'Win', pressUp: 'Win', caps: 'Win', shiftCaps: 'Win',
      },
      rus: {
        pressDown: 'Win', pressUp: 'Win', caps: 'Win', shiftCaps: 'Win',
      },
    },
    {
      className: 'AltLeft',
      eng: {
        pressDown: 'Alt', pressUp: 'Alt', caps: 'Alt', shiftCaps: 'Alt',
      },
      rus: {
        pressDown: 'Alt', pressUp: 'Alt', caps: 'Alt', shiftCaps: 'Alt',
      },
    },
    {
      className: 'Space',
      eng: {
        pressDown: ' ', pressUp: ' ', caps: ' ', shiftCaps: ' ',
      },
      rus: {
        pressDown: ' ', pressUp: ' ', caps: ' ', shiftCaps: ' ',
      },
    },
    {
      className: 'AltRight',
      eng: {
        pressDown: 'Alt', pressUp: 'Alt', caps: 'Alt', shiftCaps: 'Alt',
      },
      rus: {
        pressDown: 'Alt', pressUp: 'Alt', caps: 'Alt', shiftCaps: 'Alt',
      },
    },
    {
      className: 'ArrowLeft',
      eng: {
        pressDown: '◀', pressUp: '◀', caps: '◀', shiftCaps: '◀',
      },
      rus: {
        pressDown: '◀', pressUp: '◀', caps: '◀', shiftCaps: '◀',
      },
    },
    {
      className: 'ArrowDown',
      eng: {
        pressDown: '▼', pressUp: '▼', caps: '▼', shiftCaps: '▼',
      },
      rus: {
        pressDown: '▼', pressUp: '▼', caps: '▼', shiftCaps: '▼',
      },
    },
    {
      className: 'ArrowRight',
      eng: {
        pressDown: '▶', pressUp: '▶', caps: '▶', shiftCaps: '▶',
      },
      rus: {
        pressDown: '▶', pressUp: '▶', caps: '▶', shiftCaps: '▶',
      },
    },
    {
      className: 'ControlRight',
      eng: {
        pressDown: 'Ctrl', pressUp: 'Ctrl', caps: 'Ctrl', shiftCaps: 'Ctrl',
      },
      rus: {
        pressDown: 'Ctrl', pressUp: 'Ctrl', caps: 'Ctrl', shiftCaps: 'Ctrl',
      },
    },
  ],
];

export default keys;
