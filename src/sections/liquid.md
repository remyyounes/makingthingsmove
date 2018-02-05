```code
<P5Wrapper sketch={(p) => {
  // parameters
  const dimensions = { width: 200, height: 400 }
  const size = { width: 20, height: 20 }
  const dragCoefficient = 0.1
  let liquid
  let particle

  p.setup = function () {
    // setup canvas
    const { width, height } = dimensions
    p.createCanvas(dimensions.width, dimensions.height, p.P2D)

    // setup particle
    particle = new Particle({
      position: p.createVector(dimensions.width/2, 0),
      size,
    })

    // setup liquid
    liquid = new Liquid(
      0,
      dimensions.height/2,
      dimensions.width,
      dimensions.height/2,
      dragCoefficient
    )
  }

  // update loop / physics
  const update = () => {
    // apply gravity
    const gravity = p.createVector(0, particle.mass * 0.2)
    particle.applyForce(gravity)

    // apply drag force when in liquid
    if ( liquid.contains(particle)) {
      const drag = liquid.calculateDrag(particle)
      particle.applyForce(drag)
    }
    // reset particle on scene exit
    if (particle.position.y > dimensions.height + particle.size.height) {
      particle.position.y = 0
    }

    console.log(particle.acceleration.y)
    if ( particle.acceleration.y < 0 ) {
      debugger
    }

    // update particle position and velocity then reset acceleration
    particle.update()
  }

  // draw loop / rendering
  p.draw = function () {

    // render background
    p.background(p.color('white'))

    // render liquid
    liquid.display(p)

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
