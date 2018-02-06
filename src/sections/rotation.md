# Rotating objects

## Angle modes
```js
p.angleMode(p.DEGREES);
p.angleMode(p.RADIANS);
```
## Radians to Degrees
- `1 RAD = 180 / PI`
- `1 DEG = PI / 180`

## Rotating
```js
p.draw = function () {
  // ...
  p.angleMode(p.RADIANS);
  p.rotate(angle);
  p.translate(center.x, center.y);
  p.rect(width/2, width/2, width, height);
  // ...
}
```

## Finding the angle
you can use `p.atan2(dy, dx)` to find the angle between 2 points
```js
  const delta = pointB.copy().sub(pointA) // vector from A to B
  const angle = p.atan2(delta.y, delta.x); // angle of vector from A to B
```

```code
<P5Wrapper sketch={(p) => {
  let rotation = 10;
  const dimensions = { width: 400, height: 200 }

  p.setup = function () {
    p.createCanvas(dimensions.width, dimensions.height, p.P2D);
  };

  p.draw = function () {
    const { width, height } = dimensions
    p.background(p.color('white'))
    p.translate(width / 2, height / 2);

    p.angleMode(p.DEGREES);
    const angle = p.atan2(p.mouseY - height / 2, p.mouseX - width / 2);

    p.rotate(angle);
    p.rect(-20, -5, 40, 10);

    p.angleMode(p.RADIANS);
    p.rotate(angle);
    p.rect(-40, -5, 20, 10);
  };
}} />

```
