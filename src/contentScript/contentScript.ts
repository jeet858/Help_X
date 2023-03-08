import React, { createElement } from "react";
import ReactDOM from "react-dom";

console.log("workings");

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function addOverlay() {
  // Do something before delay
  console.log("before delay");

  await delay(10000);

  const targetElement = document.getElementById("screen");

  const divs = document.createElement("div");
  divs.textContent = "hello world";

  targetElement.appendChild(divs);

  // Do something after
  console.log("after delay");
}

console.log("first");
addOverlay();
