```code
<P5Wrapper sketch={(p) => {
  let rotation = 10;

  p.setup = function () {
    p.createCanvas(600, 400, p.WEBGL);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.rotation){
      rotation = props.rotation * Math.PI / 180;
    }
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
