import { createKeyboard } from './components/keyboard/keyboard.js';
import keys from './keys.js';

const keyboard = createKeyboard(keys);
document.body.append(keyboard);
