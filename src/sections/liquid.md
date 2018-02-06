# Liquid and Drag
Sometimes you may want to alter the environment of your world to simulate water.

Here's an example of a particle going through a body of water

```js
var Liquid = function(x, y, w, h, c) {
  this.x = x
  this.y = y
  this.w = w
  this.h = h
  this.c = c
}

Liquid.prototype.contains = function(m) {
  var l = m.position
  return (
    l.x > this.x &&
    l.x < this.x + this.w &&
    l.y > this.y &&
    l.y < this.y + this.h
  )
}

Liquid.prototype.calculateDrag = function(m) {
  var speed = m.velocity.mag()
  var dragMagnitude = this.c * speed * speed

  // Direction is inverse of velocity
  var dragForce = m.velocity.copy()
  dragForce.mult(-1)
  dragForce.normalize()
  dragForce.mult(dragMagnitude)

  return dragForce
}

Liquid.prototype.display = function(p) {
  p.noStroke()
  p.fill(p.color(0, 126, 255, 102))
  p.rect(this.x, this.y, this.w, this.h)
}

export default Liquid

```

```code
<P5Wrapper sketch={p => {
  // parameters
  const dimensions = { width: 200, height: 400 }
  const size = { width: 20, height: 20 }
  const dragCoefficient = 0.1
  let liquid
  let particle

  p.setup = function() {
    // setup canvas
    const { width, height } = dimensions
    p.createCanvas(dimensions.width, dimensions.height, p.P2D)

    // setup particle
    particle = new Particle({
      position: p.createVector(dimensions.width / 2, 0),
      size,
    })

    // setup liquid
    liquid = new Liquid(
      0,
      dimensions.height / 2,
      dimensions.width,
      dimensions.height / 2,
      dragCoefficient
    )
  }

  // update loop / physics
  const update = () => {
    // apply gravity
    const gravity = p.createVector(0, particle.mass * 0.2)
    particle.applyForce(gravity)

    // apply drag force when in liquid
    if (liquid.contains(particle)) {
      const drag = liquid.calculateDrag(particle)
      particle.applyForce(drag)
    }
    // reset particle on scene exit
    if (particle.position.y > dimensions.height + particle.size.height) {
      particle.position.y = 0
    }

    // update particle position and velocity then reset acceleration
    particle.update()
  }

  // draw loop / rendering
  p.draw = function() {
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
