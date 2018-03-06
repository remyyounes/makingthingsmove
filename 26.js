webpackJsonp([26],{

/***/ "./src/sections/flock-boid-wrap.md":
/***/ (function(module, exports) {

module.exports = "# Wrapping\n\nWrapping will help us both:\n- keeping our flock in sight\n- breaking our flock into sub groups\n\n```js\n// teleport\nconst wrap = dimensions => particle => {\n  particle.position.x = particle.position.x % dimensions.x\n  particle.position.y = particle.position.y % dimensions.y\n}\n```\n## Example\n\nWrap boids across edges\n\n```code\n<P5Wrapper\n  sketch={p => {\n    // parameters\n    const dimensions = p.createVector(400, 400)\n    const center = dimensions.copy().div(2)\n    let flock = []\n    const flockCfg = {\n      count: 100,\n      maxVelocity: 1,\n      size: { width: 10, height: 20 },\n    }\n\n\n    const createBoid = ({\n      position = center.copy(),\n      size = flockCfg.size,\n      maxVelocity = flockCfg.maxVelocity,\n      velocity = p.createVector(\n        p.random(-1, 1),\n        p.random(-1, 1)\n      ).mult(maxVelocity),\n    } = {}) => new Boid({\n      size,\n      position,\n      velocity,\n      maxVelocity,\n     })\n\n    const renderBoid = Art.boid(p)\n\n    p.setup = function() {\n      // setup canvas\n      p.createCanvas(dimensions.x, dimensions.y, p.P2D)\n\n      // init boids\n      flock = R.times(() => createBoid({ }), flockCfg.count)\n    }\n\n    const wrap = dimensions => particle => {\n      particle.position.x = particle.position.x % dimensions.x\n      particle.position.y = particle.position.y % dimensions.y\n    }\n\n    // update loop / physics\n    const update = () => {\n      flock.map( boid => boid.update() )\n      flock.map( wrap(dimensions) )\n    }\n\n    // draw loop / rendering\n    p.draw = function() {\n      // render background\n      p.background(p.color('white'))\n      // render flock\n      flock.map(renderBoid)\n      // update world state\n      update()\n    }\n  }}\n/>\n```\n"

/***/ })

});
//# sourceMappingURL=26.js.map