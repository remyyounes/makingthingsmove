webpackJsonp([1],{

/***/ "./src/sections/stroke.md":
/***/ (function(module, exports) {

module.exports = "# Stroke\nstrokes the current or given path with the current stroke style\n\n# Stroke Style\n```js\nctx.setLineDash([5, 2])\n```\n\n# Stroke Shape\n```js\nctx.strokeRect(0, 0, width, height)\n```\n\n# Stroke Given Path\n```js\nconst path = new Path2D(\"M10 10 h 80 v 80 h -80 Z\")\nctx.stroke(path)\n```\n\n# Stroke Current Path\n```js\nctx.beginPath()\nctx.rect(0, 0, width, height)\nctx.stroke()\n```\n\n```code\n  <Canvas draw={(canvas => {\n    const ctx = canvas.getContext('2d')\n    ctx.clearRect(0,0, canvas.width, canvas.height)\n    const width = 100\n    const height = 100\n    ctx.beginPath()\n    ctx.setLineDash([5, 2])\n    ctx.rect(0, 0, width, height)\n    ctx.ellipse(0, 0, width / 2, height / 2, 0, 0, 2 * Math.PI)\n    ctx.stroke()\n  })} />\n```\n"

/***/ })

});
//# sourceMappingURL=1.js.map