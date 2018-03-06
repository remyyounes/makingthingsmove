webpackJsonp([0],{

/***/ "./src/sections/tree.md":
/***/ (function(module, exports) {

module.exports = "# Fractals\nFractals are probably the most beautiful rendering. Because of their exponential nature, they are very CPU intensive and will quickly freeze your screen if you aren't careful with the number of iteration you want to generate\n\n## Fractal Trees\nFractal trees are usually generated from one branch that grows two others at its extremity.\nEach child branch is identical to its parent except it:\n- starts from the top of the previous one (`p.translate`)\n- deviates from its parent's orientation. (`p.rotate`)\n- grows shorter (`p.scale`)\n\neach child then starts growing children of its own until the maxGeration cap is reached\n\n### Other Fractals\nhttp://remyyounes.github.io/fractalizeru/\n\n```code\n<div>\n  <Tree\n    generations={8}\n    baseScale={0.77}\n    baseLength={150}\n  />\n</div>\n```\n"

/***/ })

});
//# sourceMappingURL=0.js.map