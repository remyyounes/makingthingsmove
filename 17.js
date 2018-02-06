webpackJsonp([17],{

/***/ "./src/sections/fill.md":
/***/ (function(module, exports) {

module.exports = "# Fill in the colors\n\n\n## Fill style\n```js\n// transparent fill\nctx.fillStyle = \"rgba(0, 0, 255, 0.2)\"\n\n// solid fill\nctx.fillStyle = \"red\"\n\n// transparent even when solid fill\nctx.fillStyle = \"red\"\nctx.globalAlpha = value;\n```\n\n## Applying the filling\n```js\nctx.fill()\n```\n## Fill Style\n\n\n\n\n```code\n  <Canvas draw={(canvas => {\n    const ctx = canvas.getContext('2d')\n    const width = 100\n    const height = 100\n\n    ctx.clearRect(0,0, canvas.width, canvas.height)\n\n    // global fill\n    // ctx.globalAlpha = 0.5;\n\n    // Square\n    ctx.beginPath()\n    ctx.fillStyle = \"rgba(0, 0, 255, 0.2)\"\n    ctx.rect(0, 0, width, height)\n    ctx.fill()\n\n    // Circle\n    ctx.beginPath()\n    ctx.fillStyle = \"red\"\n    ctx.ellipse(\n      width / 2, // adjust origin\n      height / 2, // adjust origin\n      width / 2,\n      height / 2,\n      0,\n      0,\n      2 * Math.PI\n    )\n    ctx.fill()\n  })} />\n```\n"

/***/ })

});
//# sourceMappingURL=17.js.map