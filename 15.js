webpackJsonp([15],{

/***/ "./src/sections/gravity.md":
/***/ (function(module, exports) {

module.exports = "# Applying Gravity\n\nApplying gravity to an object is as simple as applying a constant downward force.\n```js\nconst gravity = p.createVector(0, particle.mass * 0.2)\nparticle.applyForce(gravity)\n```\n\n```code\n<P5Wrapper sketch={(p) => {\n  // parameters\n  const dimensions = { width: 200, height: 400 }\n  const size = { width: 20, height: 20 }\n  let particle\n\n  p.setup = function () {\n    // setup canvas\n    const { width, height } = dimensions\n    p.createCanvas(dimensions.width, dimensions.height, p.P2D)\n\n    // setup particle\n    particle = new Particle({\n      position: p.createVector(dimensions.width/2, 0),\n      size,\n    })\n  }\n\n  // update loop / physics\n  const update = () => {\n    // apply gravity\n    const gravity = p.createVector(0, particle.mass * 0.2)\n    particle.applyForce(gravity)\n\n    // reset particle on scene exit\n    if (particle.position.y > dimensions.height + particle.size.height) {\n      particle.position.y = 0\n      particle.velocity.y = 0\n    }\n\n    // update particle position and velocity then reset acceleration\n    particle.update()\n  }\n\n  // draw loop / rendering\n  p.draw = function () {\n\n    // render background\n    p.background(p.color('white'))\n\n    // render particle\n    p.push()\n    Art.ellipse(p, particle)\n    p.pop()\n    update()\n  }\n\n}} />\n\n```\n"

/***/ })

});
//# sourceMappingURL=15.js.map