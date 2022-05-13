import { JSDOM } from "jsdom";
import { countElements } from "./funcComment.js";

const globalDom = new JSDOM(
  '<!DOCTYPE html><body><ul id="ulContainer"></body>'
);

global.document = globalDom.window.document;
global.window = globalDom.window;

const ulCon = document.getElementById("ulContainer");

test("checking right amount of elements", () => {
  const LIST = document.createElement("li");
  ulCon.appendChild(LIST);
  expect(countElements(ulCon)).toBe(1);
});
