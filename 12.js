webpackJsonp([12],{

/***/ "./src/sections/liquid.md":
/***/ (function(module, exports) {

module.exports = "# Liquid and Drag\nSometimes you may want to alter the environment of your world to simulate water.\n\nHere's an example of a particle going through a body of water\n\n```js\nvar Liquid = function(x, y, w, h, c) {\n  this.x = x\n  this.y = y\n  this.w = w\n  this.h = h\n  this.c = c\n}\n\nLiquid.prototype.contains = function(m) {\n  var l = m.position\n  return (\n    l.x > this.x &&\n    l.x < this.x + this.w &&\n    l.y > this.y &&\n    l.y < this.y + this.h\n  )\n}\n\nLiquid.prototype.calculateDrag = function(m) {\n  var speed = m.velocity.mag()\n  var dragMagnitude = this.c * speed * speed\n\n  // Direction is inverse of velocity\n  var dragForce = m.velocity.copy()\n  dragForce.mult(-1)\n  dragForce.normalize()\n  dragForce.mult(dragMagnitude)\n\n  return dragForce\n}\n\nLiquid.prototype.display = function(p) {\n  p.noStroke()\n  p.fill(p.color(0, 126, 255, 102))\n  p.rect(this.x, this.y, this.w, this.h)\n}\n\nexport default Liquid\n\n```\n\n```code\n<P5Wrapper sketch={p => {\n  // parameters\n  const dimensions = { width: 200, height: 400 }\n  const size = { width: 20, height: 20 }\n  const dragCoefficient = 0.1\n  let liquid\n  let particle\n\n  p.setup = function() {\n    // setup canvas\n    const { width, height } = dimensions\n    p.createCanvas(dimensions.width, dimensions.height, p.P2D)\n\n    // setup particle\n    particle = new Particle({\n      position: p.createVector(dimensions.width / 2, 0),\n      size,\n    })\n\n    // setup liquid\n    liquid = new Liquid(\n      0,\n      dimensions.height / 2,\n      dimensions.width,\n      dimensions.height / 2,\n      dragCoefficient\n    )\n  }\n\n  // update loop / physics\n  const update = () => {\n    // apply gravity\n    const gravity = p.createVector(0, particle.mass * 0.2)\n    particle.applyForce(gravity)\n\n    // apply drag force when in liquid\n    if (liquid.contains(particle)) {\n      const drag = liquid.calculateDrag(particle)\n      particle.applyForce(drag)\n    }\n    // reset particle on scene exit\n    if (particle.position.y > dimensions.height + particle.size.height) {\n      particle.position.y = 0\n    }\n\n    // update particle position and velocity then reset acceleration\n    particle.update()\n  }\n\n  // draw loop / rendering\n  p.draw = function() {\n    // render background\n    p.background(p.color('white'))\n\n    // render liquid\n    liquid.display(p)\n\n    // render particle\n    const { width: w, height: h } = particle.size\n    p.push()\n    p.ellipse(\n      particle.position.x,\n      particle.position.y,\n      particle.size.width,\n      particle.size.height\n    )\n    p.pop()\n    update()\n  }\n}} />\n\n```\n"

/***/ })

});
//# sourceMappingURL=12.js.map