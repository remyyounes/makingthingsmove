webpackJsonp([18],{

/***/ "./src/sections/flock-world.md":
/***/ (function(module, exports) {

module.exports = "# World\n\n## Responsibilities\n\n* maintaining the array of game entities\n* remove dead entities\n* wrapping entities around the world\n\n```js\nimport p5 from 'p5'\n\nconst wrap = dimensions => particle => {\n  particle.position.x += particle.position.x < 0 ? dimensions.x : 0\n  particle.position.y += particle.position.y < 0 ? dimensions.y : 0\n  particle.position.x %= dimensions.x\n  particle.position.y %= dimensions.y\n}\n\nconst isAlive = entity => entity.getHealth() > 0\n\nclass World {\n  constructor(props) {\n    this.entities = props.entities || []\n    this.dimensions = props.dimensions\n  }\n\n  update() {\n    this.entities = this.entities.filter(isAlive)\n    this.entities.forEach(wrap(this.dimensions))\n  }\n}\n\nexport default World\n\n```\n"

/***/ })

});
//# sourceMappingURL=18.js.map