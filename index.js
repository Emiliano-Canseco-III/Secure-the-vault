let code1 = 7 + 3;
let code2 = (20 * 5) / 2 - 10;
let code3 = 139 % 100;

let message = "The vault has been secured. The combination is: ";

let codeA = code1 + "-" + code2 + "-" + code3;
let codeB = `${code1}-${code2}-${code3}`;

console.log(message + codeA);
console.log(`${message} ${codeB}`);
