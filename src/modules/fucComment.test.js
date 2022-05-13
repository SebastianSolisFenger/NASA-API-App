import { JSDOM } from "jsdom";
import { countElements } from "./funcComment.js";

const globalDom = new JSDOM(
  '<!DOCTYPE html><body><ul id="addList" class="ulconmock"></body>'
);

global.document = globalDom.window.document;
global.window = globalDom.window;

const ulCon = document.getElementById("addList");

test("checking right amount of elements", () => {
  const li = document.createElement("li");
  ulCon.appendChild(li);
  expect(countElements(ulCon)).toBe(1);
});
