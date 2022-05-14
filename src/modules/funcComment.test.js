import { JSDOM } from 'jsdom';
import { countingElementsFunc } from './funcComment.js';

const globalDom = new JSDOM('<ul id="ulContainer"></ul>');

global.document = globalDom.window.document;
global.window = globalDom.window;

const ulCont = document.getElementById('ulContainer');

test('checking right amount of elements', () => {
  const LIST = document.createElement('li');
  ulCont.appendChild(LIST);
  expect(countingElementsFunc(ulCont)).toBe(1);
});
