```code
<P5Wrapper sketch={(p) => {
  // parameters
  const dimensions = { width: 200, height: 400 }
  const size = { width: 20, height: 20 }
  const dragCoefficient = 0.1
  let particle
  let anchor

  p.setup = function () {
    // setup canvas
    const { width, height } = dimensions
    p.createCanvas(dimensions.width, dimensions.height, p.P2D)

    // setup anchor
    anchor = new Particle({
      position: p.createVector(dimensions.width / 2, dimensions.height / 2),
      size,
    })

    // setup particle
    particle = new Particle({
      position: p.createVector(dimensions.width/2, 0),
      friction: 0.97,
      size,
    })

  }

  // update loop / physics
  const update = () => {
    // apply gravity
    debugger;
    const delta = particle.position.copy().sub(anchor.position)
    const spring = delta.mult(-0.02)
    particle.applyForce(spring)

    // update particle position and velocity then reset acceleration
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
