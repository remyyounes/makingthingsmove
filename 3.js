webpackJsonp([3],{

/***/ "./src/sections/rotation.md":
/***/ (function(module, exports) {

module.exports = "# Rotating objects\n\n## Angle modes\n```js\np.angleMode(p.DEGREES);\np.angleMode(p.RADIANS);\n```\n## Radians to Degrees\n- `1 RAD = 180 / PI`\n- `1 DEG = PI / 180`\n\n## Rotating\n```js\np.draw = function () {\n  // ...\n  p.angleMode(p.RADIANS);\n  p.rotate(angle);\n  p.translate(center.x, center.y);\n  p.rect(width/2, width/2, width, height);\n  // ...\n}\n```\n\n## Finding the angle\nyou can use `p.atan2(dy, dx)` to find the angle between 2 points\n```js\n  const delta = pointB.copy().sub(pointA) // vector from A to B\n  const angle = p.atan2(delta.y, delta.x); // angle of vector from A to B\n```\n\n```code\n<P5Wrapper sketch={(p) => {\n  let rotation = 10;\n  const dimensions = { width: 400, height: 200 }\n\n  p.setup = function () {\n    p.createCanvas(dimensions.width, dimensions.height, p.P2D);\n  };\n\n  p.draw = function () {\n    const { width, height } = dimensions\n    p.background(p.color('white'))\n    p.translate(width / 2, height / 2);\n\n    p.angleMode(p.DEGREES);\n    const angle = p.atan2(p.mouseY - height / 2, p.mouseX - width / 2);\n\n    p.rotate(angle);\n    p.rect(-20, -5, 40, 10);\n\n    p.angleMode(p.RADIANS);\n    p.rotate(angle);\n    p.rect(-40, -5, 20, 10);\n  };\n}} />\n\n```\n"

/***/ })

});
//# sourceMappingURL=3.js.map