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
  divs.setAttribute(
    "style",
    "width: 200px;height: 100px;border-radius: 10px;border-color: rgb(228, 228, 216);border-width: 5px;border-style: solid;background-color: wheat;z-index: 1;  position: relative;"
  );
  divs.style.opacity = "1";

  targetElement.appendChild(divs);

  // Do something after
  console.log("after delay");
}

console.log("first");
addOverlay();
