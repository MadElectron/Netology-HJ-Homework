function charToKeycode(code) {
  const keycodes = {
    'г': 'KeyU',
    'е': 'KeyT', 
    'и': 'KeyB', 
    'л': 'KeyK', 
    'н': 'KeyY',
    'о': 'KeyJ',
    'т': 'KeyN',
    'я': 'KeyZ'
  };

  return keycodes[code];
}

const nav = document.getElementsByTagName('nav')[0];
const initialCode = 'нетология';
const initialSequence = initialCode.split('').map(char => charToKeycode(char))
let codeSequence = initialSequence;

document.addEventListener('keyup', event => {
  if(event.ctrlKey && event.altKey && event.code === 'KeyT') {
    nav.classList.toggle('visible');
  }

  if (!(codeSequence.splice(0, 1) == event.code)) {
    codeSequence = initialSequence;
  }

  if (!codeSequence.length) {  
    const secret = document.getElementsByClassName('secret')[0];
    secret.classList.add('visible');
  }
});

const menu = document.getElementById('menu');
const buttons = document.getElementsByTagName('buttons');
const items = document.getElementsByClassName('items');