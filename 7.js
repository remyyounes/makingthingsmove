webpackJsonp([7],{

/***/ "./src/sections/p5.md":
/***/ (function(module, exports) {

module.exports = "# P5.js\n\np5.js (https://p5js.org/) is a JavaScript library that starts with the original goal of Processing, to make coding accessible for artists, designers, educators, and beginners, and reinterprets this for today's web.\n\n\n## P5 Lifecycle\nP5 provides lifecycle hooks for us to house our code\n\n### Setup\nthe `p.setup` gets called before the 1st draw loop is called.\n```js\np.setup = function () {\n  p.createCanvas(600, 400, p.P2D)\n}\n```\n\n\n### Draw\n\nthe `p.draw` gets called by requestFrameAnimation under the hood\n```js\np.draw = function () {\n  rotation += 0.05\n  p.background(100)\n  p.rotate(rotation)\n  p.rect(-size/2, -size/2, size, size)\n}\n```\n### Update\nAs in previous examples we still want to separate our physics and rendering logic so we will create an update/tick function and call it from `p,draw()`\n\n## P5Wrapper\n```js\n<P5Wrapper sketch={(p) => {\n  p.setup = function() {}\n  p.draw = function() {}\n}} />\n```\n\n```code\n<P5Wrapper sketch={(p) => {\n  let rotation = 10\n  let size = 10\n\n  p.setup = function () {\n    p.createCanvas(600, 400, p.P2D)\n  }\n\n  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {\n    if (props.rotation){\n      rotation = props.rotation * Math.PI / 180\n    }\n  }\n\n  p.draw = function () {\n    rotation += 0.05\n    p.background(100)\n    p.noStroke()\n    p.push()\n    p.translate(100, 100)\n    p.rotate(rotation)\n    p.rect(-size/2, -size/2, size, size)\n    p.pop()\n  }\n}} />\n\n```\n"

/***/ })

});
//# sourceMappingURL=7.js.map