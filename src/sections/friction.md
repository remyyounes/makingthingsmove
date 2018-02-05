```code
<P5Wrapper sketch={(p) => {
  // parameters
  const dimensions = { width: 400, height: 200 }
  const size = { width: 20, height: 20 }
  let particle

  p.setup = function () {
    // setup canvas
    const { width, height } = dimensions
    p.createCanvas(dimensions.width, dimensions.height, p.P2D)

    // setup particle
    particle = new Particle({
      velocity: p.createVector(8, 2),
      friction: 0.97,
      size,
    })
  }

  // draw loop / rendering
  p.draw = function () {
    // render particle
    p.push()
    Art.ellipse(p, particle)
    p.pop()

    particle.update()
  }

}} />

```
