// Import a couple modules for testing.
import { sayHelloTo } from './modules/mod1';
import addArray from './modules/mod2';

// Run some functions from our imported modules.
const result1 = sayHelloTo('dan');
const result2 = addArray([1, 2, 3, 4]);

// Print the results on the page.
const printTarget = document.getElementsByClassName('debug__output')[0];

printTarget.innerText = `sayHelloTo('Dan') => ${result1}\n\n`;
printTarget.innerText += `addArray([1, 2, 3, 4]) => ${result2}`;
