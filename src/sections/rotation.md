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
