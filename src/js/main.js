console.log("TEST");

// We can import globals here or in index.html
import "./Globals.js";

import Circle from "./Circle.js";
import { add, subtract } from "./Helpers.js";
import TOOLS from "./Tools.js";

const circle = new Circle(10, 20, 30);
circle.init();
console.log(add(10, 20));
console.log(subtract(10, 20));
console.log(TOOLS.multiply(10, 20));
console.log(TOOLS.divide(10, 20));

// The use of window. is optional
console.log(window.PI);
console.log(PI);
