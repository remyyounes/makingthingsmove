webpackJsonp([4],{

/***/ "./src/sections/primitives.md":
/***/ (function(module, exports) {

module.exports = "# Primitive Shapes\n\nPrimitives seem boring but sometimes a dot is all you need.\n- http://remyyounes.github.io/flock/ (Flocking Simulation)\n\nPrimitives are the building blocks for more complex shapes\n- http://remyyounes.github.io/ (Snake Game)\n\n## Drawing Path\nBefore drawing anything, we need to start a new path.\nOnce we are done drawing we can tell the context to validate the stroke\n```js\n  /* Drawing sequence */\n  ctx.beginPath()  // start\n  // ... draw ...\n  ctx.stroke() // done\n\n```\n\n## Rectangle\n```js\n  ctx.rect(\n    x,\n    y,\n    width,\n    height,\n  );\n```\n\n## Line\n```js\n  ctx.moveTo(x, y)\n  ctx.lineTo(x, y)\n\n```\n\n## Ellipse\n```js\n  ctx.ellipse(\n    x,\n    y,\n    radiusX,\n    radiusY,\n    rotation,\n    startAngle,\n    endAngle,\n    anticlockwise\n  );\n```\n\n## Ellipse Path\n\n```code\nclass CanvasExample extends React.Component {\n\n  render() {\n    const dimensions = { width: 500, height: 200 }\n    const size = { width: 100, height: 100 }\n    const position = { x: 200, y: 100 }\n\n    return (\n      <Canvas\n        dimensions={dimensions}\n        draw={(canvas => {\n          const ctx = canvas.getContext('2d')\n          ctx.clearRect(0,0, dimensions.width, dimensions.height)\n\n          // ===============\n          ctx.beginPath()\n          // uncomment moveTo\n          // ctx.moveTo(0,100)\n          // ctx.lineTo(100,200)\n          // ctx.stroke()\n          // ctx.beginPath()\n          ctx.ellipse(\n            position.x,\n            position.y,\n            size.width / 2,\n            size.height / 2,\n            0, // rotation\n            0, // start angle\n            2 * Math.PI // end angle\n          )\n          ctx.stroke()\n          // ===============\n\n        })}\n      />\n    )\n  }\n};\n\n```\n"

/***/ })

});
//# sourceMappingURL=4.js.map