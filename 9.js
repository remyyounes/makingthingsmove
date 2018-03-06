webpackJsonp([9],{

/***/ "./src/sections/oscillation.md":
/***/ (function(module, exports) {

module.exports = "# Oscilation\n\nPlaying and combining oscillating values is by far the most fascinating part of playing with the canvas.\n\n![Trigonometry](https://www.mathsisfun.com/algebra/images/sine-cosine-graph.gif)\n\n\n```code\n<P5Wrapper sketch={(p) => {\n  // parameters\n  const dimensions = { width: 400, height: 250 }\n  const center = { x: dimensions.width / 2, y: dimensions.height / 2 }\n  const size = { width: 20, height: 20 }\n  let particleA, particleB, particleC\n  const radius = 100\n  let time = 0\n\n  p.setup = function () {\n    // setup canvas\n    p.createCanvas(dimensions.width, dimensions.height, p.P2D)\n\n    // setup particle\n    particleA = new Particle({ size })\n    particleB = new Particle({ size })\n    particleC = new Particle({ size })\n    particleD = new Particle({ size })\n  }\n\n  // update loop / physics\n  const update = () => {\n     particleA.position.x = center.x + Math.cos(time) * radius\n    particleA.position.y = center.y + Math.sin(time) * radius\n\n    particleB.position.x = center.x + Math.cos(time) * radius\n    particleB.position.y = center.y\n\n     particleC.position.x = center.x\n    particleC.position.y = center.y + Math.sin(time) * radius\n\n    particleD.position.x = center.x + Math.sin(time) * radius\n    particleD.position.y = center.y + Math.sin(time) * radius\n    time += 0.1\n  }\n\n  // draw loop / rendering\n  p.draw = function () {\n\n    // render background\n    /* p.background(p.color('white')) */\n\n    // render particles\n    Art.ellipse(p, particleA)\n    Art.ellipse(p, particleB)\n    Art.ellipse(p, particleC)\n    Art.ellipse(p, particleD)\n    update()\n  }\n\n}} />\n\n```\n"

/***/ })

});
//# sourceMappingURL=9.js.map