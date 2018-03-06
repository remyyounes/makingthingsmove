webpackJsonp([16],{

/***/ "./src/sections/friction.md":
/***/ (function(module, exports) {

module.exports = "# Friction\n\n## Implementation\n\nLet's have another look a the Particle class.\n\n```js\nupdate() {\n  this.velocity.add(this.acceleration)\n  this.velocity.mult(this.friction) // decrease velocity\n  this.position.add(this.velocity)\n  this.acceleration.mult(0)\n}\n```\n\nIn the update method we can see that we are just multiplying the velocity by the friction property\n\nAll we have to do is to pass a friction value to our particle.\n\n```code\n<P5Wrapper sketch={(p) => {\n  // parameters\n  const dimensions = { width: 400, height: 200 }\n  const size = { width: 20, height: 20 }\n  let particle\n\n  p.setup = function () {\n    // setup canvas\n    const { width, height } = dimensions\n    p.createCanvas(dimensions.width, dimensions.height, p.P2D)\n\n    // setup particle\n    particle = new Particle({\n      velocity: p.createVector(8, 2),\n      friction: 0.97,\n      size,\n    })\n  }\n\n  // draw loop / rendering\n  p.draw = function () {\n    // render particle\n    p.push()\n    Art.ellipse(p, particle)\n    p.pop()\n\n    particle.update()\n  }\n\n}} />\n\n```\n"

/***/ })

});
//# sourceMappingURL=16.js.map