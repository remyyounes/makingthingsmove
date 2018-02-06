# P5 in OpenGL Mode

## Setup
In order to enable 3D rendering, we need to pass `p.WEBGL` to `p.createCanvas` from `p.setup`
```js
p.setup = function () {
  p.createCanvas(600, 400, p.WEBGL);
};
```


```code
<P5Wrapper sketch={(p) => {
  let rotation = 10;

  p.setup = function () {
    p.createCanvas(600, 400, p.WEBGL);
  };

  p.draw = function () {
    rotation += 0.01
    p.background(100);
    p.noStroke();
    p.push();
    p.rotateY(rotation);
    p.rotateX(rotation/2);
    p.box(100);
    p.pop();
  };
}} />

```
