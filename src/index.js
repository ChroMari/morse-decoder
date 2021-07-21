const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    for (let i = 0; i < expr.length; i = i + 10) {
      let str = expr.slice(i, i + 10);
      if (str === '**********') arr.push(' ');
      else {
        let res = ''
        for (let j = 0; j < str.length; j = j + 2) {
          let str2 = str.slice(j, j + 2);
          if (str2 === '10') res += '.';
          else if (str2 === '11') res += '-';
        }
        arr.push(res);
      }
    }
    let arrRes = '';
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === ' ' ) arrRes += ' ';
      else arrRes += MORSE_TABLE[arr[i]];
    }
    return arrRes;
}

module.exports = {
    decode
}
