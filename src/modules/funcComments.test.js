import { JSDOM } from 'jsdom';
import { countingElementsFunc } from './funcComments.js';

const globalDOM = new JSDOM(
  `<ul id="ulContainer"></ul>  
  <section id="addDynamicCards">
  <div class="cardContainer">
  </div>
  <div class="cardContainer">
  <ul id="comentDynamicList">
  <li>user : Comment 1</li>
  <li>user : Comment 2</li>
  </ul>
  </div>
  </section>`,
);

global.document = globalDOM.window.document;
global.window = globalDOM.window;

const ulCont = document.getElementById('ulContainer');

test('Check if element number matches counter', () => {
  const LIST = document.createElement('li');
  ulCont.appendChild(LIST);
  expect(countingElementsFunc(ulCont)).toBe(1);
});

test('Check if the right amout of cards are added', () => {
  const DynamicSection = document.querySelector('#addDynamicCards');
  expect(countingElementsFunc(DynamicSection)).toBe(2);
});

test('Check if the right amout of comments are added', () => {
  const commentContainerCount = document.querySelector('#comentDynamicList');
  expect(countingElementsFunc(commentContainerCount)).toBe(2);
});
