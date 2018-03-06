webpackJsonp([23],{

/***/ "./src/sections/flock-engine.md":
/***/ (function(module, exports) {

module.exports = "# Engine\n\nThe render loop will call `engine.update(simulation.entities)`\n\n```js\nclass Engine {\n  update(flock) {\n    flock.forEach(updateForces(flock))\n    flock.forEach(updateLife(flock))\n  }\n}\n\nexport default Engine\n\n```\n\n## Engine.updateForces\n\n```js\nconst forces = {\n  separation: group => focal => average(group.map(getSeparation(focal))),\n  alignment: group => focal =>\n    average(group.map(getVelocity)).limit(focal.maxForce),\n  cohesion: group => focal => steer(average(group.map(getPosition)))(focal),\n}\n```\n\n```js\nconst updateForces = flock => focal => {\n  const all = Object.keys(forces).map(updateRule(flock, focal))\n  const sum = all.reduce((acc, next) => acc.add(next), new p5.Vector(0, 0))\n  focal.applyForce(sum.mult(focal.maxVelocity))\n  focal.velocity.normalize(focal.maxVelocity * focal.getHealth())\n}\n```\n\n```js\nconst updateRule = (flock, boid) => rule => {\n  const force = new p5.Vector(0, 0)\n  if (boid.rules[rule].active) {\n    const group = getNeighbours(flock, boid.rules[rule].radius)(boid)\n    force.add(computeForce(rule, group)(boid))\n  }\n  return force\n}\n\n```\n### Proximity helper\n```js\nconst getNeighbours = (flock, radius) => focal =>\n  flock.filter(boid => {\n    const distance = getDelta(focal)(boid).mag()\n    return focal !== boid && distance < radius && distance > 0\n  })\n```\n"

/***/ })

});
//# sourceMappingURL=23.js.map