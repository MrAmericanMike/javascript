// You can export default
// This you import in another file this way:
// import Circle from "./Circle.js";
// Notice it doesn't need {} around it

export default class Circle {
	constructor(x, y, radius) {
		this.x = x;
		this.y = y;
		this.radius = radius;
	}

	init() {
		console.log("Init a circle");
		// We have access to all globals
		console.log("Gravity: " + window.G);
		console.log("E is: " + E);

		// And of course the canvas context
		console.log(CTX);
	}
}
