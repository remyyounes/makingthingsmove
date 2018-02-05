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
      position: p.createVector(0, 0),
      velocity: p.createVector(8, 2),
      friction: 0.97,
      size,
    })

  }

  // update loop / physics
  const update = () => {
    particle.update()
  }

  // draw loop / rendering
  p.draw = function () {

    // render background
    p.background(p.color('white'))

    // render particle
    const { width: w, height: h } = particle.size
    p.push()
    p.ellipse(
      particle.position.x,
      particle.position.y,
      particle.size.width,
      particle.size.height
    )
    p.pop()
    update()
  }

}} />

```