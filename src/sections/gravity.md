# Applying Gravity

Applying gravity to an object is as simple as applying a constant downward force.
```js
const gravity = p.createVector(0, particle.mass * 0.2)
particle.applyForce(gravity)
```

```code
<P5Wrapper sketch={(p) => {
  // parameters
  const dimensions = { width: 200, height: 400 }
  const size = { width: 20, height: 20 }
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
  }

  // update loop / physics
  const update = () => {
    // apply gravity
    const gravity = p.createVector(0, particle.mass * 0.2)
    particle.applyForce(gravity)

    // reset particle on scene exit
    if (particle.position.y > dimensions.height + particle.size.height) {
      particle.position.y = 0
      particle.velocity.y = 0
    }

    // update particle position and velocity then reset acceleration
    particle.update()
  }

  // draw loop / rendering
  p.draw = function () {

    // render background
    p.background(p.color('white'))

    // render particle
    p.push()
    Art.ellipse(p, particle)
    p.pop()
    update()
  }

}} />

```
