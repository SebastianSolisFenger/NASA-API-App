import { JSDOM } from 'jsdom';
import { countingElementsFunc } from './funcComments.js';

const globalDOM = new JSDOM('<ul id="ulContainer"></ul>');

global.document = globalDOM.window.document;
global.window = globalDOM.window;

const ulCont = document.getElementById('ulContainer');

test('Check if element number matches counter', () => {
  const LIST = document.createElement('li');
  ulCont.appendChild(LIST);
  expect(countingElementsFunc(ulCont)).toBe(1);
});
