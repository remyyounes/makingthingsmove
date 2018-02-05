```code
<P5Wrapper sketch={(p) => {
  let rotation = 10;
  const dimensions = { width: 400, height: 200 }

  p.setup = function () {
    p.createCanvas(dimensions.width, dimensions.height, p.P2D);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.rotation){
      rotation = props.rotation * Math.PI / 180;
    }
  };

  p.draw = function () {
    p.angleMode(p.DEGREES);
    p.background(p.color('white'))
    const { width, height } = dimensions
    var a = p.atan2(p.mouseY - height / 2, p.mouseX - width / 2);
    console.log(a)
    p.translate(width / 2, height / 2);
    p.push();
    p.rotate(a);
    p.rect(-20, -5, 40, 10);
    p.pop();
    p.angleMode(p.RADIANS);
    p.rotate(a);
    p.rect(-40, -5, 20, 10);
  };
}} />

```
