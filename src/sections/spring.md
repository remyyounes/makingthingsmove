# Spring Force

## Hooke's Law

`F = -kX`

  - k is the springCoefficient
  -  X is the distance between the 2 attached points

![Hooke](http://hyperphysics.phy-astr.gsu.edu/hbase/imgmec/hook.gif)

```js
const update = () => {
  // apply spring
  const delta = particle.position.copy().sub(anchor.position)
  const spring = delta.mult(-springCoefficient)
  particle.applyForce(spring)

  // update particle position and velocity then reset acceleration
  particle.update()
}
```

```code
<P5Wrapper sketch={(p) => {
  // parameters
  const dimensions = { width: 200, height: 400 }
  const size = { width: 20, height: 20 }
  const springCoefficient = 0.02
  let anchor,particle

  p.setup = function () {
    // setup canvas
    const { width, height } = dimensions
    p.createCanvas(width, height, p.P2D)

    // setup anchor
    anchor = new Particle({
      position: p.createVector(width / 2, height / 2),
      size,
    })

    // setup particle
    particle = new Particle({
      position: p.createVector(width/2, 0),
      friction: 0.97,
      size,
    })

  }

  // update loop / physics
  const update = () => {
    // apply spring
    const delta = particle.position.copy().sub(anchor.position)
    const spring = delta.mult(-springCoefficient)
    particle.applyForce(spring)

    // update particle position and velocity then reset acceleration
    particle.update()
  }

  // draw loop / rendering
  p.draw = function () {
    // render background
    p.background(p.color('white'))

    // render particle
    Art.ellipse(p, particle)

    update()
  }

}} />

```
