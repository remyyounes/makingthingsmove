webpackJsonp([14],{

/***/ "./src/sections/hello.md":
/***/ (function(module, exports) {

module.exports = "# Getting started with the canvas\n\nThe Canvas\n- is a DOM element\n- can handle 2D or 3D\n- can draw on its context\n\n## Canvas Context\n\nIn order to start drawing on a canvas we need to get its context.\nThe context contains information such as the current alpha, rotation, and scale settings.\nIt can be used to transform shapes' scale and rotation in relation to their parent (see Fractals).\n\n```js\n  const ctx =  canvas.getContext('2d')\n  // ... draw ...\n  ctx.save(); // enter a new context\n  // modify context scale\n  // ... draw more ...\n  ctx.restore(); // restore the previous context\n```\n\n# Drawing\n```js\n// ===== DRAW =====\nctx.beginPath()\nctx.moveTo(100,100)\nctx.lineTo(150,150)\nctx.stroke()\n// ================\n```\n\n\n## Line Example\n\n```code\nclass CanvasExample extends React.Component {\n\n  render() {\n    const dimensions = { width: 500, height: 200 }\n    const size = { width: 100, height: 100 }\n    const position = { x: 200, y: 100 }\n\n    return (\n      <Canvas\n        dimensions={dimensions}\n        draw={(canvas => {\n\n          // extract the contect from canvas\n          const ctx = canvas.getContext('2d')\n\n          // clear background before drawing\n          ctx.clearRect(0,0, dimensions.width, dimensions.height)\n\n          // ===== DRAW =====\n          ctx.beginPath()\n          ctx.moveTo(100,100)\n          ctx.lineTo(150,150)\n          ctx.stroke()\n          // ================\n\n        })}\n      />\n    )\n  }\n};\n\n```\n"

/***/ })

});
//# sourceMappingURL=14.js.map