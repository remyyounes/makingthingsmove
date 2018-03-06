webpackJsonp([2],{

/***/ "./src/sections/spring.md":
/***/ (function(module, exports) {

module.exports = "# Spring Force\n\n## Hooke's Law\n\n`F = -kX`\n\n  - k is the springCoefficient\n  -  X is the distance between the 2 attached points\n\n![Hooke](http://hyperphysics.phy-astr.gsu.edu/hbase/imgmec/hook.gif)\n\n```js\nconst update = () => {\n  // apply spring\n  const delta = particle.position.copy().sub(anchor.position)\n  const spring = delta.mult(-springCoefficient)\n  particle.applyForce(spring)\n\n  // update particle position and velocity then reset acceleration\n  particle.update()\n}\n```\n\n```code\n<P5Wrapper sketch={(p) => {\n  // parameters\n  const dimensions = { width: 200, height: 400 }\n  const size = { width: 20, height: 20 }\n  const springCoefficient = 0.02\n  let anchor,particle\n\n  p.setup = function () {\n    // setup canvas\n    const { width, height } = dimensions\n    p.createCanvas(width, height, p.P2D)\n\n    // setup anchor\n    anchor = new Particle({\n      position: p.createVector(width / 2, height / 2),\n      size,\n    })\n\n    // setup particle\n    particle = new Particle({\n      position: p.createVector(width/2, 0),\n      friction: 0.97,\n      size,\n    })\n\n  }\n\n  // update loop / physics\n  const update = () => {\n    // apply spring\n    const delta = particle.position.copy().sub(anchor.position)\n    const spring = delta.mult(-springCoefficient)\n    particle.applyForce(spring)\n\n    // update particle position and velocity then reset acceleration\n    particle.update()\n  }\n\n  // draw loop / rendering\n  p.draw = function () {\n    // render background\n    p.background(p.color('white'))\n\n    // render particle\n    Art.ellipse(p, particle)\n\n    update()\n  }\n\n}} />\n\n```\n"

/***/ })

});
//# sourceMappingURL=2.js.map