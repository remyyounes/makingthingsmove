# Friction

## Implementation

Let's have another look a the Particle class.

```js
update() {
  this.velocity.add(this.acceleration)
  this.velocity.mult(this.friction) // decrease velocity
  this.position.add(this.velocity)
  this.acceleration.mult(0)
}
```

In the update method we can see that we are just multiplying the velocity by the friction property

All we have to do is to pass a friction value to our particle.

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
